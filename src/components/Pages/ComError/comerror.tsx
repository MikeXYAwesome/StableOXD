import Errorpng from "../../../assets/img/notfound.png";

function ComError() {
  return (
    <>
      <div className="comMainWraper">
        <div className="errorWrap">
          <img src={Errorpng} width="500px" />
          <h1>Opppssss......</h1>
          <p> Componets Not Found! Summon a Designer </p>
        </div>
      </div>
    </>
  );
}

export default ComError;
