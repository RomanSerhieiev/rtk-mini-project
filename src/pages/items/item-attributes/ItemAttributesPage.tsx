import React, { FC, useEffect } from 'react';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useSearchParams } from 'react-router-dom';
import { itemActions } from '../../../store/slices/item.slice';
import css from '../../../styles/ItemsPage.module.css';
import PaginationComponent from '../../../components/pagination/PaginationComponent';
import ItemAttributesComponent from '../../../components/items/item-attributes/ItemAttributesComponent';

const ItemAttributesPage: FC = () => {
    const attributesPages = useAppSelector(store => store.itemSlice.attributesPages);
    const dispatch = useAppDispatch();
    const [params] = useSearchParams({
        page: '1',
    });
    const pageParam = params.get('page');
    const page = pageParam ? +pageParam : 1;

    useEffect(() => {
        dispatch(itemActions.getAllAttributes((page - 1) * 20));
    }, [params]);

    return (
        <div className={css.main}>
            <div>
                <h1>Item Attributes Page</h1>
                <ItemAttributesComponent />
            </div>
            <PaginationComponent pages={attributesPages} />
        </div>
    );
};

export default ItemAttributesPage;