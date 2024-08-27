import React, { FC } from 'react';
import { useAppSelector } from '../../../hooks/useAppSelector';
import css from '../../../styles/ItemsComponent.module.css';
import MoveCardComponent from '../move-card/MoveCardComponent';

const MovesComponent: FC = () => {
    const moves = useAppSelector(store => store.moveSlice.moves);

    return (
        <div className={css.main}>
            {moves && moves.results.map((move, i) => <MoveCardComponent key={i} name={move.name} />)}
        </div>
    );
};

export default MovesComponent;