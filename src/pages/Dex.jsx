import DashBoard from "../components/PokemonDashBoard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../MockData";
import styled from "styled-components";
import { usePokemon } from "../context/PokemonContext";

const Dex = () => {
  const { selectedPokemons, onRemovePokemon } = usePokemon();

  return (
    <BodyRoot>
      <DashBoard
        selectedPokemons={selectedPokemons}
        removePokemon={onRemovePokemon}
      />
      <PokemonList pokemonData={MOCK_DATA} />
    </BodyRoot>
  );
};

export default Dex;

const BodyRoot = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  max-width: 1280px;
  margin: 0 auto;
  box-sizing: border-box;
`;
