import React, { FC } from 'react';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useSearchParams } from 'react-router-dom';
import css from '../../../styles/ItemsComponent.module.css';
import PokemonByAbilityCardComponent from '../pokemon-by-ability-card/PokemonByAbilityCardComponent';

const PokemonsByAbilityComponent: FC = () => {
    const pokemons = useAppSelector(store => store.pokemonSlice.pokemonsByAbility);
    const [params] = useSearchParams({
        page: '1',
    });
    const pageParam = params.get('page');
    const page = pageParam ? +pageParam : 1;

    const pokemonsByAbility = pokemons?.slice(page * 20 - 20, page * 20);

    return (
        <div className={css.main}>
            {pokemonsByAbility?.map((pokemonsByAbility, i) => <PokemonByAbilityCardComponent key={i} url={pokemonsByAbility.url} name={pokemonsByAbility.name} />)}
        </div>
    );
};

export default PokemonsByAbilityComponent;