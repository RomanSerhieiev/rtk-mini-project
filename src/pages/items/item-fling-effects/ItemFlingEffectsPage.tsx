import React, { FC, useEffect } from 'react';
import css from '../../../styles/ItemsPage.module.css';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useSearchParams } from 'react-router-dom';
import { itemActions } from '../../../store/slices/item.slice';
import PaginationComponent from '../../../components/pagination/PaginationComponent';
import ItemFlingEffectsComponent from '../../../components/items/items-fling-effects/ItemFlingEffectsComponent';

const ItemFlingEffectsPage: FC = () => {
    const berriesPages = useAppSelector(store => store.itemSlice.flingEffectsPages);
    const dispatch = useAppDispatch();
    const [params] = useSearchParams({
        page: '1',
    });
    const pageParam = params.get('page');
    const page = pageParam ? +pageParam : 1;

    useEffect(() => {
        dispatch(itemActions.getAllFlingEffects((page - 1) * 20));
    }, [params]);

    return (
        <div className={css.main}>
            <div>
                <h1>Item Fling Effects Page</h1>
                <ItemFlingEffectsComponent />
            </div>
            <PaginationComponent pages={berriesPages} />
        </div>
    );
};

export default ItemFlingEffectsPage;