import "../App.css";

const Button = ({ children, color }) => {
  return (
    <button className="btn" style={{ backgroundColor: color }}>
      {children}
    </button>
  );
  //return <button>{props.title}</button>; //
};

export default Button;
