import { useState } from "react";
import Dashboard from "./components/Dashboard";
import PokemonList from "./components/PokemonList";
import MOCK_DATA from "./MockData";

const Dex = () => {
  // 선택된 포켓몬들을 관리하는 상태
  const [selectedPokemons, setSelectedPokemons] = useState([]);

  // 포켓몬을 선택하는 함수
  const addPokemon = (pokemon) => {
    if (selectedPokemons.length <= 6) {
      // 포켓몬을 추가
      setSelectedPokemons([...selectedPokemons, pokemon]);
    } else {
      // 이미 6마리가 선택되었으면 알림
      alert("최대 6마리의 포켓몬만 선택할 수 있습니다.");
    }
    if (selectedPokemons.some((p) => p.id === pokemon.id)) {
      alert("이 포켓몬은 이미 선택되었습니다.");
    }
  };

  // 포켓몬을 삭제하는 함수
  const onRemovePokemon = (pokemonToRemove) => {
    setSelectedPokemons(
      selectedPokemons.filter((pokemon) => pokemon.id !== pokemonToRemove.id)
    );
  };

  return (
    <div>
      <Dashboard
        selectedPokemons={selectedPokemons}
        removePokemon={onRemovePokemon}
      />
      <PokemonList pokemonData={MOCK_DATA} addPokemon={addPokemon} />
    </div>
  );
};

export default Dex;
