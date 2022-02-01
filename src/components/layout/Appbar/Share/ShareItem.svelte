<script lang="ts">
	export let share: {
		link: string;
		social: string;
		svg: string;
	};
	const { link, social, svg } = share;
</script>

<a
	class="resp-sharing-button__link"
	href={link}
	target="_blank"
	rel="noopener"
	aria-label="Share on {social}"
>
	<div
		class="resp-sharing-button resp-sharing-button--{social.toLowerCase()} resp-sharing-button--medium"
	>
		<div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solid">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d={svg} /></svg>
		</div>
		{social}
	</div>
</a>

<style>
	.resp-sharing-button__link,
	.resp-sharing-button__icon {
		display: inline-flex;
	}
	.resp-sharing-button__link {
		text-decoration: none;
		color: #fff;
		margin: 0.25rem 0.5rem;
	}
	.resp-sharing-button {
		display: flex;
		min-width: 8rem;
		justify-content: center;
		border-radius: 5px;
		transition: 25ms ease-out;
		padding: 0.5rem 0.75rem;
		font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
	}
	.resp-sharing-button__icon svg {
		width: 1rem;
		height: 1rem;
		margin-right: 0.4rem;
		vertical-align: top;
	}
	.resp-sharing-button--small svg {
		margin: 0;
		vertical-align: middle;
	}

	/* Non solid icons get a stroke */
	.resp-sharing-button__icon {
		stroke: #fff;
		fill: none;
		display: flex;
		align-items: center;
	}

	/* Solid icons get a fill */
	.resp-sharing-button__icon--solid,
	.resp-sharing-button__icon--solidcircle {
		fill: #fff;
		stroke: none;
	}

	.resp-sharing-button--facebook {
		background-color: #3b5998;
		border-color: #3b5998;
	}
	.resp-sharing-button--facebook:hover,
	.resp-sharing-button--facebook:active {
		background-color: #2d4373;
		border-color: #2d4373;
	}

	.resp-sharing-button--twitter {
		background-color: #55acee;
		border-color: #55acee;
	}
	.resp-sharing-button--twitter:hover,
	.resp-sharing-button--twitter:active {
		background-color: #2795e9;
		border-color: #2795e9;
	}

	.resp-sharing-button--pinterest {
		background-color: #bd081c;
		border-color: #bd081c;
	}
	.resp-sharing-button--pinterest:hover,
	.resp-sharing-button--pinterest:active {
		background-color: #8c0615;
		border-color: #8c0615;
	}

	.resp-sharing-button--email {
		background-color: #777777;
		border-color: #777777;
	}
	.resp-sharing-button--email:hover,
	.resp-sharing-button--email:active {
		background-color: #5e5e5e;
		border-color: #5e5e5e;
	}
</style>
