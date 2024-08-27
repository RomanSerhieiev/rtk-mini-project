import React, { FC, useEffect } from 'react';
import css from '../../../styles/ItemsPage.module.css';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useSearchParams } from 'react-router-dom';
import { moveActions } from '../../../store/slices/move.slice';
import PaginationComponent from '../../../components/pagination/PaginationComponent';
import MoveLearnMethodsComponent from '../../../components/moves/move-learn-methods/MoveLearnMethodsComponent';

const MoveLearnMethodsPage: FC = () => {
    const pages = useAppSelector(store => store.moveSlice.learnMethodsPages);
    const dispatch = useAppDispatch();
    const [params] = useSearchParams({
        page: '1',
    });
    const pageParam = params.get('page');
    const page = pageParam ? +pageParam : 1;

    useEffect(() => {
        dispatch(moveActions.getAllLearnMethods((page - 1) * 20));
    }, [params]);

    return (
        <div className={css.main}>
            <div>
                <h1>Move Learn Methods Page</h1>
                <MoveLearnMethodsComponent />
            </div>
            <PaginationComponent pages={pages} />
        </div>
    );
};

export default MoveLearnMethodsPage;