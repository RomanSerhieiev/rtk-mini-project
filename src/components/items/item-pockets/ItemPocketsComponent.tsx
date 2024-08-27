import React, { FC } from 'react';
import css from '../../../styles/ItemsComponent.module.css';
import { useAppSelector } from '../../../hooks/useAppSelector';
import ItemPocketCardComponent from '../item-pocket-card/ItemPocketCardComponent';

const ItemPocketsComponent: FC = () => {
    const pockets = useAppSelector(store => store.itemSlice.pockets);

    return (
        <div className={css.main}>
            {pockets && pockets.results.map((pocket, i) => <ItemPocketCardComponent key={i} name={pocket.name} />)}
        </div>
    );
};

export default ItemPocketsComponent;