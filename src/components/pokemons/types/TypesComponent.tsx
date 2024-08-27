import React, { FC } from 'react';
import css from '../../../styles/ItemsComponent.module.css';
import { useAppSelector } from '../../../hooks/useAppSelector';
import TypeCardComponent from '../type-card/TypeCardComponent';

const TypesComponent: FC = () => {
    const types = useAppSelector(store => store.pokemonSlice.types);

    return (
        <div className={css.main}>
            {types && types.results.map((type, i) => <TypeCardComponent key={i} name={type.name} />)}
        </div>
    );
};

export default TypesComponent;