<script>
	export let remove = false;
	import Tooltip, { Content } from '@smui/tooltip';
</script>

<Tooltip yPos="above"><Content>{remove ? 'Remove from' : 'Add to'} favorites</Content></Tooltip>
