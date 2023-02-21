import { get, writable, type Subscriber, type Unsubscriber } from 'svelte/store';
import type { Step } from './types';
import type { StepState } from './types';

export function createActiveStep(steps: {
	subscribe: (this: void, run: Subscriber<Step[]>) => Unsubscriber;
	changeStepState: (index: number, state: StepState) => void;
	resetStates: () => void;
}) {
	const activeStep = writable(0);

	const { subscribe, set, update } = activeStep;

	async function increment() {
		const activeStepNumber = get(activeStep);
		const action = get(steps)[activeStepNumber].action;
		const numberOfSteps = get(steps).length;

		if (numberOfSteps > activeStepNumber) {
			if (action != null) {
				steps.changeStepState(activeStepNumber, 'loading');
				try {
					await action();
					steps.changeStepState(activeStepNumber, 'success');
					steps.changeStepState(activeStepNumber + 1, 'active');
					update((n) => n + 1);
				} catch (e) {
					console.error('Error has occured: ' + e);
					steps.changeStepState(activeStepNumber, 'error');
				}
			} else {
				steps.changeStepState(activeStepNumber, 'success');
				steps.changeStepState(activeStepNumber + 1, 'active');
				update((n) => n + 1);
			}
		}
	}

	function decrement() {
		const activeStepNumber = get(activeStep);

		if (activeStepNumber > 0) {
			steps.changeStepState(activeStepNumber - 1, 'active');
			steps.changeStepState(activeStepNumber, 'inactive');
			update((n) => n - 1);
		}
	}

	function goToStep(i: number) {
		const activeStepNumber = get(activeStep);

		steps.changeStepState(activeStepNumber, 'inactive');
		steps.changeStepState(i, 'active');
		set(i);
	}

	function reset() {
		set(0);
		steps.resetStates();
	}

	return {
		subscribe,
		increment,
		decrement,
		goToStep,
		reset
	};
}
