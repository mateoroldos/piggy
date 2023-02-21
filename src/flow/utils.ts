import { addresses } from '$lib/stores/flow/flowStore';
import { transactionStore } from '$lib/stores/flow/transactionStore';
import * as fcl from '@onflow/fcl';

export function replaceWithProperValues(script) {
	return (
		script
			// For Tx/Scripts
			.replace('"../../utility/FlowToken.cdc"', addresses.FlowToken)
			.replace('"../../utility/FUSD.cdc"', addresses.FUSD)
			.replace('"../../utility/FungibleToken.cdc"', addresses.FungibleToken)
	);
}

export const executeTransaction = async (
	transaction: () => Promise<any>,
	actionAfterSucceed: () => Promise<any>
) => {
	transactionStore.initTransaction();

	try {
		const transactionId = await transaction();

		fcl.tx(transactionId).subscribe(async (res) => {
			transactionStore.subscribeTransaction(res);

			if (res.status === 4) {
				if (res.statusCode === 0 && actionAfterSucceed != undefined) {
					await actionAfterSucceed(res);
					transactionStore.resetTransaction();
					return;
				}
				setTimeout(() => transactionStore.resetTransaction(), 2000);
			}
		});
	} catch (e) {
		transactionStore.resetTransaction();
		throw e;
	}
};
