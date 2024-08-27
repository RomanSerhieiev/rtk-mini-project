import React, { FC } from 'react';
import css from '../../../styles/ItemsComponent.module.css';
import { useAppSelector } from '../../../hooks/useAppSelector';
import PokemonHabitatCardComponent from '../pokemon-habitat-card/PokemonHabitatCardComponent';

const PokemonHabitatsComponent: FC = () => {
    const habitats = useAppSelector(store => store.pokemonSlice.habitats);

    return (
        <div className={css.main}>
            {habitats && habitats.results.map((habitat, i) => <PokemonHabitatCardComponent key={i} name={habitat.name} />)}
        </div>
    );
};

export default PokemonHabitatsComponent;