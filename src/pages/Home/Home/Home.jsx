
import useTitle from "../../hooks/useTitle";
import AllToys from "../AllToys/AllToys";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Map from "../Map/Map";
import Partner from "../Partner/Partner";


const Home = () => {
    
 
  

    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <AllToys></AllToys>
            <Category></Category>
            <Partner></Partner>
            <Map></Map>
        </div>
    );
};

export default Home;