# Before running

Create a `.env` file at the _topmost level_ with the **VITE_MONGO_URI** variable having the value of your _mongodb connection string_.

# Run

`npm run dev`

# IMPORTANT!!!

If you are using

## zeddrix.github.io/jw-guitar-tabs

Add this on **svelte.config.js** file

```js
kit: {
	...
	paths: {
		base: '/jw-guitar-tabs'
	},
   ...
}
```

On every file having the **href** (local file) and **img** attributes, be sure to do this:

```ts
<script lang="ts">
   ...
	import { base } from '$app/paths';
	...
</script>

<img
	src="{base}/img/jw-guitar-tabs-logo.svg"
	   class="jwgt-logo"
      alt="JWGT"
		height={50}
		width={50}
	/>
```

On **app.html**, change

`<link rel="icon" href="/favicon.ico" />`

to

`<link rel="icon" href="/jw-guitar-tabs/favicon.ico" />`

## A custom domain

You don't have to do any of the things above.
