import React, { FC } from 'react';
import { useAppSelector } from '../../../hooks/useAppSelector';
import css from '../../../styles/ItemsComponent.module.css';
import ItemCategoryCardComponent from '../item-category-card/ItemCategoryCardComponent';

const ItemCategoriesComponent: FC = () => {
    const categories = useAppSelector(store => store.itemSlice.categories);

    return (
        <div className={css.main}>
            {categories && categories.results.map((category, i) => <ItemCategoryCardComponent key={i} name={category.name} />)}
        </div>
    );
};

export default ItemCategoriesComponent;