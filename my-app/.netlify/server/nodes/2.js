

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/search/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.aKyO2ngw.js","_app/immutable/chunks/scheduler.5V3TmpAU.js","_app/immutable/chunks/index.9uOHTiyW.js"];
export const stylesheets = [];
export const fonts = [];
