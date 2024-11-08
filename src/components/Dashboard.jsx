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
  background-color: #4caf50;
  color: white;
  padding: 10px 0;
`;

const Title = styled.h2`
  margin: 0;
`;

const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Dashboard = ({ selectedPokemons, removePokemon }) => {
  return (
    <DashboardContainer>
      <Header>
        <Title>포켓몬 도감</Title>
      </Header>
      <Main>
        <ul>
          {selectedPokemons.map((pokemon) => (
            <li key={pokemon.id}>
              <img src={pokemon.img_url} />
              {pokemon.Korean_name}
              <button onClick={() => removePokemon(pokemon.id)}>삭제</button>
            </li>
          ))}
        </ul>
      </Main>
    </DashboardContainer>
  );
};

export default Dashboard;
