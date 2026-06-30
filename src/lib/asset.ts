// Prefija las rutas de /public con el base de Vite (import.meta.env.BASE_URL).
// dev  -> "/assets/..."            (BASE_URL = "/")
// prod -> "/nintendo-store/assets/..." (BASE_URL = "/nintendo-store/")
export const asset = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
