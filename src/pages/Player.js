import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Player.css";
import CardPlayer from "../component/CardPlayer"

export default function DetailPlayer() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api-ta-mdp.herokuapp.com/nba")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  let navigate = useNavigate();
  return (
    <>
      <p id="player">Player of NBA 2K21</p>
      {data.slice(6,11).map((item, index) => (
        <Fragment key={item.id}>
          <CardPlayer
            img={item.foto}
            onClick={() => navigate(`DetailPlayer/`, { state: item })}
          />
          {data.length === index + 1 && <div style={{ marginBottom: 80 }} />}
        </Fragment>
      ))}
    </>
  );
}