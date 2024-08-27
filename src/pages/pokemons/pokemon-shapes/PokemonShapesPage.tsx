import React, { FC, useEffect } from 'react';
import css from '../../../styles/ItemsPage.module.css';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useSearchParams } from 'react-router-dom';
import { pokemonActions } from '../../../store/slices/pokemon.slice';
import PaginationComponent from '../../../components/pagination/PaginationComponent';
import PokemonShapesComponent from '../../../components/pokemons/pokemon-shapes/PokemonShapesComponent';

const PokemonShapesPage: FC = () => {
    const pages = useAppSelector(store => store.pokemonSlice.shapesPages);
    const dispatch = useAppDispatch();
    const [params] = useSearchParams({
        page: '1',
    });
    const pageParam = params.get('page');
    const page = pageParam ? +pageParam : 1;

    useEffect(() => {
        dispatch(pokemonActions.getAllShapes((page - 1) * 20));
    }, [params]);

    return (
        <div className={css.main}>
            <div>
                <h1>Pokemon Shapes Page</h1>
                <PokemonShapesComponent />
            </div>
            <PaginationComponent pages={pages} />
        </div>
    );
};

export default PokemonShapesPage;