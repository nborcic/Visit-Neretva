import * as server from '../entries/pages/search/_page.server.ts.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/search/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/search/+page.server.ts";
export const imports = ["_app/immutable/nodes/6.CbYIo_s8.js","_app/immutable/chunks/scheduler.5V3TmpAU.js","_app/immutable/chunks/index.9uOHTiyW.js","_app/immutable/chunks/each.BmrkkIWU.js","_app/immutable/chunks/utils.Be76u5cC.js","_app/immutable/chunks/entry.C5hQiHdd.js","_app/immutable/chunks/index.CzRKzWdh.js"];
export const stylesheets = [];
export const fonts = [];
