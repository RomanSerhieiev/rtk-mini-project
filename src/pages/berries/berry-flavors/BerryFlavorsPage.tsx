import React, { FC, useEffect } from 'react';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useSearchParams } from 'react-router-dom';
import { berryActions } from '../../../store/slices/berry.slice';
import css from '../../../styles/ItemsPage.module.css';
import PaginationComponent from '../../../components/pagination/PaginationComponent';
import BerryFlavorsComponent from '../../../components/berries/berry-flavors/BerryFlavorsComponent';

const BerryFlavorsPage: FC = () => {
    const flavorsPages = useAppSelector(store => store.berrySlice.flavorsPages);
    const dispatch = useAppDispatch();
    const [params] = useSearchParams({
        page: '1',
    });
    const pageParam = params.get('page');
    const page = pageParam ? +pageParam : 1;

    useEffect(() => {
        dispatch(berryActions.getAllFlavors((page - 1) * 20));
    }, [params]);

    return (
        <div className={css.main}>
            <div>
                <h1>Berry Flavors Page</h1>
                <BerryFlavorsComponent />
            </div>
            <PaginationComponent pages={flavorsPages} />
        </div>
    );
};

export default BerryFlavorsPage;