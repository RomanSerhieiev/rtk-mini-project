import React, { FC } from 'react';
import css from '../../../styles/ItemsComponent.module.css';
import { useAppSelector } from '../../../hooks/useAppSelector';
import AbilityCardComponent from '../ability-card/AbilityCardComponent';

const AbilitiesComponent: FC = () => {
    const abilities = useAppSelector(store => store.pokemonSlice.abilities);

    return (
        <div className={css.main}>
            {abilities && abilities.results.map((ability, i) => <AbilityCardComponent key={i} name={ability.name} />)}
        </div>
    );
};

export default AbilitiesComponent;