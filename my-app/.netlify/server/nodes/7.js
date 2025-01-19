import * as server from '../entries/pages/spots/_page.server.ts.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/spots/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/spots/+page.server.ts";
export const imports = ["_app/immutable/nodes/7.B2hFak4u.js","_app/immutable/chunks/scheduler.BztUAtB6.js","_app/immutable/chunks/index.Cs7eokJO.js","_app/immutable/chunks/each.CyJB5xTL.js","_app/immutable/chunks/entry.B3wC460E.js","_app/immutable/chunks/index.CdIpAHqj.js","_app/immutable/chunks/embla-carousel-autoplay.esm.Bk8plpNA.js","_app/immutable/chunks/utils.DGj9m1eL.js"];
export const stylesheets = [];
export const fonts = [];
