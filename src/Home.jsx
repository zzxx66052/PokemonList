import { useNavigate } from "react-router-dom";
import image from "./assets/img/pokemon-logo.png";

const Home = () => {
  const navigate = useNavigate();

  const goToDex = () => {
    navigate("/dex"); // '/dex'로 이동
  };

  return (
    <div style={homeContainter}>
      <img src={image} alt="Pokemon starter" style={logoImageStyle} />
      <button onClick={goToDex} style={buttonStyle}>
        포켓몬 도감 시작하기
      </button>
    </div>
  );
};

export default Home;

const homeContainter = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundColor: "#EEE2B5",
  fontFamily: "Arial, sans-serif",
};

const logoImageStyle = {
  width: "600px",
};

const buttonStyle = {
  padding: "10px 20px",
  fontSize: "18px",
  backgroundColor: "red",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  color: "white",
  transition: "background-color 0.3s",
};
