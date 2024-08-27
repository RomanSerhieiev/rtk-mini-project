import React, { FC, useEffect } from 'react';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useParams } from 'react-router-dom';
import { pokemonActions } from '../../../store/slices/pokemon.slice';
import PokemonFormComponent from '../../../components/pokemons/pokemon-form/PokemonFormComponent';

const PokemonFormPage: FC = () => {
    const dispatch = useAppDispatch();
    const {id = '1'} = useParams();

    useEffect(() => {
        dispatch(pokemonActions.getFormById(+id));
    }, [id]);

    return (
        <div>
            <PokemonFormComponent />
        </div>
    );
};

export default PokemonFormPage;