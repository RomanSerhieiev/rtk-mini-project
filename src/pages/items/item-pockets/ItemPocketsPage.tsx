import React, { FC, useEffect } from 'react';
import css from '../../../styles/ItemsPage.module.css';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useSearchParams } from 'react-router-dom';
import { itemActions } from '../../../store/slices/item.slice';
import PaginationComponent from '../../../components/pagination/PaginationComponent';
import ItemPocketsComponent from '../../../components/items/item-pockets/ItemPocketsComponent';

const ItemPocketsPage: FC = () => {
    const pocketsPages = useAppSelector(store => store.itemSlice.pocketsPages);
    const dispatch = useAppDispatch();
    const [params] = useSearchParams({
        page: '1',
    });
    const pageParam = params.get('page');
    const page = pageParam ? +pageParam : 1;

    useEffect(() => {
        dispatch(itemActions.getAllPockets((page - 1) * 20));
    }, [params]);

    return (
        <div className={css.main}>
            <div>
                <h1>Item Pockets Page</h1>
                <ItemPocketsComponent />
            </div>
            <PaginationComponent pages={pocketsPages} />
        </div>
    );
};

export default ItemPocketsPage;