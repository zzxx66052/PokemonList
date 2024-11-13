import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import MOCK_DATA from "../MockData";
import styled from "styled-components";

const PokemonDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    const selectedPokemon = MOCK_DATA.find((p) => p.id === parseInt(id));
    setPokemon(selectedPokemon);
  }, [id]);

  const pageBack = () => {
    navigate(-1);
  };

  return (
    <DetailPages>
      {pokemon && (
        <div>
          <img src={pokemon.img_url} alt={pokemon.korean_name}></img>
          <h1>{pokemon.korean_name}</h1>
          <p>ID: {pokemon.id}</p>
          <p>타입: {pokemon.types}</p>
          <p>설명: {pokemon.description}</p>
          <button onClick={pageBack}>뒤로 가기</button>
        </div>
      )}
    </DetailPages>
  );
};

export default PokemonDetail;

const DetailPages = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  align-items: center;

  img {
    width: 200px;
    height: 200px;
  }

  h1 {
    color: #fa4032;
  }

  p {
    font-size: 20px;
    font-weight: bold;
    margin: 20px;
  }

  button {
    background-color: black;
    color: white;
    border: none;
    padding: 10px 20px;
    margin: 10px;
    border-radius: 20px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background-color: grey;
    }
  }
`;
