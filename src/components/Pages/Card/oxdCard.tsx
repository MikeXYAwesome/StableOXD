import ComCardsvg from "./CardHolderimg";

interface Props {
  head: string;
  discrip: string;
  imagepath: string;
}

function OxdCard({ head, imagepath, discrip }: Props) {
  return (
    <>
      <div className="oxdCard">
        <div className="oxdCardHead">{head}</div>
        <div className="oxdCardImg">
          {imagepath === "" ? (
            <div className="notFoundCom">
              <ComCardsvg />
            </div>
          ) : (
            <div className="notFoundCom">
              <p> found </p>
            </div>
          )}
          {/*  */}
        </div>
        <div className="oxdCardDiscrip">
          <p>
            {discrip}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </p>
        </div>
      </div>
    </>
  );
}

export default OxdCard;
