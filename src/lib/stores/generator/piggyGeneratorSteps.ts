import { createSteps } from '../custom/steps/Steps';
import { createActiveStep } from '../custom/steps/ActiveStep';
import { ImageStep, GeneralInfoStep, DateStep } from '$lib/components/features/piggyGeneratorSteps';
import { postPiggy } from '../../utils/api/postPiggy';
import { goto } from '$app/navigation';

export const piggyGeneratorSteps = createSteps([
	{
		title: 'GeneralInfo',
		slug: 'general-info',
		component: GeneralInfoStep,
		action: null,
		form: true
	},
	{
		title: 'Image',
		slug: 'image',
		component: ImageStep,
		action: null,
		form: false
	},
	{
		title: 'Date',
		slug: 'date',
		component: DateStep,
		action: createPiggyAction,
		form: false
	}
]);

export const piggyGeneratorActiveStep = createActiveStep(piggyGeneratorSteps);

async function createPiggyAction() {
	await postPiggy().then((res) => {
		goto(`/piggy/${res.ID}`);
	});
}
