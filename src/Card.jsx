function Card(props) {
  return (
    <div className="card">
      <div className="imgBx">
        <img src={props.imgscr} />
      </div>
      <div className="content">
        <div className="details">
          <h2>
            {props.name} <br /> <span> {props.bio} </span>
          </h2>
          <div className="data">
            <h3>
              {props.height}
              <br />
              <span>Height</span>
            </h3>
            <h3>
              {props.weight}
              <br />
              <span>Weight</span>
            </h3>
            <h3>
              {props.age}
              <br />
              <span>Age</span>
            </h3>
          </div>
          <div className="actionBtn">
            <button>
              <a href={props.git}>Follow</a>{" "}
            </button>
            <button className="mssg">
              <a href={props.mail}>Message</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
