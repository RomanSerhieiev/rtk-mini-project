import React, { FC } from 'react';
import css from '../../../styles/ItemsComponent.module.css';
import { useAppSelector } from '../../../hooks/useAppSelector';
import PokedexCardComponent from '../pokedex-card/PokedexCardComponent';

const PokedexesComponent: FC = () => {
    const pokedexes = useAppSelector(store => store.gameSlice.pokedexes);

    return (
        <div className={css.main}>
            {pokedexes && pokedexes.results.map((pokedex, i) => <PokedexCardComponent key={i} name={pokedex.name} />)}
        </div>
    );
};

export default PokedexesComponent;