import React from "react";
import ReactDom from "react-dom";
import Card from "./Card";
import Fdata from "./Fdata";
import "./index.css";

ReactDom.render(
  <>
    <div className="cards">
      {Fdata.map((val) => {
        return (
          <>
            <Card
              key={val.key}
              imgscr={val.imgscr}
              name={val.name}
              bio={val.bio}
              age={val.age}
              height={val.height}
              weight={val.weight}
              git={val.github}
              mail={val.mail}
            />
          </>
        );
      })}
    </div>
  </>,
  document.getElementById("root")
);
