import React, { FC } from 'react';
import css from '../../../styles/ItemsComponent.module.css';
import { useAppSelector } from '../../../hooks/useAppSelector';
import StatCardComponent from '../stat-card/StatCardComponent';

const StatsComponent: FC = () => {
    const stats = useAppSelector(store => store.pokemonSlice.stats);

    return (
        <div className={css.main}>
            {stats && stats.results.map((stat, i) => <StatCardComponent key={i} name={stat.name} />)}
        </div>
    );
};

export default StatsComponent;