import React, { FC } from 'react';
import css from '../../../styles/ItemsComponent.module.css';
import { useAppSelector } from '../../../hooks/useAppSelector';
import GenerationCardComponent from '../generation-card/GenerationCardComponent';

const GenerationsComponent: FC = () => {
    const generations = useAppSelector(store => store.gameSlice.generations);

    return (
        <div className={css.main}>
            {generations && generations.results.map((generation, i) => <GenerationCardComponent key={i} name={generation.name} />)}
        </div>
    );
};

export default GenerationsComponent;