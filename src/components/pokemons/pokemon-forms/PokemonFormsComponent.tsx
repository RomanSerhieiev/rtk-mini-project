import React, { FC } from 'react';
import css from '../../../styles/ItemsComponent.module.css';
import { useAppSelector } from '../../../hooks/useAppSelector';
import PokemonFormCardComponent from '../pokemon-form-card/PokemonFormCardComponent';

const PokemonFormsComponent: FC = () => {
    const forms = useAppSelector(store => store.pokemonSlice.forms);

    return (
        <div className={css.main}>
            {forms && forms.results.map((form, i) => <PokemonFormCardComponent key={i} name={form.name} />)}
        </div>
    );
};

export default PokemonFormsComponent;