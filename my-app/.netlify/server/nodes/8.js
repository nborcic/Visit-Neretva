import * as server from '../entries/pages/spots/_id_/_page.server.ts.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/spots/_id_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/spots/[id]/+page.server.ts";
export const imports = ["_app/immutable/nodes/8.Dh5DbusM.js","_app/immutable/chunks/scheduler.BztUAtB6.js","_app/immutable/chunks/index.Cs7eokJO.js","_app/immutable/chunks/each.CyJB5xTL.js","_app/immutable/chunks/index.CdIpAHqj.js"];
export const stylesheets = [];
export const fonts = [];
