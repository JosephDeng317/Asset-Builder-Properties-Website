import { useState } from "react";
import logo from "./ABP-White.png";
import home from "./home-button.png";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function NavBar({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // Event handler

  return (
    <>
      <div className="dark-brown page-top"></div>
      <div className="d-flex dark-brown sticky-top">
        <div className="logo-container">
          <img
            className="me-auto logo"
            src={logo}
            onClick={() => {
              console.log("home");
            }}
          ></img>
          <div className="overlay">
            <img src={home} alt="home" />
          </div>
        </div>
        {items.length === 0 && <p>No item found</p>}
        <ul className="list-group d-flex flex-row justify-content-end">
          {items.map((item, index) => (
            <li
              className={
                selectedIndex === index ? "active-nav nav-button" : "nav-button"
              }
              key={item}
              onClick={() => {
                console.log(item);
                document.getElementById(item)?.scrollIntoView();
              }}
              onMouseEnter={() => {
                setSelectedIndex(index);
                onSelectItem(item);
              }}
              onMouseLeave={() => {
                setSelectedIndex(-1);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default NavBar;
