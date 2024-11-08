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
  background-color: #f9f9f9;
  color: #333;
  padding: 20px;
  border-radius: 10px;
  margin: 10px;
`;

const Title = styled.h2`
  margin: 0;
  text-align: center;
`;

const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap; /* 여러 행으로 배치되도록 설정 */
  justify-content: space-evenly; /* 가로로 균등하게 배치 */
  gap: 20px; /* Main 카드 간의 간격 */
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f7f7f7;
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

  button {
    margin-top: 10px;
    background-color: #e74c3c;
    color: white;
    border: none;
    padding: 8px 12px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #c0392b;
    }
  }
`;

const CardNumber = styled.h5`
  font-size: 15px;
`;
