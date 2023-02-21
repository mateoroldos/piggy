import { createSteps } from '../custom/steps/Steps';
import { createActiveStep } from '../custom/steps/ActiveStep';
import { ImageStep, GeneralInfoStep, DateStep } from '$lib/components/features/piggyGeneratorSteps';

export const piggyGeneratorSteps = createSteps([
	{ title: 'Welcome', slug: 'welcome', component: GeneralInfoStep, action: null, form: true },
	{
		title: 'MoreAboutYou',
		slug: 'moreAboutYou',
		component: ImageStep,
		action: null,
		form: false
	},
	{
		title: 'MoreAboutYou',
		slug: 'moreAboutYou',
		component: DateStep,
		action: null,
		form: false
	}
]);

export const piggyGeneratorActiveStep = createActiveStep(piggyGeneratorSteps);
