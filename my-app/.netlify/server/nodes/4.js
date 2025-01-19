

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/startAuth/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.C_YgfU-d.js","_app/immutable/chunks/scheduler.5V3TmpAU.js","_app/immutable/chunks/index.9uOHTiyW.js"];
export const stylesheets = [];
export const fonts = [];
