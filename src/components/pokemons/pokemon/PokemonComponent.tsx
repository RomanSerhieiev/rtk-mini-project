import React, { FC } from 'react';
import css from './PokemonComponent.module.css';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useNavigate } from 'react-router-dom';
import { Button } from 'reactstrap';
import { pokemonActions } from '../../../store/slices/pokemon.slice';

const PokemonComponent: FC = () => {
    const pokemon = useAppSelector(state => state.pokemonSlice.pokemon);
    const favoritePokemons = useAppSelector(state => state.pokemonSlice.favoritePokemons);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const navigateHandler = (url: string) => {
        const id = url.split('/');
        navigate(`/pokemon-form/${id[id.length - 2]}`);
    };

    const isFavorite = favoritePokemons.some(favPokemon => favPokemon.id === pokemon?.id);

    const handleFavoriteToggle = () => {
        if (isFavorite) {
            pokemon && dispatch(pokemonActions.remove({id: pokemon.id}));
        } else {
            pokemon && dispatch(pokemonActions.add({id: pokemon.id, name: pokemon.name, img: pokemon.sprites.other.home.front_default}));
        }
    };

    return (
        pokemon
            ? <div className={css.main}>
                <h3>
                    {pokemon.name} {}
                    <Button color={'warning'} onClick={handleFavoriteToggle}>
                        {isFavorite ? 'Remove from favorite' : 'Add to favorite'}
                    </Button>
                </h3>
                <div>
                    <img src={pokemon.sprites.other.home.front_default} alt={pokemon.name} />
                    <div>
                        <div>
                            <h4>Abilities</h4>
                            {pokemon.abilities.map((ability, i) =>
                                <div key={i}>
                                    <h5>{ability.ability.name}</h5>
                                    <p>Slot: {ability.slot}</p>
                                    <p>{ability.is_hidden ? 'Hidden' : 'Not hidden'}</p>
                                </div>
                            )}
                        </div>
                        <div>
                            <h4>Stats</h4>
                            {pokemon.stats.map((stat, i) =>
                                <p key={i}>{stat.stat.name}: {stat.base_stat} ({stat.effort})</p>
                            )}
                        </div>
                        <div>
                            <h4>Types</h4>
                            {pokemon.types.map((type, i) =>
                                <p key={i}>{type.slot}. {type.type.name}</p>
                            )}
                            <h4>Forms</h4>
                            {pokemon.forms.map((form, i) =>
                                <Button key={i} color={'warning'} onClick={() => navigateHandler(form.url)}>
                                    {form.name}
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            : <h1 className={css.h1}>Not found</h1>
    );
};

export default PokemonComponent;