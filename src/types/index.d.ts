// global
import { flatRoutes } from '@/router'
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export type t_Object = { [key: string]: any }
type t_routeName = typeof flatRoutes
// Game
export type t_GameItem = {
  name: string
  img: string
  pathName: string
}
