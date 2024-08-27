import React, { FC } from 'react';
import css from '../../../styles/ItemsComponent.module.css';
import { useAppSelector } from '../../../hooks/useAppSelector';
import PokemonColorCardComponent from '../pokemon-color-card/PokemonColorCardComponent';

const PokemonColorsComponent: FC = () => {
    const colors = useAppSelector(store => store.pokemonSlice.colors);

    return (
        <div className={css.main}>
            {colors && colors.results.map((color, i) => <PokemonColorCardComponent key={i} name={color.name} />)}
        </div>
    );
};

export default PokemonColorsComponent;