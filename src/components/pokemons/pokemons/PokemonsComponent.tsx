import React, { FC } from 'react';
import css from '../../../styles/ItemsComponent.module.css';
import { useAppSelector } from '../../../hooks/useAppSelector';
import PokemonCardComponent from '../pokemon-card/PokemonCardComponent';

const PokemonsComponent: FC = () => {
    const pokemons = useAppSelector(store => store.pokemonSlice.pokemons);

    return (
        <div className={css.main}>
            {pokemons && pokemons.results.map((pokemon, i) => <PokemonCardComponent key={i} url={pokemon.url} name={pokemon.name} />)}
        </div>
    );
};

export default PokemonsComponent;