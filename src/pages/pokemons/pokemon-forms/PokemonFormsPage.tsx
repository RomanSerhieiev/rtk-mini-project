import React, { FC, useEffect } from 'react';
import css from '../../../styles/ItemsPage.module.css';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useSearchParams } from 'react-router-dom';
import { pokemonActions } from '../../../store/slices/pokemon.slice';
import PaginationComponent from '../../../components/pagination/PaginationComponent';
import PokemonFormsComponent from '../../../components/pokemons/pokemon-forms/PokemonFormsComponent';

const PokemonFormsPage: FC = () => {
    const pages = useAppSelector(store => store.pokemonSlice.formsPages);
    const dispatch = useAppDispatch();
    const [params] = useSearchParams({
        page: '1',
    });
    const pageParam = params.get('page');
    const page = pageParam ? +pageParam : 1;

    useEffect(() => {
        dispatch(pokemonActions.getAllForms((page - 1) * 20));
    }, [params]);

    return (
        <div className={css.main}>
            <div>
                <h1>Pokemon Forms Page</h1>
                <PokemonFormsComponent />
            </div>
            <PaginationComponent pages={pages} />
        </div>
    );
};

export default PokemonFormsPage;