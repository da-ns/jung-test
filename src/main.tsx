import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./app.css";

import App from "./App";
import About from "./pages/About";
import Test from "./pages/Test";
import PageNotFound from "./pages/PageNotFound.tsx";

const container: HTMLElement | null = document.getElementById("root");

if (container != null) {
    const router = createBrowserRouter([
        {
            path: "/",
            element: (
                <App/>
            ),
            children: [
                {
                    path: "about",
                    element: <About/>,
                },
                {
                    path: "test",
                    element: <Test/>,
                },

            ]
        },
        {
            path: "*",
            element: (
                <PageNotFound/>
            )
        }
    ]);

    createRoot(container).render(
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    );
}
