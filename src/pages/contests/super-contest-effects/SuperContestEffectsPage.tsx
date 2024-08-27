import React, { FC, useEffect } from 'react';
import css from '../../../styles/ItemsPage.module.css';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useSearchParams } from 'react-router-dom';
import PaginationComponent from '../../../components/pagination/PaginationComponent';
import { contestActions } from '../../../store/slices/contest.slice';
import SuperContestEffectsComponent from '../../../components/contests/super-contest-effects/SuperContestEffectsComponent';

const SuperContestEffectsPage: FC = () => {
    const superEffectsPages = useAppSelector(store => store.contestSlice.superEffectsPages);
    const dispatch = useAppDispatch();
    const [params] = useSearchParams({
        page: '1',
    });
    const pageParam = params.get('page');
    const page = pageParam ? +pageParam : 1;

    useEffect(() => {
        dispatch(contestActions.getAllSuperEffects((page - 1) * 20));
    }, [params]);

    return (
        <div className={css.main}>
            <div>
                <h1>Super Contest Effects Page</h1>
                <SuperContestEffectsComponent />
            </div>
            <PaginationComponent pages={superEffectsPages} />
        </div>
    );
};

export default SuperContestEffectsPage;