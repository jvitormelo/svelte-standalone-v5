import type { ComponentProps } from 'svelte';
import type { EmbedWindow } from 'svelte-standalone';

import Counter from './index.svelte';

export type CounterProps = ComponentProps<Counter>;

export const defaultConfig: CounterProps = {};

declare global {
	interface Window extends EmbedWindow<Counter, 'counter'> {}
}