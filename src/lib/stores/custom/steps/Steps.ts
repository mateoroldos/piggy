import { writable } from 'svelte/store';
import type { Step } from './types';
import type { StepState } from './types';

export function createSteps(steps: Step[]) {
	steps.forEach((step, index) => {
		index > 0 ? (step.state = 'inactive') : (step.state = 'active');
	});

	const { subscribe, update } = writable(steps);

	function changeStepState(index: number, state: StepState) {
		update((steps) => {
			steps[index].state = state;
			return steps;
		});
	}

	function resetStates() {
		update((steps) => {
			for (let index = 0; index < steps.length; index++) {
				if (index === 0) {
					steps[index].state = 'active';
				} else {
					steps[index].state = 'inactive';
				}
			}
			return steps;
		});
	}

	return {
		subscribe,
		changeStepState,
		resetStates
	};
}
