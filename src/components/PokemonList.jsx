import styled from "styled-components";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemonData, addPokemon }) => {
  return (
    <AllPokemonList>
      <h1>포켓몬 목록</h1>
      <PokemonGrid>
        {pokemonData.map((newPokemon) => (
          <PokemonCard
            key={newPokemon.id}
            pokemon={newPokemon}
            addPokemon={addPokemon}
          />
        ))}
      </PokemonGrid>
    </AllPokemonList>
  );
};

export default PokemonList;

const AllPokemonList = styled.div`
  display: flex;
  background-color: #eee2b5;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;
`;

const PokemonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  width: 100%;
`;
