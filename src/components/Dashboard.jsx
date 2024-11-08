import styled from "styled-components"; // styled-components import

const Dashboard = ({ selectedPokemons, removePokemon }) => {
  const spreadId = (id) => {
    return String(id).padStart(3, "0");
  };

  return (
    <DashboardContainer>
      <Title>포켓몬 도감</Title>

      <MainContainer>
        {selectedPokemons.map((pokemon) => (
          <Main key={pokemon.id}>
            <img src={pokemon.img_url} alt={pokemon.korean_name} />
            <span>{pokemon.korean_name}</span>
            <CardNumber> No.{spreadId(pokemon.id)} </CardNumber>
            <button onClick={() => removePokemon(pokemon.id)}>삭제</button>
          </Main>
        ))}
      </MainContainer>
    </DashboardContainer>
  );
};

export default Dashboard;

// Styled Components 정의
const DashboardContainer = styled.div`
  font-family: Arial, sans-serif;
  background-color: #fff;
  color: #333;
  padding: 20px;
  border-radius: 20px;
  margin: 20px;
`;

const Title = styled.h1`
  margin: 0;
  font-weight: bold;
  text-align: center;
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

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 5px;
  }

  span {
    font-size: 15px;
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
`;
