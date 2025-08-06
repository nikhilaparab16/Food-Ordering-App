import ResturantCardComponent from "./RestaurantCard";
import resList  from "../utils/mockData";
import { useState } from "react";

const BodyComponent = () => {
    const[ListOfRestaurant, setListOfRestaurant] = useState(resList)

    return(
        <section className="restaurants">
            <div className="container">
                <div className="item-bar">
                    <div className="number">1066 restaurants</div>
                    <div className="filters">
                        <div className="relevance">Relevance</div>
                        <div className="delivery" onClick={()=>{
                            const filterTime = ListOfRestaurant.filter((res)=> res.info.sla.deliveryTime < 30 )
                            setListOfRestaurant(filterTime)
                        }}>Delivery Time</div>
                        <div className="rating" onClick={()=>{
                            const filterRes = ListOfRestaurant.filter((res)=> res.info.avgRating > 4)
                            setListOfRestaurant(filterRes)
                        }}>
                            Rating
                        </div>
                        <div className="cost-lh">Cost: Low to High</div>
                        <div className="cost-hl">Cost: High to Low</div>
                    </div>
                </div>
                <div className="restaurant-list">
                    {
                       ListOfRestaurant.map((restaurant)=>(
                        <ResturantCardComponent key={restaurant.info.id} resData={restaurant} />
                       ))
                    }
                </div>
            </div>
        </section>
    )
}

export default BodyComponent;