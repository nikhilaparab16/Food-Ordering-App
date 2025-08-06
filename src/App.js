import react from "react";
import ReactDom from "react-dom/client";
import Header from "./components/Header";
import BodyComponent from "./components/Body";







const AppLayout = ()=>{
    return(
        <div id="app-layout">
            <Header />
            <BodyComponent />
        </div>
    )
}

const Root = ReactDom.createRoot(document.getElementById("root"));
Root.render(<AppLayout />);