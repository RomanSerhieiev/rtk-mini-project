import React, { FC } from 'react';
import css from '../../../styles/ItemsComponent.module.css';
import { useAppSelector } from '../../../hooks/useAppSelector';
import PokeathlonStatCardComponent from '../pokeathlon-stat-card/PokeathlonStatCardComponent';

const PokeathlonStatsComponent: FC = () => {
    const pokeathlonStats = useAppSelector(store => store.pokemonSlice.pokeathlonStats);

    return (
        <div className={css.main}>
            {pokeathlonStats && pokeathlonStats.results.map((pokeathlonStat, i) => <PokeathlonStatCardComponent key={i} name={pokeathlonStat.name} />)}
        </div>
    );
};

export default PokeathlonStatsComponent;