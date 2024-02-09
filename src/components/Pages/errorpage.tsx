import Errorimg from "../../assets/img/notfound.png";

const ErrorPage = () => {
  return (
    <>
      <div className="errorwrap">
        <img src={Errorimg} width="600px" />
        <h1>Opps...</h1>
        <p>Sorry Page Not Found in the Guide</p>
      </div>
    </>
  );
};

export default ErrorPage;
