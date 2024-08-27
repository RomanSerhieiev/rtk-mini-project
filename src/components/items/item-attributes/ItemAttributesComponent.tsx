import React, { FC } from 'react';
import css from '../../../styles/ItemsComponent.module.css';
import { useAppSelector } from '../../../hooks/useAppSelector';
import ItemAttributeCardComponent from '../item-attribute-card/ItemAttributeCardComponent';

const ItemAttributesComponent: FC = () => {
    const attributes = useAppSelector(store => store.itemSlice.attributes);

    return (
        <div className={css.main}>
            {attributes && attributes.results.map((attribute, i) => <ItemAttributeCardComponent key={i} name={attribute.name} />)}
        </div>
    );
};

export default ItemAttributesComponent;