
import {useRouteError} from "react-router";
const Error = ()=>{
    const error = useRouteError();
    console.log(error)
    return(
        <div>
            <section className="restaurants">
                <div className="container">
                    <h1>Oops Something went wrong!!!</h1>
                    <h3>{error.status}: {error.statusText}</h3>
                </div>
            </section>
        </div>
    )
}

export default Error;