import preprocess from 'svelte-preprocess';
import adapter_static from '@sveltejs/adapter-static';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter_static(),
		appDir: 'internal',
		paths: {
			base: '/jw-guitar-tabs'
		},
		prerender: {
			default: true,
			crawl: true,
			enabled: true,

			entries: [
				'*',
				// KINGDOM SONGS
				'/categories/kingdom-songs/1-jehovahs-attributes-guitar-tabs',
				'/categories/kingdom-songs/2-jehovah-is-your-name-guitar-tabs',
				'/categories/kingdom-songs/3-our-strength-our-hope-our-confidence-guitar-tabs',
				'/categories/kingdom-songs/4-jehovah-is-my-shepherd-guitar-tabs',
				'/categories/kingdom-songs/5-gods-wondrous-works-guitar-tabs',
				'/categories/kingdom-songs/6-the-heavens-declare-gods-glory-guitar-tabs',
				'/categories/kingdom-songs/7-jehovah-our-strength-guitar-tabs',
				'/categories/kingdom-songs/8-jehovah-is-our-refuge-guitar-tabs',
				'/categories/kingdom-songs/9-jehovah-is-our-king-guitar-tabs',
				'/categories/kingdom-songs/10-praise-jehovah-our-god-guitar-tabs',
				'/categories/kingdom-songs/11-creation-praises-god-guitar-tabs',
				'/categories/kingdom-songs/12-great-god-jehovah-guitar-tabs',
				'/categories/kingdom-songs/13-christ-our-model-guitar-tabs',
				'/categories/kingdom-songs/14-praising-earths-new-king-guitar-tabs',
				'/categories/kingdom-songs/15-praise-jehovahs-firstborn-guitar-tabs',
				'/categories/kingdom-songs/16-praise-jah-for-his-son-the-anointed-guitar-tabs',
				'/categories/kingdom-songs/17-i-want-to-guitar-tabs',
				'/categories/kingdom-songs/18-grateful-for-the-ransom-guitar-tabs',
				'/categories/kingdom-songs/19-lords-evening-meal-guitar-tabs',
				'/categories/kingdom-songs/20-you-gave-your-precious-son-guitar-tabs',
				'/categories/kingdom-songs/21-keep-on-seeking-first-the-kingdom-guitar-tabs',
				'/categories/kingdom-songs/22-the-kingdom-is-in-place-let-it-come-guitar-tabs',
				'/categories/kingdom-songs/23-jehovah-begins-his-rule-guitar-tabs',
				'/categories/kingdom-songs/24-come-to-jehovahs-mountain-guitar-tabs',
				'/categories/kingdom-songs/25-a-special-possession-guitar-tabs',
				'/categories/kingdom-songs/26-you-did-it-for-me-guitar-tabs',
				'/categories/kingdom-songs/27-revealing-of-gods-sons-guitar-tabs',
				'/categories/kingdom-songs/28-gaining-jehovahs-friendship-guitar-tabs',
				'/categories/kingdom-songs/29-living-up-to-our-name-guitar-tabs',
				'/categories/kingdom-songs/30-my-father-god-and-friend-guitar-tabs',
				'/categories/kingdom-songs/31-walk-with-god-guitar-tabs',
				'/categories/kingdom-songs/32-take-sides-with-jehovah-guitar-tabs',
				'/categories/kingdom-songs/33-throw-your-burden-on-jehovah-guitar-tabs',
				'/categories/kingdom-songs/34-walking-in-integrity-guitar-tabs',
				'/categories/kingdom-songs/35-make-sure-of-more-important-things-guitar-tabs',
				'/categories/kingdom-songs/36-we-guard-our-hearts-guitar-tabs',
				'/categories/kingdom-songs/37-serving-jehovah-whole-souled-guitar-tabs',
				'/categories/kingdom-songs/38-he-will-make-you-strong-guitar-tabs',
				'/categories/kingdom-songs/39-make-a-good-name-with-god-guitar-tabs',
				'/categories/kingdom-songs/40-to-whom-do-we-belong-guitar-tabs',
				'/categories/kingdom-songs/41-hear-my-prayer-guitar-tabs',
				'/categories/kingdom-songs/42-the-prayer-of-gods-servant-guitar-tabs',
				'/categories/kingdom-songs/43-prayer-of-thanks-guitar-tabs',
				'/categories/kingdom-songs/44-prayer-of-the-lowly-one-guitar-tabs',
				'/categories/kingdom-songs/45-meditation-of-my-heart-guitar-tabs',
				'/categories/kingdom-songs/46-we-thank-you-jehovah-guitar-tabs',
				'/categories/kingdom-songs/47-pray-to-jehovah-each-day-guitar-tabs',
				'/categories/kingdom-songs/48-daily-walking-with-jehovah-guitar-tabs',
				'/categories/kingdom-songs/49-making-jehovahs-heart-glad-guitar-tabs',
				'/categories/kingdom-songs/50-prayer-of-dedication-guitar-tabs',
				'/categories/kingdom-songs/51-to-god-we-are-dedicated-guitar-tabs',
				'/categories/kingdom-songs/52-christian-dedication-guitar-tabs',
				'/categories/kingdom-songs/53-preparing-to-preach-guitar-tabs',
				'/categories/kingdom-songs/54-this-is-the-way-guitar-tabs',
				'/categories/kingdom-songs/55-fear-them-not-guitar-tabs',
				'/categories/kingdom-songs/56-make-the-truth-your-own-guitar-tabs',
				'/categories/kingdom-songs/57-preaching-to-all-sorts-of-people-guitar-tabs',
				'/categories/kingdom-songs/58-search-for-friends-of-peace-guitar-tabs',
				'/categories/kingdom-songs/59-praise-jah-with-me-guitar-tabs',
				'/categories/kingdom-songs/60-it-means-their-life-guitar-tabs',
				'/categories/kingdom-songs/61-forward-you-witnesses-guitar-tabs',
				'/categories/kingdom-songs/62-the-new-song-guitar-tabs',
				'/categories/kingdom-songs/63-we-are-jehovahs-witnesses-guitar-tabs',
				'/categories/kingdom-songs/64-sharing-joyfully-in-harvest-guitar-tabs',
				'/categories/kingdom-songs/65-move-ahead-guitar-tabs',
				'/categories/kingdom-songs/66-declare-the-good-news-guitar-tabs',
				'/categories/kingdom-songs/67-preach-the-word-guitar-tabs',
				'/categories/kingdom-songs/68-sowing-kingdom-seed-guitar-tabs',
				'/categories/kingdom-songs/69-forward-preaching-the-kingdom-guitar-tabs',
				'/categories/kingdom-songs/70-search-out-deserving-ones-guitar-tabs',
				'/categories/kingdom-songs/71-jehovahs-army-guitar-tabs',
				'/categories/kingdom-songs/72-making-known-kingdom-truth-guitar-tabs',
				'/categories/kingdom-songs/73-grant-us-boldness-guitar-tabs',
				'/categories/kingdom-songs/74-join-in-kingdom-song-guitar-tabs',
				'/categories/kingdom-songs/75-here-i-am-send-me-guitar-tabs',
				'/categories/kingdom-songs/76-how-does-it-make-you-feel-guitar-tabs',
				'/categories/kingdom-songs/77-light-in-dark-world-guitar-tabs',
				'/categories/kingdom-songs/78-teaching-word-of-god-guitar-tabs',
				'/categories/kingdom-songs/79-prayer-stand-firm-guitar-tabs',
				'/categories/kingdom-songs/80-taste-see-jehovah-is-good-guitar-tabs',
				'/categories/kingdom-songs/81-life-of-a-pioneer-guitar-tabs',
				'/categories/kingdom-songs/82-let-light-shine-guitar-tabs',

				// ORIGINAL SONGS
				'/categories/original-songs/1-the-best-life-ever-guitar-tabs',
				'/categories/original-songs/2-we-wont-forget-you-guitar-tabs',
				'/categories/original-songs/3-what-means-the-most-to-me-guitar-tabs',
				'/categories/original-songs/4-never-give-up-guitar-tabs',
				'/categories/original-songs/5-honor-jehovah-with-your-valuable-things-guitar-tabs',
				'/categories/original-songs/6-give-you-my-all-guitar-tabs',
				'/categories/original-songs/7-glad-i-passed-the-test-guitar-tabs',
				'/categories/original-songs/8-now-is-the-time-guitar-tabs',
				'/categories/original-songs/9-just-a-smile-guitar-tabs',
				'/categories/original-songs/10-finding-treasures-guitar-tabs',
				'/categories/original-songs/11-jehovah-welcomes-you-home-guitar-tabs',
				'/categories/original-songs/12-joy-of-conventions-guitar-tabs',
				'/categories/original-songs/13-i-give-you-my-best-guitar-tabs',
				'/categories/original-songs/14-take-your-time-choose-wisely-guitar-tabs',
				'/categories/original-songs/15-imagine-the-time-guitar-tabs',
				'/categories/original-songs/16-keep-the-pace-guitar-tabs',
				'/categories/original-songs/17-blessings-of-learning-a-language-guitar-tabs',
				'/categories/original-songs/18-dont-run-so-fast-guitar-tabs',
				'/categories/original-songs/19-follow-the-course-of-hopitality-guitar-tabs',
				'/categories/original-songs/20-our-thanks-go-to-you-guitar-tabs',
				'/categories/original-songs/21-where-i-belong-guitar-tabs',
				'/categories/original-songs/22-choices-guitar-tabs',
				'/categories/original-songs/23-forgive-one-another-guitar-tabs',
				'/categories/original-songs/24-just-around-the-corner-guitar-tabs',
				'/categories/original-songs/25-study-makes-you-strong-guitar-tabs',
				'/categories/original-songs/26-your-word-endures-forever-guitar-tabs',
				'/categories/original-songs/27-stop-think-pray-guitar-tabs',
				'/categories/original-songs/28-building-my-future-with-jehovah-guitar-tabs',
				'/categories/original-songs/29-faith-can-make-things-happen-guitar-tabs',
				'/categories/original-songs/30-i-keep-your-reminders-guitar-tabs',
				'/categories/original-songs/31-i-can-get-back-up-guitar-tabs',
				'/categories/original-songs/32-we-marvel-at-your-work-guitar-tabs',
				'/categories/original-songs/33-precious-daughter-guitar-tabs',
				'/categories/original-songs/34-lets-take-the-leap-guitar-tabs',
				'/categories/original-songs/35-look-at-me-guitar-tabs',
				'/categories/original-songs/36-inspired-by-your-wonders-guitar-tabs',
				'/categories/original-songs/37-important-things-guitar-tabs',
				'/categories/original-songs/38-truly-in-love-guitar-tabs',
				'/categories/original-songs/39-a-place-that-will-bring-you-praise-guitar-tabs',
				'/categories/original-songs/40-confident-in-you-guitar-tabs',
				'/categories/original-songs/41-im-making-a-change-guitar-tabs',
				'/categories/original-songs/42-never-alone-guitar-tabs',
				'/categories/original-songs/43-brotherly-love-guitar-tabs',
				'/categories/original-songs/44-do-not-be-afraid-guitar-tabs',

				// CHILDREN SONGS
				'/categories/children-songs/1-this-is-my-family-guitar-tabs'
			]
		},
		trailingSlash: 'always',
		vite: {
			resolve: {
				alias: {
					$utils: path.resolve('./src/utils'),
					$components: path.resolve('./src/components')
				}
			},
			optimizeDeps: {
				include: ['fuzzy', 'lodash.get', 'lodash.isequal', 'lodash.clonedeep']
			}
		}
	}
};

export default config;
