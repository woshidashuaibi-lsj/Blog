import React,{lazy,Suspense} from 'react';
import {Redirect} from "react-router-dom";
import Home from '../application/Home';
const CategoriesComponent = lazy (() => import("../application/categories"));
const PersonalComponent = lazy (() => import("../application/Personal"));
const TimeLineComponent = lazy (() => import("../application/TimeLine"));
const WebHomeComponent = lazy (() => import ("../application/WebHome"));
const DetailComponent = lazy(()=>import("../application/Detail"))
// const SingerComponent = lazy (() => import ("./../application/Singer/"));
// const SearchComponent = lazy (() => import ("./../application/Search/"));

const SuspenseComponent = Component => props => {
    return (
        <Suspense fallback={null}>
            <Component {...props}/>
        </Suspense>
    )
}
export default [
    {
        path: "/",
        component: Home,
        routes: [
            {
                path: "/",
                exact: true,
                render: () => (
                    <Redirect to={"/webHome"}/>
                )
            },
            {
                path: "/webHome",
                exact: true,
                key: "webHome",
                component: SuspenseComponent(WebHomeComponent),
            },
            {
                path: "/timeLine",
                exact: true,
                key: "timeLine",
                component: SuspenseComponent(TimeLineComponent),
            },
            {
                path: "/detail/:id",
                exact: true,
                key: "detail",
                component: SuspenseComponent(DetailComponent)
            },
            {
                path: "/categories",
                exact: true,
                key: "categories",
                component: SuspenseComponent (CategoriesComponent),
            },
            {
                path: "/personal",
                exact: true,
                key: "personal",
                component: SuspenseComponent (PersonalComponent)
            },
            // {
            //     path: "/search",
            //     exact: true,
            //     key: "search",
            //     component: SuspenseComponent (SearchComponent)
            // }
        ]
    }
]