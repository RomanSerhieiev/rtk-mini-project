import React, { FC } from 'react';
import css from '../../../styles/ItemsComponent.module.css';
import { useAppSelector } from '../../../hooks/useAppSelector';
import ItemCardComponent from '../item-card/ItemCardComponent';

const ItemsComponent: FC = () => {
    const items = useAppSelector(store => store.itemSlice.items);

    return (
        <div className={css.main}>
            {items && items.results.map((item, i) => <ItemCardComponent key={i} name={item.name} />)}
        </div>
    );
};

export default ItemsComponent;