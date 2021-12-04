/**
 * Menu Items
 */
type AppRoute = {
  path:string,
  label:string
}
// routes defined for nav/menu
// used in components/AppHeader
export const Routes:AppRoute[] = [
  {path:"/", label:"Home"},
  {path:"/software", label:"Software"},
  {path:"/projects", label:"Projects"},
  {path:"/about", label:"About"},
]
