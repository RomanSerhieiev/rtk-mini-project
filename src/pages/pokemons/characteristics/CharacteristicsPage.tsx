import React, { FC, useEffect } from 'react';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useSearchParams } from 'react-router-dom';
import { pokemonActions } from '../../../store/slices/pokemon.slice';
import css from '../../../styles/ItemsPage.module.css';
import PaginationComponent from '../../../components/pagination/PaginationComponent';
import CharacteristicsComponent from '../../../components/pokemons/characteristics/CharacteristicsComponent';

const CharacteristicsPage: FC = () => {
    const characteristics = useAppSelector(store => store.pokemonSlice.characteristics);
    const dispatch = useAppDispatch();
    const [params] = useSearchParams({
        page: '1',
    });
    const pageParam = params.get('page');
    const page = pageParam ? +pageParam : 1;

    const pages = characteristics
        ? characteristics.count % 20 === 0
            ? characteristics.count / 20
            : Math.floor(characteristics.count / 20) + 1
        : 1;

    useEffect(() => {
        dispatch(pokemonActions.getAllCharacteristics((page - 1) * 20));
    }, [params]);

    return (
        <div className={css.main}>
            <div>
                <h1>Characteristics Page</h1>
                <CharacteristicsComponent />
            </div>
            <PaginationComponent pages={pages} />
        </div>
    );
};

export default CharacteristicsPage;