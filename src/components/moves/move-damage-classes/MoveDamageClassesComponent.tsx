import React, { FC } from 'react';
import css from '../../../styles/ItemsComponent.module.css';
import { useAppSelector } from '../../../hooks/useAppSelector';
import MoveDamageClassCardComponent from '../move-damage-class-card/MoveDamageClassCardComponent';

const MoveDamageClassesComponent: FC = () => {
    const damageClasses = useAppSelector(store => store.moveSlice.damageClasses);

    return (
        <div className={css.main}>
            {damageClasses && damageClasses.results.map((damageClass, i) => <MoveDamageClassCardComponent key={i} name={damageClass.name} />)}
        </div>
    );
};

export default MoveDamageClassesComponent;