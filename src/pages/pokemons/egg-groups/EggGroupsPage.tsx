import React, { FC, useEffect } from 'react';
import css from '../../../styles/ItemsPage.module.css';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useSearchParams } from 'react-router-dom';
import { pokemonActions } from '../../../store/slices/pokemon.slice';
import PaginationComponent from '../../../components/pagination/PaginationComponent';
import EggGroupsComponent from '../../../components/pokemons/egg-groups/EggGroupsComponent';

const EggGroupsPage: FC = () => {
    const pages = useAppSelector(store => store.pokemonSlice.eggGroupsPages);
    const dispatch = useAppDispatch();
    const [params] = useSearchParams({
        page: '1',
    });
    const pageParam = params.get('page');
    const page = pageParam ? +pageParam : 1;

    useEffect(() => {
        dispatch(pokemonActions.getAllEggGroups((page - 1) * 20));
    }, [params]);

    return (
        <div className={css.main}>
            <div>
                <h1>Egg Groups Page</h1>
                <EggGroupsComponent />
            </div>
            <PaginationComponent pages={pages} />
        </div>
    );
};

export default EggGroupsPage;