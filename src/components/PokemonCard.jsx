import styled from "styled-components"; // styled-components import

const PokemonCard = ({ pokemon, addPokemon }) => {
  return (
    <Card>
      <CardImage src={pokemon.img_url} alt={pokemon.korean_name} />
      <CardTitle>{pokemon.korean_name}</CardTitle>
      <CardNumber> No.{pokemon.id}</CardNumber>
      <AddButton onClick={() => addPokemon(pokemon)}>추가</AddButton>
    </Card>
  );
};

export default PokemonCard;

// Styled Components 정의
const Card = styled.div`
  display: flex;
  flex-wrep: wrap;
  flex-direction: column;
  background-color: #f7f7f7;
  justify-content: center;
  align-items: center;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.3);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
`;

const CardTitle = styled.h3`
  font-size: 15px;
  font-weight: 700;
  margin-top: 10px;
`;

const CardNumber = styled.h5`
  font-size: 15px;
`;

const AddButton = styled.button`
  background-color: #fa4032;
  color: white;
  border: none;
  padding: 5px 10px;
  margin-top: 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #fa812f;
  }
`;
