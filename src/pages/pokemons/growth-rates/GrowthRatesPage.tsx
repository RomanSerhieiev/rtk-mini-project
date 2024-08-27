import React, { FC, useEffect } from 'react';
import css from '../../../styles/ItemsPage.module.css';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useSearchParams } from 'react-router-dom';
import { pokemonActions } from '../../../store/slices/pokemon.slice';
import PaginationComponent from '../../../components/pagination/PaginationComponent';
import GrowthRatesComponent from '../../../components/pokemons/growth-rates/GrowthRatesComponent';

const GrowthRatesPage: FC = () => {
    const pages = useAppSelector(store => store.pokemonSlice.growthRatesPages);
    const dispatch = useAppDispatch();
    const [params] = useSearchParams({
        page: '1',
    });
    const pageParam = params.get('page');
    const page = pageParam ? +pageParam : 1;

    useEffect(() => {
        dispatch(pokemonActions.getAllGrowthRates((page - 1) * 20));
    }, [params]);

    return (
        <div className={css.main}>
            <div>
                <h1>Growth Rates Page</h1>
                <GrowthRatesComponent />
            </div>
            <PaginationComponent pages={pages} />
        </div>
    );
};

export default GrowthRatesPage;