import React, { FC } from 'react';
import { useAppSelector } from '../../../hooks/useAppSelector';
import css from '../../../styles/ItemsComponent.module.css';
import SuperContestEffectCardComponent from '../super-contest-effect-card/SuperContestEffectCardComponent';

const SuperContestEffectsComponent: FC = () => {
    const superEffects = useAppSelector(store => store.contestSlice.superEffects);

    return (
        <div className={css.main}>
            {superEffects && superEffects.results.map((superEffect, i) => <SuperContestEffectCardComponent key={i} url={superEffect.url} />)}
        </div>
    );
};

export default SuperContestEffectsComponent;