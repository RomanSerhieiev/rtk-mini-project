import React, { FC } from 'react';
import css from '../../../styles/ItemsComponent.module.css';
import { useAppSelector } from '../../../hooks/useAppSelector';
import GenderCardComponent from '../gender-card/GenderCardComponent';

const GendersComponent: FC = () => {
    const genders = useAppSelector(store => store.pokemonSlice.genders);

    return (
        <div className={css.main}>
            {genders && genders.results.map((gender, i) => <GenderCardComponent key={i} name={gender.name} />)}
        </div>
    );
};

export default GendersComponent;