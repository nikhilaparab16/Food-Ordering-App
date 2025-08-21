import react from "react";
import ReactDom from "react-dom/client";
import Header from "./components/Header";
import BodyComponent from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact"; 
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider , Outlet} from "react-router";

const AppLayout = ()=>{
    return(
        <div id="app-layout">
            <Header />
            <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
    { 
        path: "/", 
        element: <AppLayout />,
        children:[
            { 
                path: "/", 
                element: <BodyComponent />
            },
            { 
                path: "/about", 
                element: <About />
            },
            { 
                path: "/contact", 
                element: <Contact />
            },
        ],
        errorElement: <Error />
    },
    
]);

const Root = ReactDom.createRoot(document.getElementById("root"));
Root.render(<RouterProvider router={appRouter} />);