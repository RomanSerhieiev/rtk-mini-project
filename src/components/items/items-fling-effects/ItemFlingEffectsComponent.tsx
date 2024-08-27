import React, { FC } from 'react';
import css from '../../../styles/ItemsComponent.module.css';
import { useAppSelector } from '../../../hooks/useAppSelector';
import ItemFlingEffectCardComponent from '../item-fling-effect-card/ItemFlingEffectCardComponent';

const ItemFlingEffectsComponent: FC = () => {
    const flingEffects = useAppSelector(store => store.itemSlice.flingEffects);

    return (
        <div className={css.main}>
            {flingEffects && flingEffects.results.map((flingEffect, i) => <ItemFlingEffectCardComponent key={i} name={flingEffect.name} />)}
        </div>
    );
};

export default ItemFlingEffectsComponent;