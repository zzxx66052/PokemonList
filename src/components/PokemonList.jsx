import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import { Link } from "react-router-dom";
import { usePokemon } from "../context/PokemonContext";

const PokemonList = ({ pokemonData }) => {
  const { addPokemon } = usePokemon();

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
  justify-content: flex-start;
  width: 100%;
  margin: 10px;
  gap: 20px;
  border-radius: 20px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
