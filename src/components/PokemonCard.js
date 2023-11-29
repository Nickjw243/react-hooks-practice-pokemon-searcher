import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {
  const [card, setCard] = useState(true)

  const updateCard = () => {
    setCard(prevCard => !prevCard)
  }

  return (
    <Card>
      <div onClick={updateCard}>
        <div className="image">
          <img src={card ? pokemon.sprites.front : pokemon.sprites.back} />
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
