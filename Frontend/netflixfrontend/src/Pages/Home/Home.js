import React, { useEffect, useState } from "react";
import "./home.scss";
import Navbar from "../../Components/Header/Navbar";
import Featured from "../../Components/Featuring/Featured";
import List from "../../Components/Lists/List";
import axios from "axios";
const Home = (props) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);
  useEffect(() => {
    console.log(props.type);
    const getRandomList = async () => {
      console.log("Asking",genre)
      try {
        const response = await axios.get(
          `lists${props.type != undefined ? "?type=" + props.type + (genre ? "&genre=" + genre : "") : ""}`,
          {
            headers: {
              token: 
                " Bearer " + JSON.parse(localStorage.getItem('user')).accessToken,
            },
          }
        );
        setLists(response.data);
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    };

    getRandomList();
    
  }, [props, genre]);

  return (
    <div className="home">
      <Navbar />
      <Featured type={props.type} genre={genre} setGenre={setGenre}/>
      {lists.map((list)=>(
      <List newlist={list}/>
    ))}
     
    </div>
  );
};

export default Home;
