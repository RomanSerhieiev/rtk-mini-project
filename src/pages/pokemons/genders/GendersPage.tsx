import React, { FC, useEffect } from 'react';
import css from '../../../styles/ItemsPage.module.css';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useSearchParams } from 'react-router-dom';
import { pokemonActions } from '../../../store/slices/pokemon.slice';
import PaginationComponent from '../../../components/pagination/PaginationComponent';
import GendersComponent from '../../../components/pokemons/genders/GendersComponent';

const GendersPage: FC = () => {
    const pages = useAppSelector(store => store.pokemonSlice.gendersPages);
    const dispatch = useAppDispatch();
    const [params] = useSearchParams({
        page: '1',
    });
    const pageParam = params.get('page');
    const page = pageParam ? +pageParam : 1;

    useEffect(() => {
        dispatch(pokemonActions.getAllGenders((page - 1) * 20));
    }, [params]);

    return (
        <div className={css.main}>
            <div>
                <h1>Genders Page</h1>
                <GendersComponent />
            </div>
            <PaginationComponent pages={pages} />
        </div>
    );
};

export default GendersPage;