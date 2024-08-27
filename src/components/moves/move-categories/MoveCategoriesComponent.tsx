import React, { FC } from 'react';
import css from '../../../styles/ItemsComponent.module.css';
import { useAppSelector } from '../../../hooks/useAppSelector';
import MoveCategoryCardComponent from '../move-category-card/MoveCategoryCardComponent';

const MoveCategoriesComponent: FC = () => {
    const categories = useAppSelector(store => store.moveSlice.categories);

    return (
        <div className={css.main}>
            {categories && categories.results.map((category, i) => <MoveCategoryCardComponent key={i} name={category.name} />)}
        </div>
    );
};

export default MoveCategoriesComponent;