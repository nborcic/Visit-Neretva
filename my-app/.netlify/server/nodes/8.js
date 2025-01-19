import * as server from '../entries/pages/spots/_id_/_page.server.ts.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/spots/_id_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/spots/[id]/+page.server.ts";
export const imports = ["_app/immutable/nodes/8.DyxcX5C5.js","_app/immutable/chunks/scheduler.5V3TmpAU.js","_app/immutable/chunks/index.9uOHTiyW.js","_app/immutable/chunks/each.BmrkkIWU.js","_app/immutable/chunks/index.CzRKzWdh.js"];
export const stylesheets = [];
export const fonts = [];
