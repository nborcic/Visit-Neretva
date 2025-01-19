import * as server from '../entries/pages/startAuth/_page.server.ts.js';

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/startAuth/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/startAuth/+page.server.ts";
export const imports = ["_app/immutable/nodes/9.B-7RPmUE.js","_app/immutable/chunks/scheduler.BztUAtB6.js","_app/immutable/chunks/index.Cs7eokJO.js"];
export const stylesheets = ["_app/immutable/assets/9.DsebJXdt.css"];
export const fonts = [];
