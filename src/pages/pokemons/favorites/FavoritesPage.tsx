import React, { FC } from 'react';
import css from '../../../styles/ItemsPage.module.css';
import { useAppSelector } from '../../../hooks/useAppSelector';
import PaginationComponent from '../../../components/pagination/PaginationComponent';
import FavoritesComponent from '../../../components/pokemons/favorites/FavoritesComponent';

const FavoritesPage: FC = () => {
    const pages = useAppSelector(store => store.pokemonSlice.favoritePokemonsPages);

    return (
        <div className={css.main}>
            <div>
                <h1>Favorite Pokemons Page</h1>
                <FavoritesComponent />
            </div>
            <PaginationComponent pages={pages} />
        </div>
    );
};

export default FavoritesPage;