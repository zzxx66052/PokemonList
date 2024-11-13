import styled from "styled-components"; // styled-components import
import { usePokemon } from "../context/PokemonContext";
import { Link } from "react-router-dom";
import { useState } from "react";

const DashBoard = () => {
  const { selectedPokemons, onRemovePokemon } = usePokemon();
  const [isHovered, setIsHovered] = useState(false);

  const spreadId = (id) => {
    return String(id).padStart(3, "0");
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <DashboardContainer>
      <Title onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <StyledLink to="/">
          {isHovered ? "홈으로 가기" : "포켓몬 도감"}
        </StyledLink>
      </Title>

      <MainContainer>
        {selectedPokemons.map((pokemon, index) => (
          <Main key={index}>
            <img
              src={
                pokemon.id ? pokemon.img_url : "src/assets/img/masterBall.png"
              }
              alt={pokemon.korean_name || "빈 포켓몬 볼"}
            />
            {pokemon.id ? (
              <>
                <span>{pokemon.korean_name}</span>
                <CardNumber> No.{spreadId(pokemon.id)} </CardNumber>
                <button onClick={() => onRemovePokemon(pokemon.id)}>
                  삭제
                </button>
              </>
            ) : (
              <></>
            )}
          </Main>
        ))}
      </MainContainer>
    </DashboardContainer>
  );
};

export default DashBoard;

// Styled Components 정의
const DashboardContainer = styled.div`
  font-family: Arial, sans-serif;
  background-color: #fff;
  color: #333;
  padding: 20px;
  border-radius: 20px;
  margin: 20px;
  width: 100%;
`;

const Title = styled.h1`
  margin: 0;
  color: #fa4032;
  text-align: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  &:hover {
    color: #fa812f;
    text-decoration: underline;
  }
`;

const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap; /* 여러 행으로 배치되도록 설정 */
  justify-content: center; /* 가로로 균등하게 배치 */
  align-items: flex-start;
  gap: 40px;
  margin-top: 20px;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #d4f6ff;
  justify-content: center;
  align-items: center;
  width: 100px;
  border-radius: 10px;
  box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.3);
  gap: 10px;

  img {
    width: 100%;
    height: auto;
    border-radius: 5px;
  }

  span {
    font-size: 16px;
    font-weight: 700;
    margin-top: 10px;
  }

  button {
    background-color: #fa4032;
    color: white;
    border: none;
    padding: 5px 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background-color: #fa812f;
    }
  }
`;

const CardNumber = styled.h5`
  font-size: 15px;
  color: gray;
`;
