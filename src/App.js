import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import SingleTour from "./components/SingleTour";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // fetchTourlist(url)
    axiosTourlist(url);
  }, []);

  // const fetchTourlist = (url) => {
  //   setLoading(true);
  //   fetch(url)
  //     .then((res) => res.json()) // response is promise, fetch is asynchronous by default
  //     .then((data) => {
  //       setTours(data);
  //       setLoading(false);
  //     });
  // };

  const axiosTourlist = async (url) => {
    setLoading(true);

    const res = await axios.get(url); //response is json data , this is synchronus function await is synchronus process. yaha yeh object de rha hai 
                                      // aur object ke under data so usko hmlog state me set kr rhe hai as res.data. Direct data lene ke liye
                                      // DESTRUCTURING use krenge
                                      // const {data} = await axios.get(url)
                                      // setTours(data)
    setTours(res.data)
    setLoading(false);
  };

  const handleDelete = ( id) =>{
    setTours((previousData) => {
     return previousData.filter(event => id !== event.id)
    })
    }

  return (
    <div className="App">
      {loading ? <h1>Loading...</h1> : null}
      {!loading &&
        tours.length > 0 &&
        tours.map((tour) => ( <SingleTour tour={tour}  handleDelete={handleDelete} /> ))}
    </div>
  );
}
export default App;
