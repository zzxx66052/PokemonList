import styled from "styled-components";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemonData, addPokemon }) => {
  return (
    <AllPokemonList>
      {pokemonData.map((newPokemon) => (
        <PokemonCard
          key={newPokemon.id}
          pokemon={newPokemon}
          addPokemon={addPokemon}
        />
      ))}
    </AllPokemonList>
  );
};

export default PokemonList;

const AllPokemonList = styled.div`
  display: flex;
  background-color: #1e1e1e;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  margin: 20px;
  gap: 20px;
  border-radius: 20px;
`;
