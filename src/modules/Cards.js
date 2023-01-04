import "../App.css";

const Cards = ({ img, text, img2, text2 }) => {
  return (
    <div className="cards">
      <div>
        <img src={img} alt="img"></img>
        <span>{text}</span>
      </div>
      <div>
        <img src={img} alt="img"></img>
        <span>{text}</span>
      </div>
      <div>
        <img src={img} alt="img"></img>
        <span>{text}</span>
      </div>
      <div>
        <img src={img2} alt="img"></img>
        <span>{text2}</span>
      </div>
      <div>
        <img src={img2} alt="img"></img>
        <span>{text2}</span>
      </div>
      <div>
        <img src={img2} alt="img"></img>
        <span>{text2}</span>
      </div>
    </div>
  );
};

export default Cards;
