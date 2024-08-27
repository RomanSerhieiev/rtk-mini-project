import React, { FC } from 'react';
import css from '../../../styles/ItemsComponent.module.css';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useSearchParams } from 'react-router-dom';
import PokemonByTypeCardComponent from '../pokemon-by-type-card/PokemonByTypeCardComponent';

const PokemonsByTypeComponent: FC = () => {
    const pokemons = useAppSelector(store => store.pokemonSlice.pokemonsByType);
    const [params] = useSearchParams({
        page: '1',
    });
    const pageParam = params.get('page');
    const page = pageParam ? +pageParam : 1;

    const pokemonsByType = pokemons?.slice(page * 20 - 20, page * 20)

    console.log(pokemons);

    return (
        <div className={css.main}>
            {pokemonsByType?.map((pokemonByType, i) => <PokemonByTypeCardComponent key={i} url={pokemonByType.url} name={pokemonByType.name} />)}
        </div>
    );
};

export default PokemonsByTypeComponent;