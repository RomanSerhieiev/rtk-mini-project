import React, { FC, useEffect } from 'react';
import css from '../../../styles/ItemsPage.module.css';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useSearchParams } from 'react-router-dom';
import { gameActions } from '../../../store/slices/game.slice';
import PaginationComponent from '../../../components/pagination/PaginationComponent';
import PokedexesComponent from '../../../components/games/pokedexes/PokedexesComponent';

const PokedexesPage: FC = () => {
    const pokedexesPages = useAppSelector(store => store.gameSlice.pokedexesPages);
    const dispatch = useAppDispatch();
    const [params] = useSearchParams({
        page: '1',
    });
    const pageParam = params.get('page');
    const page = pageParam ? +pageParam : 1;

    useEffect(() => {
        dispatch(gameActions.getAllPokedexes((page - 1) * 20));
    }, [params]);

    return (
        <div className={css.main}>
            <div>
                <h1>Pokedexes Page</h1>
                <PokedexesComponent />
            </div>
            <PaginationComponent pages={pokedexesPages} />
        </div>
    );
};

export default PokedexesPage;