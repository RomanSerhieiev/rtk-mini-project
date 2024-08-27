import React, { FC, useEffect } from 'react';
import css from '../../../styles/ItemsPage.module.css';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useSearchParams } from 'react-router-dom';
import { contestActions } from '../../../store/slices/contest.slice';
import PaginationComponent from '../../../components/pagination/PaginationComponent';
import ContestTypesComponent from '../../../components/contests/contest-types/ContestTypesComponent';

const ContestTypesPage: FC = () => {
    const typesPages = useAppSelector(store => store.contestSlice.typesPages);
    const dispatch = useAppDispatch();
    const [params] = useSearchParams({
        page: '1',
    });
    const pageParam = params.get('page');
    const page = pageParam ? +pageParam : 1;

    useEffect(() => {
        dispatch(contestActions.getAllTypes((page - 1) * 20));
    }, [params]);

    return (
        <div className={css.main}>
            <div>
                <h1>Contest Types Page</h1>
                <ContestTypesComponent />
            </div>
            <PaginationComponent pages={typesPages} />
        </div>
    );
};

export default ContestTypesPage;