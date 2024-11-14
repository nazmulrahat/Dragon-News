import Header from "./Shared/Header/Header";
import LNav from "./Shared/LNav/LNav";
import NavBar from "./Shared/NavBar/NavBar";
import RNav from "./Shared/RNav/RNav";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <NavBar></NavBar>
   
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6"> 
                <div className="border">
                    <LNav></LNav>
                </div>
                <div className="border col-span-2">
                    <h1 className="text-4xl">News Coming</h1>
                </div>
                <div className="border">
                    <RNav></RNav>
                </div>
            </div>
        </div>
    );
};

export default Home;