
import useTitle from "../../hooks/useTitle";
import AllToys from "../AllToys/AllToys";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";


const Home = () => {
    
 
  

    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <AllToys></AllToys>
            <Category></Category>
        </div>
    );
};

export default Home;