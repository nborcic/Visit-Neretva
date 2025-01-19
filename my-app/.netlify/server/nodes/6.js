import * as server from '../entries/pages/search/_page.server.ts.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/search/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/search/+page.server.ts";
export const imports = ["_app/immutable/nodes/6.BibDOzsM.js","_app/immutable/chunks/scheduler.5V3TmpAU.js","_app/immutable/chunks/index.9uOHTiyW.js","_app/immutable/chunks/each.BmrkkIWU.js","_app/immutable/chunks/utils.LcXW-ksv.js","_app/immutable/chunks/entry.D_HqR9vT.js","_app/immutable/chunks/index.CzRKzWdh.js"];
export const stylesheets = [];
export const fonts = [];
