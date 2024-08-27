import React, { FC } from 'react';
import css from '../../../styles/ItemsComponent.module.css';
import { useAppSelector } from '../../../hooks/useAppSelector';
import FavoriteCardComponent from '../favorite-card/FavoriteCardComponent';
import { useSearchParams } from 'react-router-dom';

const FavoritesComponent: FC = () => {
    const pokemons = useAppSelector(store => store.pokemonSlice.favoritePokemons);
    const [params] = useSearchParams({
        page: '1',
    });
    const pageParam = params.get('page');
    const page = pageParam ? +pageParam : 1;

    const favoritePokemons = pokemons.slice(page * 20 - 20, page * 20)

    return (
        <div className={css.main}>
            {favoritePokemons.map((favoritePokemon, i) => <FavoriteCardComponent
                key={i}
                img={favoritePokemon.img}
                id={favoritePokemon.id}
                name={favoritePokemon.name}
            />)}
        </div>
    );
};

export default FavoritesComponent;