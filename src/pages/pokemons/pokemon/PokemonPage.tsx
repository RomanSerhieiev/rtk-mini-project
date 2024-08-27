import React, { FC, useEffect } from 'react';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useParams } from 'react-router-dom';
import { pokemonActions } from '../../../store/slices/pokemon.slice';
import PokemonComponent from '../../../components/pokemons/pokemon/PokemonComponent';

const PokemonPage: FC = () => {
    const dispatch = useAppDispatch();
    const {id = '1'} = useParams();

    useEffect(() => {
        dispatch(pokemonActions.getById(id));
    }, [id]);

    return (
        <PokemonComponent />
    );
};

export default PokemonPage;