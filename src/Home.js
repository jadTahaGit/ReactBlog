import Navbar from "./Navbar";

const Home = () => {
    const handleClick = () => {
        console.log("hello, jadis");
    } 

    const withParam = (name) => {
        console.log("hello " + name);
    }
    return (  
        <div className="App">
            {/* <Navbar></Navbar> */}
            <div className="content">
                <h2>Homepage</h2>
                <button onClick={handleClick}>Click me</button>
                <button onClick={()=>withParam("Sarah")}>Click Hieeer</button>
            </div>
        </div>
    );
}
 
export default Home;