import type { SvelteComponent } from 'svelte';

export type StepState = 'inactive' | 'active' | 'ready' | 'loading' | 'success' | 'error';

export interface Step {
	title: string;
	slug?: string;
	component: typeof SvelteComponent;
	action: null | (() => Promise<void>);
	form: boolean;
	state?: StepState;
}
