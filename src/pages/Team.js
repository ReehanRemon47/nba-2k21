import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Team.css";
import CardTeam from "../component/CardTeam"

export default function DetailTeam() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api-ta-mdp.herokuapp.com/nba")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  let navigate = useNavigate();
  return (
    <>
      <p id="team">Best of NBA Team 2K21</p>
      {data.slice(0,5).map((item, index) => (
        <Fragment key={item.id}>
          <CardTeam
            img={item.logo}
            nama={item.nama}
            onClick={() => navigate(`DetailTeam/`, { state: item })}
          />
          {data.length === index + 1 && <div style={{ marginBottom: 80 }} />}
        </Fragment>
      ))}
    </>
  );
}