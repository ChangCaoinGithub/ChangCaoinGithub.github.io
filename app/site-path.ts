export function sitePath(path: string) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const normalizedPath = path.startsWith("/public/") ? path.slice(7) : path;
  return `${basePath}${normalizedPath.startsWith("/") ? normalizedPath : `/${normalizedPath}`}`;
}
