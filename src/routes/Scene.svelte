<script lang="ts">
	import { spring } from 'svelte/motion';
	import { T } from '@threlte/core';
	import { Environment, interactivity, useInteractivity } from '@threlte/extras';
	import RealBadge from './RealBadge.svelte';

	interactivity();
	const { pointer } = useInteractivity();

	const scale = spring(1);
	const rotation = spring(0);

	function onEnter() {
		$scale = 1.1;
		$rotation = (15 * Math.PI) / 180;
	}
	function onLeave() {
		$scale = 1;
		$rotation = 0;
	}
</script>

<T.PerspectiveCamera position.z={3} makeDefault />
<Environment files="/light.hdr" />
<T.Group scale={$scale} rotation.y={$rotation}>
	<T.Group rotation.y={$pointer.x} rotation.x={$pointer.y * -1}>
		<RealBadge on:pointerenter={onEnter} on:pointerleave={onLeave} />
	</T.Group>
</T.Group>
