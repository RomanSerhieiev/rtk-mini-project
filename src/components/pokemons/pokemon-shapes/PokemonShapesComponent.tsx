import React, { FC } from 'react';
import css from '../../../styles/ItemsComponent.module.css';
import { useAppSelector } from '../../../hooks/useAppSelector';
import PokemonShapeCardComponent from '../pokemon-shape-card/PokemonShapeCardComponent';

const PokemonShapesComponent: FC = () => {
    const shapes = useAppSelector(store => store.pokemonSlice.shapes);

    return (
        <div className={css.main}>
            {shapes && shapes.results.map((shape, i) => <PokemonShapeCardComponent key={i} name={shape.name} />)}
        </div>
    );
};

export default PokemonShapesComponent;