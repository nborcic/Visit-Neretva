

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/search/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.CDff_1Ki.js","_app/immutable/chunks/scheduler.BztUAtB6.js","_app/immutable/chunks/index.Cs7eokJO.js"];
export const stylesheets = [];
export const fonts = [];
