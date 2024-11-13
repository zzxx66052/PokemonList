import { useState, useEffect } from "react";
import Dashboard from "../components/DashBoard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../MockData";
import styled from "styled-components";

const Dex = () => {
  // 선택된 포켓몬들을 관리하는 상태
  const [selectedPokemons, setSelectedPokemons] = useState(
    new Array(6).fill(null).map(() => ({
      id: null,
      name: "",
      img_url: "src/assets/img/masterBall.png", // 빈 포켓몬 볼 이미지
    }))
  );

  // 포켓몬을 선택하는 함수
  const addPokemon = (pokemon) => {
    // 이미 선택된 포켓몬인지 확인
    if (selectedPokemons.some((p) => p.id === pokemon.id)) {
      alert("이 포켓몬은 이미 선택되었습니다.");
      return;
    }

    // 포켓몬이 6마리 미만일 경우에만 추가
    if (selectedPokemons.filter((p) => p.id !== null).length < 6) {
      setSelectedPokemons((prevState) => {
        const updatedPokemons = [...prevState];
        const firstEmptyIndex = updatedPokemons.findIndex((p) => p.id === null);
        if (firstEmptyIndex !== -1) {
          updatedPokemons[firstEmptyIndex] = pokemon; // 첫 번째 빈 자리에 포켓몬 추가
        }
        return updatedPokemons;
      });
    } else {
      alert("최대 6마리의 포켓몬만 선택할 수 있습니다.");
    }
  };

  // 포켓몬을 삭제하는 함수
  const onRemovePokemon = (pokemonToRemoveId) => {
    setSelectedPokemons((prevState) =>
      prevState.map((pokemon) =>
        pokemon.id === pokemonToRemoveId
          ? { id: null, name: "", img_url: "src/assets/img/masterBall.png" }
          : pokemon
      )
    );
  };

  return (
    <BodyRoot>
      <Dashboard
        selectedPokemons={selectedPokemons}
        removePokemon={onRemovePokemon}
      />
      <PokemonList pokemonData={MOCK_DATA} addPokemon={addPokemon} />
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
