import { Link } from "react-router-dom";

const HomePage = () => {
    // const navigate = useNavigate();

    return (
        <div>
           <h1>Hello home</h1>
            <p>
                Go to <Link to="/products"> the list of products</Link>
            </p> 
        </div> 
    )  
}





export default HomePage;