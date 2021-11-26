import "./CardBigTeam.css";

export default function CardBigTeam(props) {
  return (
    <div className="containerBigTeam">
      <img src={props.img} alt="" className="posterBigTeam" />
      <div className="descriptionBigTeam">
        <div>
          <p id="nama">{props.nama}</p>
          <p id="pelatih">{props.pelatih}</p>
          <p id="stadion">{props.stadion}</p>
          <p id="markas">{props.markas}</p>
          <p id="deskripsi">{props.deskripsi}</p>
        </div>      
      </div>
    </div>
  );
}