import NavBar from "./components/NavBar";
import Alert from "./components/Alert";
import Button from "./components/Button";
import hero from "./house-background.jpg";

function App() {
  let items = ["ABOUT", "SERVICES", "WORK WITH US"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <NavBar items={items} heading="Cities" onSelectItem={handleSelectItem} />
      <div className="hero-container">
        <img className="hero-image" src={hero} alt="house" />
        <div className="hero-text text">
          Management is hard, <br /> Let us help
        </div>
      </div>
      <div className="divider"></div>
      <div className="body-section d-flex beige">
        <div className="header-container">
          <span className="section-header" id="ABOUT">
            ABOUT
          </span>
        </div>
        <div className="body-text">
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </span>
        </div>
      </div>
      <div className="divider"></div>
      <div className="body-section d-flex off-white">
        <div className="header-container">
          <span className="section-header" id="SERVICES">
            SERVICES
          </span>
        </div>
        <div></div>
      </div>
      <div className="divider"></div>
      <div className="body-section d-flex beige">
        <div className="header-container">
          <span className="section-header" id="WORK WITH US">
            CONTACT
          </span>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
