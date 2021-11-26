import "./CardBigPlayer.css";

export default function CardBigPlayer(props) {
  return (
    <div className="containerBigPlayer">
      <img src={props.img} alt="" className="posterBigPlayer" />
      <div className="descriptionBigPlayer">
        <div>
          <p id="nama">{props.nama}</p>
          <p id="name">{props.name}</p>
          <p id="posisi">{props.posisi}</p>
          <p id="team">{props.team}</p>
        </div>      
      </div>
    </div>
  );
}