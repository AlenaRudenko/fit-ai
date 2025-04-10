import { lazy } from "react";

export type RoutePath = "/" | "/auth" | "/chat";

const HomePage = lazy(() => import("../features/MainPage/index"));

const AuthenticationPage = lazy(
  () => import("../features/Authentication/index")
);

const ChatPage = lazy(() => import("../features/Chat/index"));

export interface IRoute {
  path: string;
  component: React.LazyExoticComponent<React.ComponentType<any>>;
  title?: string;
  exact?: boolean;
  meta?: {
    public?: boolean;
    requiresAuth?: boolean;
  };
}

export const routes: IRoute[] = [
  {
    path: "/",
    component: HomePage,
    title: "Главная",
    exact: true,
    meta: { public: false, requiresAuth: true },
  },
  {
    path: "/auth",
    component: AuthenticationPage,
    title: "Вход",
    meta: { public: false, requiresAuth: false },
  },
  {
    path: "/chat",
    component: ChatPage,
    title: "Чат",
    meta: { public: true, requiresAuth: false },
  },
];
