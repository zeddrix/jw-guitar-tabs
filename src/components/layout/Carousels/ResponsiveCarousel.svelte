<script lang="ts">
	import DeviceDetector from 'svelte-device-detector';
	import Carousel from './Carousel.svelte';
</script>

<DeviceDetector showInDevice="desktop">
	<Carousel arrows={true}><slot /></Carousel>
</DeviceDetector>

<DeviceDetector showInDevice={['mobile', 'tablet']}>
	<Carousel arrows={false}><slot /></Carousel>
</DeviceDetector>
