import React, { FC } from 'react';
import css from '../../../styles/ItemsComponent.module.css';
import { useAppSelector } from '../../../hooks/useAppSelector';
import PokemonSpecieCardComponent from '../pokemon-specie-card/PokemonSpecieCardComponent';

const PokemonSpeciesComponent: FC = () => {
    const species = useAppSelector(store => store.pokemonSlice.species);

    return (
        <div className={css.main}>
            {species && species.results.map((specie, i) => <PokemonSpecieCardComponent key={i} name={specie.name} />)}
        </div>
    );
};

export default PokemonSpeciesComponent;