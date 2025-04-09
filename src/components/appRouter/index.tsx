import { FC, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Router, Routes } from "react-router";
import React from "react";
import { IRoute, routes } from "../../config/routes";
import { ProtectedRoute } from "../protectedRoute";

const AppRouter: FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>loadinfg</div>}>
        <Routes>
          {routes.map((route: IRoute) => {
            const Element = route.component;
            const Wrapper = route.meta?.requiresAuth
              ? ProtectedRoute
              : React.Fragment;

            return (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <Wrapper>
                    <Element />
                  </Wrapper>
                }
              />
            );
          })}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRouter;
