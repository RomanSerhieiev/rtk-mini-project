import React, { FC } from 'react';
import { useAppSelector } from '../../../hooks/useAppSelector';
import css from '../../../styles/ItemsComponent.module.css';
import ContestEffectCardComponent from '../contest-effect-card/ContestEffectCardComponent';

const ContestEffectsComponent: FC = () => {
    const effects = useAppSelector(store => store.contestSlice.effects);

    return (
        <div className={css.main}>
            {effects && effects.results.map((effect, i) => <ContestEffectCardComponent key={i} url={effect.url} />)}
        </div>
    );
};

export default ContestEffectsComponent;