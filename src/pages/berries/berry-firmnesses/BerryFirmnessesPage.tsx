import React, { FC, useEffect } from 'react';
import css from '../../../styles/ItemsPage.module.css';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useSearchParams } from 'react-router-dom';
import { berryActions } from '../../../store/slices/berry.slice';
import BerryFirmnessComponent from '../../../components/berries/berry-firmnesses/BerryFirmnessComponent';
import PaginationComponent from '../../../components/pagination/PaginationComponent';

const BerryFirmnessesPage: FC = () => {
    const firmnessesPages = useAppSelector(store => store.berrySlice.firmnessesPages);
    const dispatch = useAppDispatch();
    const [params] = useSearchParams({
        page: '1',
    });
    const pageParam = params.get('page');
    const page = pageParam ? +pageParam : 1;

    useEffect(() => {
        dispatch(berryActions.getAllFirmnesses((page - 1) * 20));
    }, [params]);

    return (
        <div className={css.main}>
            <div>
                <h1>Berry Firmness Page</h1>
                <BerryFirmnessComponent />
            </div>
            <PaginationComponent pages={firmnessesPages} />
        </div>
    );
};

export default BerryFirmnessesPage;