import { useEffect, useState } from "react";
import "./about.scss";
import { uiPortfolio, webPortfolio, mobilePortfolio } from "../../data";

const About = () => {
  const [selectedItem, setSelectedItem] = useState("ui/ux");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "ui/ux",
      title: "UX/UI DESIGN",
    },
    {
      id: "web",
      title: "WEB DEVELOPMENT",
    },
    {
      id: "mobile",
      title: "MOBILE APP DEVELOPMENT",
    },
  ];

  useEffect(() => {
    if (selectedItem === "ui/ux") {
      setData(uiPortfolio);
    }
    if (selectedItem === "web") {
      setData(webPortfolio);
    }
    if (selectedItem === "mobile") {
      setData(mobilePortfolio);
    }
  }, [selectedItem]);

  return (
    <div className="about">
      <div className="aboutWrapper">
        <h1 className="aboutTitle">My Skills</h1>
        <ul>
          {list.map((item) => (
            <li
              className={`listItem ${
                selectedItem === item.id ? "selectedItem" : ""
              }`}
              key={item.id}
              onClick={() => setSelectedItem(item.id)}
            >
              {item.title}
              <div className="underline"></div>
            </li>
          ))}
        </ul>
        <div className="aboutContainer">
          <div className="aboutContainerWrapper">
            {data.map((item) => (
              <div className="aboutEachItem">
                <div className="itemContainer">
                  <h1>{item.title}</h1>
                  <img src={item.img} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
