import React, { FC } from 'react';
import css from '../../../styles/ItemsComponent.module.css';
import { useAppSelector } from '../../../hooks/useAppSelector';
import MoveTargetCardComponent from '../move-target-card/MoveTargetCardComponent';

const MoveTargetsComponent: FC = () => {
    const targets = useAppSelector(store => store.moveSlice.targets);

    return (
        <div className={css.main}>
            {targets && targets.results.map((target, i) => <MoveTargetCardComponent key={i} name={target.name} />)}
        </div>
    );
};

export default MoveTargetsComponent;