import * as server from '../entries/pages/search/_page.server.ts.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/search/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/search/+page.server.ts";
export const imports = ["_app/immutable/nodes/6.D52qhnan.js","_app/immutable/chunks/scheduler.BztUAtB6.js","_app/immutable/chunks/index.Cs7eokJO.js","_app/immutable/chunks/each.CyJB5xTL.js","_app/immutable/chunks/utils.DGj9m1eL.js","_app/immutable/chunks/entry.B3wC460E.js","_app/immutable/chunks/index.CdIpAHqj.js"];
export const stylesheets = [];
export const fonts = [];
