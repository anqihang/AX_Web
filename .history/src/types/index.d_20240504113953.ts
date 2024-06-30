// global
export type t_Object = 
// Game
import type { routes } from "@/router/index";
export type t_RoutesName = (typeof routes)[number]["name"];
export type t_GameItem = {
	name: string;
	img: string;
	path: (typeof gameItem)[number]["name"];
};
