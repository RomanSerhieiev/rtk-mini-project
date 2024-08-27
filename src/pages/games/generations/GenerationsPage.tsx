import React, { FC, useEffect } from 'react';
import css from '../../../styles/ItemsPage.module.css';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useSearchParams } from 'react-router-dom';
import { gameActions } from '../../../store/slices/game.slice';
import PaginationComponent from '../../../components/pagination/PaginationComponent';
import GenerationsComponent from '../../../components/games/generations/GenerationsComponent';

const GenerationsPage: FC = () => {
    const generationsPages = useAppSelector(store => store.gameSlice.generationsPages);
    const dispatch = useAppDispatch();
    const [params] = useSearchParams({
        page: '1',
    });
    const pageParam = params.get('page');
    const page = pageParam ? +pageParam : 1;

    useEffect(() => {
        dispatch(gameActions.getAllGenerations((page - 1) * 20));
    }, [params]);

    return (
        <div className={css.main}>
            <div>
                <h1>Generations Page</h1>
                <GenerationsComponent />
            </div>
            <PaginationComponent pages={generationsPages} />
        </div>
    );
};

export default GenerationsPage;