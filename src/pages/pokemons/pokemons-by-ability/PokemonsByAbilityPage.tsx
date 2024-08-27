import React, { FC } from 'react';
import css from '../../../styles/ItemsPage.module.css';
import { useAppSelector } from '../../../hooks/useAppSelector';
import PaginationComponent from '../../../components/pagination/PaginationComponent';
import PokemonsByAbilityComponent from '../../../components/pokemons/pokemons-by-ability/PokemonsByAbilityComponent';

const PokemonsByAbilityPage: FC = () => {
    const pages = useAppSelector(store => store.pokemonSlice.pokemonsByTypePages);

    return (
        <div className={css.main}>
            <div>
                <h1>Pokemons By Ability Page</h1>
                <PokemonsByAbilityComponent />
            </div>
            <PaginationComponent pages={pages} />
        </div>
    );
};

export default PokemonsByAbilityPage;