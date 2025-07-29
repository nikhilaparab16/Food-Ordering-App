import react from "react";
import ReactDom from "react-dom/client";

const AppLayout = ()=>{
    return(
        <div id="app-layout">
            <h1>App Working</h1>
        </div>
    )
}

const Root = ReactDom.createRoot(document.getElementById("root"));
Root.render(AppLayout);