import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./app.css";

import App from "./App";
import About from "./pages/About";
import Test from "./pages/Test";
import PageNotFound from "./pages/PageNotFound.tsx";
import Home from "./pages/Home.tsx";
import Start from "./components/steps/Start.tsx";
import Issue from "./components/steps/Issue.tsx";
import Association from "./components/steps/Association.tsx";
import Result from "./components/steps/Result.tsx";
import Schema from "./components/steps/Schema.tsx";

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
                    path: "",
                    element: <Home/>,
                },
                {
                    path: "about",
                    element: <About/>,
                },
                {
                    path: "test",
                    element: <Test/>,
                    children: [
                        {
                            path: "",
                            element: <Start/>
                        },
                        {
                            path: "issue",
                            element: <Issue/>
                        },
                        {
                            path: "association",
                            element: <Association/>
                        },
                        {
                            path: "result",
                            element: <Result/>
                        },
                        {
                            path: "schema",
                            element: <Schema/>
                        },
                    ]
                },
                {
                    path: "*",
                    element: (
                        <PageNotFound/>
                    )
                }
            ]
        }
    ]);

    createRoot(container).render(
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    );
}
