import Logo from "../asset/img/logo.png";

const Title = () => (
  <>
    <a href="/">
      {/* <img className="h-24 p-2  " alt="logo" src={require("../asset/img/logo.png")} /> */}
      <img data-testid="logo" className="h-24 p-2  " alt="logo" src={Logo} />
    </a>
  </>
);

export default Title;
