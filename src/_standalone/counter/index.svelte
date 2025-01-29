<script lang="ts">
	import 'svelte-standalone/css/tailwind-utils.css';

	let count = $state(0);

	function increment() {
		if (count % 10 === 0 && count !== 0) {
			alert('Nice!');
		}
		count++;
	}

	function decrement() {
		count--;
	}
</script>

<div class="flex flex-col items-center rounded-lg bg-amber-100 p-8 shadow-lg">
	<h2 class="mb-4 text-3xl font-bold text-amber-800">Counter</h2>
	<div class="flex gap-4">
		<button
			on:click={decrement}
			class="transform rounded-full bg-amber-500 px-4 py-2 font-bold text-white shadow-md transition duration-300 ease-in-out hover:scale-105 hover:bg-amber-600"
		>
			-
		</button>
		<span class="rounded-lg bg-amber-200 px-6 py-2 font-mono text-4xl shadow-inner">
			{count}
		</span>
		<button
			on:click={increment}
			class="transform rounded-full bg-amber-500 px-4 py-2 font-bold text-white shadow-md transition duration-300 ease-in-out hover:scale-105 hover:bg-amber-600"
		>
			+
		</button>
	</div>
</div>
