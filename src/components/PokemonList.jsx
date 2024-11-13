import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import { Link } from "react-router-dom";

const PokemonList = ({ pokemonData, addPokemon }) => {
  return (
    <AllPokemonList>
      {pokemonData.map((newPokemon) => {
        return (
          <StyledLink to={`/pokemon/${newPokemon.id}`} key={newPokemon.id}>
            <PokemonCard pokemon={newPokemon} addPokemon={addPokemon} />
          </StyledLink>
        );
      })}
    </AllPokemonList>
  );
};

export default PokemonList;

const AllPokemonList = styled.div`
  display: flex;
  background-color: #ffffff;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  margin: 20px;
  gap: 20px;
  border-radius: 20px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
