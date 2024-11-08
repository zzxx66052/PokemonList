import styled from "styled-components"; // styled-components import

// Styled Components 정의
const DashboardContainer = styled.div`
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  color: #333;
  padding: 20px;
  border-radius: 10px;
  border: 2px solid #3498db;
  margin: 10px;
`;

const Header = styled.header`
  text-align: center;
  background-color: #333;
  color: white;
  padding: 10px 0;
`;

const Title = styled.h2`
  margin: 0;
`;

const Main = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
`;

const Dashboard = ({ selectedPokemons, removePokemon }) => {
  return (
    <DashboardContainer>
      <Header>
        <Title>포켓몬 도감</Title>
      </Header>
      {selectedPokemons.map((pokemon) => (
        <Main
          key={pokemon.id}
          src={pokemon.img_url}
          alt={pokemon.korean_name}
          pokemon={pokemon}
        >
          <button onClick={() => removePokemon(pokemon.id)}>삭제</button>
        </Main>
      ))}
    </DashboardContainer>
  );
};

export default Dashboard;
