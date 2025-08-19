import ResturantCardComponent from "./RestaurantCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";

const BodyComponent = () => {
    const[listOfRestaurant, setListOfRestaurant] = useState([]);
    const[filterOfRestaurant, setFilterOfRestaurant] = useState([]);

    const[searchTxt, setSearchTxt] = useState("")

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.9581934&lng=72.8320729&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        
        const jsonData = await data.json();
        // console.log(jsonData)
        setListOfRestaurant(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterOfRestaurant(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    //conditional rendering -- Rendering component on the bases of condition
    return listOfRestaurant.length === 0 ? <Shimmer /> :
    (
        <section className="restaurants">
            <div className="container">

                <div className="item-bar">
                    <div className="number">1066 restaurants</div>
                    <div className="filters">
                        <div className="relevance">Relevance</div>
                        <div className="delivery" onClick={()=>{
                            const filterTime = listOfRestaurant.filter((res)=> res.info.sla.deliveryTime < 30 )
                            setFilterOfRestaurant(filterTime)
                        }}>Delivery Time</div>
                        <div className="rating" onClick={()=>{
                            const filterRes = listOfRestaurant.filter((resRate)=> resRate.info.avgRating > 4.4)
                            setFilterOfRestaurant(filterRes)
                        }}>
                            Rating
                        </div>
                        <div className="cost-lh">Cost: Low to High</div>
                        <div className="cost-hl">Cost: High to Low</div>
                    </div>
                </div>
                <div className="search-wrapper">
                    <input type="text" className="form-control" value={searchTxt} onChange={(e)=>{
                            setSearchTxt(e.target.value)
                    }} />
                    <button type="button" className="btn" onClick={()=>{
                        const filterResList = listOfRestaurant.filter(
                            (resList)=> resList.info.name.toLowerCase().includes(searchTxt.toLowerCase())
                           
                        )
                        setFilterOfRestaurant(filterResList)
                    }}>Submit</button>
                </div>
                <div className="restaurant-list">
                    {
                       filterOfRestaurant.map((restaurant)=>(
                        <ResturantCardComponent key={restaurant.info.id} resData={restaurant} />
                       ))
                    }
                </div>
            </div>
        </section>
    )
}

export default BodyComponent;