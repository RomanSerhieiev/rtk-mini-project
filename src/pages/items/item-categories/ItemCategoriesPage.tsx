import React, { FC, useEffect } from 'react';
import css from '../../../styles/ItemsPage.module.css';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useSearchParams } from 'react-router-dom';
import { itemActions } from '../../../store/slices/item.slice';
import PaginationComponent from '../../../components/pagination/PaginationComponent';
import ItemCategoriesComponent from '../../../components/items/item-categiries/ItemCategoriesComponent';

const ItemCategoriesPage: FC = () => {
    const categoriesPages = useAppSelector(store => store.itemSlice.categoriesPages);
    const dispatch = useAppDispatch();
    const [params] = useSearchParams({
        page: '1',
    });
    const pageParam = params.get('page');
    const page = pageParam ? +pageParam : 1;

    useEffect(() => {
        dispatch(itemActions.getAllCategories((page - 1) * 20));
    }, [params]);

    return (
        <div className={css.main}>
            <div>
                <h1>Item Categories Page</h1>
                <ItemCategoriesComponent />
            </div>
            <PaginationComponent pages={categoriesPages} />
        </div>
    );
};

export default ItemCategoriesPage;