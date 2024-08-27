import React, { FC } from 'react';
import css from '../../../styles/ItemsComponent.module.css';
import { useAppSelector } from '../../../hooks/useAppSelector';
import MoveLearnMethodCardComponent from '../move-learn-method-card/MoveLearnMethodCardComponent';

const MoveLearnMethodsComponent: FC = () => {
    const learnMethods = useAppSelector(store => store.moveSlice.learnMethods);

    return (
        <div className={css.main}>
            {learnMethods && learnMethods.results.map((learnMethod, i) => <MoveLearnMethodCardComponent key={i} name={learnMethod.name} />)}
        </div>
    );
};

export default MoveLearnMethodsComponent;