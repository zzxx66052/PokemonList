import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const PokemonContext = createContext();

export const usePokemon = () => {
  return useContext(PokemonContext);
};

export const PokemonProvider = ({ children }) => {
  const [selectedPokemons, setSelectedPokemons] = useState(
    new Array(6).fill(null)
  );
  // 포켓몬을 선택하는 함수
  const addPokemon = (pokemon) => {
    if (selectedPokemons.some((p) => p.id === pokemon.id)) {
      toast.error(`포켓몬 ${pokemon.korean_name}은  이미 선택되었습니다.`);
      return;
    }
    if (selectedPokemons.length < 6) {
      // 포켓몬을 추가
      setSelectedPokemons([...selectedPokemons, pokemon]);
      toast.success(`포켓몬 ${pokemon.korean_name} 이(가) 추가되었습니다.`);
    } else {
      // 이미 6마리가 선택되었으면 알림
      toast.error("최대 6마리의 포켓몬만 선택할 수 있습니다.");
    }
  };
  // 포켓몬을 삭제하는 함수
  const onRemovePokemon = (pokemonToRemove) => {
    setSelectedPokemons(
      selectedPokemons.filter((pokemon) => pokemon.id !== pokemonToRemove)
    );
    toast.success("포켓몬이 성공적으로 삭제되었습니다.");
  };
  return (
    <PokemonContext.Provider
      value={{ selectedPokemons, addPokemon, onRemovePokemon }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
