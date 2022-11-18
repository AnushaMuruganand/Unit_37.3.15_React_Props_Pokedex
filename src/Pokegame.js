import React from "react";
import Pokedex from "./Pokedex";


/** Return sum of experience in hand. */

function sumExperience(hand) {
    return hand.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
}
  
const Pokegame = ({pokemonLists}) => {
    const hand1 = [...pokemonLists];
    const hand2 = [];


    // Splitting the pokecards into 2 hands each with 4 cards
    while (hand2.length < hand1.length) {
        const randIndex = Math.floor(Math.random() * hand1.length);

        const randPokemon = hand1.splice(randIndex, 1)[0];

        hand2.push(randPokemon);
    }

    // Calculating the total experience of each hand

    const exp1 = sumExperience(hand1);
    const exp2 = sumExperience(hand2);

    return (
        <div>
        <Pokedex pokemonLists={hand1} exp={exp1} isWinner={exp1 > exp2} />
        <Pokedex pokemonLists={hand2} exp={exp2} isWinner={exp2 > exp1} />
      </div>
    )
};

export default Pokegame;