import React, { FC, useEffect } from 'react';
import css from '../../../styles/ItemsPage.module.css';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { berryActions } from '../../../store/slices/berry.slice';
import BerriesComponent from '../../../components/berries/berries/BerriesComponent';
import PaginationComponent from '../../../components/pagination/PaginationComponent';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useSearchParams } from 'react-router-dom';

const BerriesPage: FC = () => {
    const pages = useAppSelector(store => store.berrySlice.berriesPages);
    const dispatch = useAppDispatch();
    const [params] = useSearchParams({
        page: '1',
    });
    const pageParam = params.get('page');
    const page = pageParam ? +pageParam : 1;

    useEffect(() => {
        dispatch(berryActions.getAll((page - 1) * 20));
    }, [params]);

    return (
        <div className={css.main}>
            <div>
                <h1>All Berries</h1>
                <BerriesComponent />
            </div>
            <PaginationComponent pages={pages} />
        </div>
    );
};

export default BerriesPage;