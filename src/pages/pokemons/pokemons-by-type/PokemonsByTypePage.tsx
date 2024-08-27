import React, { FC } from 'react';
import css from '../../../styles/ItemsPage.module.css';
import { useAppSelector } from '../../../hooks/useAppSelector';
import PaginationComponent from '../../../components/pagination/PaginationComponent';
import PokemonsByTypeComponent from '../../../components/pokemons/pokemons-by-type/PokemonsByTypeComponent';

const PokemonsByTypePage: FC = () => {
    const pages = useAppSelector(store => store.pokemonSlice.pokemonsByTypePages);

    return (
        <div className={css.main}>
            <div>
                <h1>Pokemons By Type Page</h1>
                <PokemonsByTypeComponent />
            </div>
            <PaginationComponent pages={pages} />
        </div>
    );
};

export default PokemonsByTypePage;