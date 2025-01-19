import * as universal from '../entries/pages/_page.ts.js';
import * as server from '../entries/pages/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.BSOmqWf2.js","_app/immutable/chunks/scheduler.BztUAtB6.js","_app/immutable/chunks/index.Cs7eokJO.js","_app/immutable/chunks/each.CyJB5xTL.js","_app/immutable/chunks/entry.B3wC460E.js","_app/immutable/chunks/index.CdIpAHqj.js","_app/immutable/chunks/embla-carousel-autoplay.esm.Bk8plpNA.js","_app/immutable/chunks/utils.DGj9m1eL.js"];
export const stylesheets = [];
export const fonts = [];
