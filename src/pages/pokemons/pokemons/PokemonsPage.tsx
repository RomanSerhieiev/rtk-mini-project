import React, { FC, useEffect } from 'react';
import css from '../../../styles/ItemsPage.module.css';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { pokemonActions } from '../../../store/slices/pokemon.slice';
import PaginationComponent from '../../../components/pagination/PaginationComponent';
import PokemonsComponent from '../../../components/pokemons/pokemons/PokemonsComponent';
import { useForm } from 'react-hook-form';

const PokemonsPage: FC = () => {
    const pages = useAppSelector(store => store.pokemonSlice.pokemonsPages);
    const pokemonType = useAppSelector(store => store.pokemonSlice.type);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [params] = useSearchParams({
        page: '1',
    });
    const pageParam = params.get('page');
    const page = pageParam ? +pageParam : 1;
    const {
        handleSubmit,
        register,
    } = useForm<{
        name: string,
        type: string,
        ability: string,
    }>({
        mode: 'all',
    });

    useEffect(() => {
        dispatch(pokemonActions.getAll((page - 1) * 20));
    }, [params]);

    const searchByName = async (search: { name: string }) => {
        navigate(`/pokemon/${search.name}`)
    };

    const searchBytype = async (search: { type: string }) => {
        dispatch(pokemonActions.getTypeById(search.type)).then(value => {
            console.log(value.payload);
            // const pokemons = value.payload.pokemon.map(pokemon => pokemon.pokemon);
        })
        const pokemons = pokemonType && pokemonType?.pokemon.map(pokemon => pokemon.pokemon);
        console.log(pokemons);
        dispatch(pokemonActions.pokemons(pokemons))
        // navigate(`/pokemon-by-type`)
    };

    const searchByAbility = async (search: { name: string }) => {
        navigate(`/pokemon/${search.name}`)
    };

    return (
        <div className={css.main}>
            <div className={css.container}>
                <h1>Pokemons Page</h1>
                <form onSubmit={handleSubmit(searchByName)}>
                    <label>Search by name: <input type="text" {...register('name')} /></label>
                    <button>Search</button>
                </form>
                <form onSubmit={handleSubmit(searchBytype)}>
                    <label>Search by type: <input type="text" {...register('type')} /></label>
                    <button>Search</button>
                </form>
                <form onSubmit={handleSubmit(searchByAbility)}>
                    <label>Search by ability: <input type="text" {...register('ability')} /></label>
                    <button>Search</button>
                </form>
                <PokemonsComponent />
            </div>
            <PaginationComponent pages={pages} />
        </div>
    );
};

export default PokemonsPage;