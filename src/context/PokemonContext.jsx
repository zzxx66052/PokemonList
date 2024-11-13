import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const PokemonContext = createContext();

export const usePokemon = () => {
  return useContext(PokemonContext);
};

export const PokemonProvider = ({ children }) => {
  // 로컬스토리지에서 포켓몬 목록을 가져오는 함수
  const localSavedPokemons = () => {
    const savedPokemons = localStorage.getItem("selectedPokemons");
    return savedPokemons
      ? JSON.parse(savedPokemons)
      : new Array(6).fill(null).map(() => ({
          id: null,
          name: "",
          img_url: "src/assets/img/masterball.png", // 빈 포켓몬 볼 이미지
        }));
  };

  const [selectedPokemons, setSelectedPokemons] = useState(localSavedPokemons);

  // 포켓몬을 선택하는 함수
  const addPokemon = (pokemon) => {
    // 이미 선택된 포켓몬인지 확인
    if (selectedPokemons.some((p) => p.id === pokemon.id)) {
      toast.error(`포켓몬 ${pokemon.korean_name}은 이미 선택되었습니다.`, {
        autoClose: 2500,
      });
      return;
    }

    // 포켓몬을 추가할 수 있는 빈 슬롯 찾기
    const updatedPokemons = [...selectedPokemons];
    const emptySlotIndex = updatedPokemons.findIndex(
      (slot) => slot.id === null
    );

    if (emptySlotIndex !== -1) {
      updatedPokemons[emptySlotIndex] = pokemon;
      setSelectedPokemons(updatedPokemons); // 상태 업데이트
      toast.success(
        `포켓몬 ${pokemon.korean_name}이 정상적으로 추가 되었습니다`,
        {
          autoClose: 2500,
        }
      );
    } else {
      toast.error("최대 6마리의 포켓몬만 선택할 수 있습니다.", {
        autoClose: 2500,
      });
    }
  };

  // 포켓몬을 삭제하는 함수
  const onRemovePokemon = (pokemonToRemoveId) => {
    const updatedPokemons = selectedPokemons.map((pokemon) =>
      pokemon.id === pokemonToRemoveId
        ? {
            ...pokemon,
            id: null,
            name: "",
            img_url: "src/assets/img/masterball.png",
          } // 포켓몬을 초기화하여 빈 볼로 설정
        : pokemon
    );

    setSelectedPokemons(updatedPokemons); // 상태 업데이트

    // 모든 포켓몬 슬롯이 비었으면 로컬스토리지에서 데이터 삭제
    if (updatedPokemons.every((slot) => slot.id === null)) {
      localStorage.removeItem("selectedPokemons");
    } else {
      // 상태가 변경된 후 로컬스토리지에 저장
      localStorage.setItem("selectedPokemons", JSON.stringify(updatedPokemons));
    }

    toast.success("포켓몬이 성공적으로 삭제되었습니다.", {
      autoClose: 2500,
    });
  };

  // 상태가 변경될 때마다 로컬스토리지에 저장
  useEffect(() => {
    // 상태가 비어있지 않다면 로컬스토리지에 저장
    if (selectedPokemons.some((pokemon) => pokemon.id !== null)) {
      localStorage.setItem(
        "selectedPokemons",
        JSON.stringify(selectedPokemons)
      );
    }
  }, [selectedPokemons]);

  return (
    <PokemonContext.Provider
      value={{ selectedPokemons, addPokemon, onRemovePokemon }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
