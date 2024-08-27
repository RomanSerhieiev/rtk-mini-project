import React, { FC, useEffect } from 'react';
import css from '../../../styles/ItemsPage.module.css';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useSearchParams } from 'react-router-dom';
import { pokemonActions } from '../../../store/slices/pokemon.slice';
import PaginationComponent from '../../../components/pagination/PaginationComponent';
import PokemonColorsComponent from '../../../components/pokemons/pokemon-colors/PokemonColorsComponent';

const PokemonColorsPage: FC = () => {
    const pages = useAppSelector(store => store.pokemonSlice.colorsPages);
    const dispatch = useAppDispatch();
    const [params] = useSearchParams({
        page: '1',
    });
    const pageParam = params.get('page');
    const page = pageParam ? +pageParam : 1;

    useEffect(() => {
        dispatch(pokemonActions.getAllColors((page - 1) * 20));
    }, [params]);

    return (
        <div className={css.main}>
            <div>
                <h1>Pokemon Colors Page</h1>
                <PokemonColorsComponent />
            </div>
            <PaginationComponent pages={pages} />
        </div>
    );
};

export default PokemonColorsPage;