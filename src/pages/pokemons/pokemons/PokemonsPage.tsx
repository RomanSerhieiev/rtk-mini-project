import React, { FC, useEffect } from 'react';
import css from '../../../styles/ItemsPage.module.css';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { pokemonActions } from '../../../store/slices/pokemon.slice';
import PaginationComponent from '../../../components/pagination/PaginationComponent';
import PokemonsComponent from '../../../components/pokemons/pokemons/PokemonsComponent';
import { useForm } from 'react-hook-form';
import { Type } from '../../../models/pokemon/Type.model';
import { Ability } from '../../../models/pokemon/Ability.model';
import { Button, Form, Label } from 'reactstrap';

const PokemonsPage: FC = () => {
    const pages = useAppSelector(store => store.pokemonSlice.pokemonsPages);
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
        navigate(`/pokemon/${search.name}`);
    };

    const searchBytype = async (search: { type: string }) => {
        dispatch(pokemonActions.getTypeById(search.type))
            .then((value) => {
                if (value.payload && (value.payload as { status: number }).status === 404) {
                    navigate(`/nothing`);
                } else {
                    const payload = value.payload as Type;
                    const pokemons = payload.pokemon.map((pokemon) => pokemon.pokemon);
                    dispatch(pokemonActions.pokemonsByType(pokemons));
                    navigate(`/pokemon-by-type`);
                }
            })
            .catch(() => {
                navigate(`/nothing`);
            });
    };

    const searchByAbility = async (search: { ability: string }) => {
        dispatch(pokemonActions.getAbilityById(search.ability))
            .then((value) => {
                if (value.payload && (value.payload as { status: number }).status === 404) {
                    navigate(`/nothing`);
                } else {
                    const payload = value.payload as Ability;
                    const pokemons = payload.pokemon.map((pokemon) => pokemon.pokemon);
                    dispatch(pokemonActions.pokemonsByAbility(pokemons));
                    navigate(`/pokemon-by-ability`);
                }
            })
            .catch(() => {
                navigate(`/nothing`);
            });
    };

    return (
        <div className={css.main}>
            <div className={css.container}>
                <h1>Pokemons Page</h1>
                <Form className={css.form} onSubmit={handleSubmit(searchByName)}>
                    <Label><input type="text" {...register('name')} placeholder={'By name'} /></Label>
                    <Button>Search</Button>
                </Form>
                <Form className={css.form} onSubmit={handleSubmit(searchBytype)}>
                    <Label><input type="text" {...register('type')} placeholder={'By type'} /></Label>
                    <Button>Search</Button>
                </Form>
                <Form className={css.form} onSubmit={handleSubmit(searchByAbility)}>
                    <Label><input type="text" {...register('ability')} placeholder={'By ability'} /></Label>
                    <Button>Search</Button>
                </Form>
                <PokemonsComponent />
            </div>
            <PaginationComponent pages={pages} />
        </div>
    );
};

export default PokemonsPage;