export default defineNuxtRouteMiddleware(({ path, query, hash }) => {
  // Skip if the path is the root ("/") or already ends with a slash
  if (path === '/' || path.endsWith('/')) {
    return
  }

  // Append a trailing slash to the path
  const nextPath = `${path}/`
  const nextRoute = { path: nextPath, query, hash }

  // Perform a 308 Permanent Redirect to the new URL with trailing slash
  return navigateTo(nextRoute, { redirectCode: 308 })
})
