export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["carouselPics/kanali_1.jpg","carouselPics/Neretva-and-Buna.jpg","carouselPics/neretvaDolnjiTok.webp","carouselPics/neretvaUšće.jpg","carouselPics/neretva_gornjitok.jpg","carouselPics/neretva_maps.png","carouselPics/usce_dno.jpg","carouselPics/valley_map.JPG","favico.ico","loginAssets/minimalist abstract background.webp","poweredBy/aramco.svg","poweredBy/bbraun.svg","poweredBy/energy-commission.svg","poweredBy/equinor.svg","poweredBy/omv.svg","robots.txt","sampleData1.json","Spots_images/Bird_watching.png","Spots_images/cave_exploration.jpg","Spots_images/cycling with family.jpg","Spots_images/favicon_.webp","Spots_images/high_altitude_trekking.jpg","Spots_images/kayak adventures.jpg","Spots_images/mapIcon.jpg","Spots_images/matrixbackground.png","Spots_images/Mountain Biking Blast.jpg","Spots_images/mountain_bike_challenge.jpg","Spots_images/rock clymbing school.jpg","Spots_images/rock_climbing_adventure.jpg","Spots_images/Sailing School.jpg","Spots_images/Scuba Diving Discovery.jpg","Spots_images/Skydiving Thrill.jpg","Spots_images/skydiving_extreme_rush.jpg","Spots_images/Snowboarding Camp.webp","Spots_images/Spots_bike_trail.JPG","Spots_images/surf school.jpg","Spots_images/trails expedition.jpg","Spots_images/windsurfing_school.jpg","Spots_images/Yoga Retreat.jpg","Sto (2).jpg"]),
	mimeTypes: {".jpg":"image/jpeg",".webp":"image/webp",".png":"image/png",".JPG":"image/jpeg",".svg":"image/svg+xml",".txt":"text/plain",".json":"application/json"},
	_: {
		client: {"start":"_app/immutable/entry/start.Bl7yXaJA.js","app":"_app/immutable/entry/app.CldYHlAK.js","imports":["_app/immutable/entry/start.Bl7yXaJA.js","_app/immutable/chunks/entry.CIkzam0d.js","_app/immutable/chunks/scheduler.5V3TmpAU.js","_app/immutable/chunks/index.CzRKzWdh.js","_app/immutable/entry/app.CldYHlAK.js","_app/immutable/chunks/scheduler.5V3TmpAU.js","_app/immutable/chunks/index.9uOHTiyW.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/search",
				pattern: /^\/search\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/spots",
				pattern: /^\/spots\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/spots/[id]",
				pattern: /^\/spots\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,3,], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/startAuth",
				pattern: /^\/startAuth\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 9 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
