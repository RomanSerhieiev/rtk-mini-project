import React, { FC, useEffect } from 'react';
import css from '../../../styles/ItemsPage.module.css';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useSearchParams } from 'react-router-dom';
import { itemActions } from '../../../store/slices/item.slice';
import PaginationComponent from '../../../components/pagination/PaginationComponent';
import ItemsComponent from '../../../components/items/items/ItemsComponent';

const ItemsPage: FC = () => {
    const itemsPages = useAppSelector(store => store.itemSlice.itemsPages);
    const dispatch = useAppDispatch();
    const [params] = useSearchParams({
        page: '1',
    });
    const pageParam = params.get('page');
    const page = pageParam ? +pageParam : 1;

    useEffect(() => {
        dispatch(itemActions.getAll((page - 1) * 20));
    }, [params]);

    return (
        <div className={css.main}>
            <div>
                <h1>Items Page</h1>
                <ItemsComponent />
            </div>
            <PaginationComponent pages={itemsPages} />
        </div>
    );
};

export default ItemsPage;