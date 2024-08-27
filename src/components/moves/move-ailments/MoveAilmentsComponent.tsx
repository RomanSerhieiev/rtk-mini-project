import React, { FC } from 'react';
import css from '../../../styles/ItemsComponent.module.css';
import { useAppSelector } from '../../../hooks/useAppSelector';
import MoveAilmentCardComponent from '../move-ailment-card/MoveAilmentCardComponent';

const MoveAilmentsComponent: FC = () => {
    const ailments = useAppSelector(store => store.moveSlice.ailments);

    return (
        <div className={css.main}>
            {ailments && ailments.results.map((ailment, i) => <MoveAilmentCardComponent key={i} name={ailment.name} />)}
        </div>
    );
};

export default MoveAilmentsComponent;