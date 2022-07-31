<script lang="ts">
	import Button, { Label, Icon } from '@smui/button';

	export let func = () => {};
</script>

<div class="button-container">
	<Button class="button" on:click={func} variant="raised">
		<Icon class="material-icons">delete</Icon>
		<Label>Clear</Label>
	</Button>
</div>

<style>
	.button-container {
		text-align: right;
		margin: 2rem 1rem;
	}
</style>
