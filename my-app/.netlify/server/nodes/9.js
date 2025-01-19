import * as server from '../entries/pages/startAuth/_page.server.ts.js';

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/startAuth/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/startAuth/+page.server.ts";
export const imports = ["_app/immutable/nodes/9.DR-woCfI.js","_app/immutable/chunks/scheduler.5V3TmpAU.js","_app/immutable/chunks/index.9uOHTiyW.js"];
export const stylesheets = ["_app/immutable/assets/9.DsebJXdt.css"];
export const fonts = [];
