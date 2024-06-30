// global
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export type t_Object = { [key: string]: any }
type t_routeName = (typeof flatRoutes)[number]['name']
// Game
export type t_GameItem = {
  name: string
  img: string
  pathName: string
}
