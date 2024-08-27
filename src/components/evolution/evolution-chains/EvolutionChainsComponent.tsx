import React, { FC } from 'react';
import css from '../../../styles/ItemsComponent.module.css';
import { useAppSelector } from '../../../hooks/useAppSelector';
import EvolutionChainCardComponent from '../evolution-chain-card/EvolutionChainCardComponent';

const EvolutionChainsComponent: FC = () => {
    const chains = useAppSelector(store => store.evolutionSlice.chains);

    return (
        <div className={css.main}>
            {chains && chains.results.map((chain, i) => <EvolutionChainCardComponent key={i} url={chain.url} />)}
        </div>
    );
};

export default EvolutionChainsComponent;