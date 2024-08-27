import React, { FC, useEffect } from 'react';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useSearchParams } from 'react-router-dom';
import { contestActions } from '../../../store/slices/contest.slice';
import css from '../../../styles/ItemsPage.module.css';
import PaginationComponent from '../../../components/pagination/PaginationComponent';
import ContestEffectsComponent from '../../../components/contests/contest-effects/ContestEffectsComponent';

const ContestEffectsPage: FC = () => {
    const effectsPages = useAppSelector(store => store.contestSlice.effectsPages);
    const dispatch = useAppDispatch();
    const [params] = useSearchParams({
        page: '1',
    });
    const pageParam = params.get('page');
    const page = pageParam ? +pageParam : 1;

    useEffect(() => {
        dispatch(contestActions.getAllEffects((page - 1) * 20));
    }, [params]);

    return (
        <div className={css.main}>
            <div>
                <h1>Contest Effects Page</h1>
                <ContestEffectsComponent />
            </div>
            <PaginationComponent pages={effectsPages} />
        </div>
    );
};

export default ContestEffectsPage;