<script lang="ts">
	import { base } from '$app/paths';

	import NewTabLink from '../layout/NewTabLink.svelte';

	const logos = [
		{
			src: `${base}/img/official-logos/svelte-logo.png`,
			href: 'https://svelte.dev/'
		},
		{
			src: `${base}/img/official-logos/sveltematerialui-logo.png`,
			href: 'https://sveltematerialui.com/'
		},
		{
			src: `${base}/img/official-logos/semantic-ui-logo.png`,
			href: 'https://semantic-ui.com/'
		},
		{
			src: `${base}/img/official-logos/mongodb-logo.png`,
			href: 'https://www.mongodb.com/'
		}
	];

	const credits = [
		'Frontend Developer',
		'Backend Developer',
		'UX Designer',
		'Guitar tabs transcribed by'
	];
</script>

<h1>About JW Guitar Tabs</h1>

<h2>Version: 1.5.0</h2>

<h2>Purpose</h2>
<p>
	We not only love singing and listening to our Kingdom, Original, and Children's songs—we're also
	moved by it so we play them on our guitars for entertainment, during free times, and most
	importantly, for worship. <a href={base}>JW Guitar Tabs</a> is a website where people who love our
	JW songs can enjoy playing the simplest tabs on their guitars.
</p>

<h3>Why build a website for JWGT?</h3>
<p>
	As time went by and as <NewTabLink href="https://zeddrix.com/" text="my blog" />’s content grew,
	more and more of our brothers and sisters from around the world visited mainly for the <NewTabLink
		href="https://zeddrix.com/category/jw-guitar-tabs/"
		text="JW Guitar Tabs category"
	/>. So I thought dedicating a website solely for JW guitar tabs would be great.
</p>
<p>
	Besides, some have requested to convert the screenshotted guitar tabs into text. I, too, really
	wanted to do this. Actually, it’s what I first did. But the outcome was really not that nice,
	especially on mobile devices.
</p>
<p>
	Since I can't do anything about this dilemma in WordPress but to screenshot every tabset, I made
	up my mind to build an entirely new website where these tabs (as text) would render nicely on all
	devices.
</p>
<p>
	Read more about this website's inspiration and how the guitar tabs were made <NewTabLink
		href="https://zeddrix.com/a-new-web-app-for-jw-guitar-tabs/"
		text="here"
	/>.
</p>
<p>Thanks for coming and enjoy!</p>

<h2>Copyright & Terms Of Use</h2>
<p>
	You may read Copyright & Terms Of Use <a href="{base}/copyright">here</a>.
</p>

<h2>Credits</h2>
{#each credits as credit (credit)}
	<p>
		<b>{credit}: </b>
		<NewTabLink href="https://zeddrix.com/about-zedd/" text="Zeddrix Fabian" />
	</p>
{/each}

<h2>This website is built with ❤ with:</h2>
<div class="logos_container">
	{#each logos as { src, href } (href)}
		<a {href} target="_blank" rel="noreferrer">
			<img {src} alt="logo for {href}" class="ui logo circular tiny image" />
		</a>
	{/each}
</div>

<style>
	.logos_container {
		display: flex;
		justify-content: space-evenly;
		margin-top: 3rem;
		margin-bottom: 2rem;
	}
	.logos_container a {
		margin: 0 0.5rem;
	}
	.logo:hover {
		filter: opacity(60%);
	}
</style>
