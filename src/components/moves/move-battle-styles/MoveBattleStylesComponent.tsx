import React, { FC } from 'react';
import css from '../../../styles/ItemsComponent.module.css';
import { useAppSelector } from '../../../hooks/useAppSelector';
import MoveBattleStyleCardComponent from '../move-battle-style-card/MoveBattleStyleCardComponent';

const MoveBattleStylesComponent: FC = () => {
    const battleStyles = useAppSelector(store => store.moveSlice.battleStyles);

    return (
        <div className={css.main}>
            {battleStyles && battleStyles.results.map((battleStyle, i) => <MoveBattleStyleCardComponent key={i} name={battleStyle.name} />)}
        </div>
    );
};

export default MoveBattleStylesComponent;