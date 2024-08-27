import React, { FC } from 'react';
import css from '../../../styles/ItemsComponent.module.css';
import { useAppSelector } from '../../../hooks/useAppSelector';
import GrowthRateCardComponent from '../growth-rate-card/GrowthRateCardComponent';

const GrowthRatesComponent: FC = () => {
    const growthRates = useAppSelector(store => store.pokemonSlice.growthRates);

    return (
        <div className={css.main}>
            {growthRates && growthRates.results.map((growthRate, i) => <GrowthRateCardComponent key={i} name={growthRate.name} />)}
        </div>
    );
};

export default GrowthRatesComponent;