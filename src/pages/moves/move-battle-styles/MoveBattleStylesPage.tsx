import React, { FC, useEffect } from 'react';
import css from '../../../styles/ItemsPage.module.css';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useSearchParams } from 'react-router-dom';
import { moveActions } from '../../../store/slices/move.slice';
import PaginationComponent from '../../../components/pagination/PaginationComponent';
import MoveBattleStylesComponent from '../../../components/moves/move-battle-styles/MoveBattleStylesComponent';

const MoveBattleStylesPage: FC = () => {
    const pages = useAppSelector(store => store.moveSlice.battleStylesPages);
    const dispatch = useAppDispatch();
    const [params] = useSearchParams({
        page: '1',
    });
    const pageParam = params.get('page');
    const page = pageParam ? +pageParam : 1;

    useEffect(() => {
        dispatch(moveActions.getAllBattleStyles((page - 1) * 20));
    }, [params]);

    return (
        <div className={css.main}>
            <div>
                <h1>Move Battle Styles Page</h1>
                <MoveBattleStylesComponent />
            </div>
            <PaginationComponent pages={pages} />
        </div>
    );
};

export default MoveBattleStylesPage;