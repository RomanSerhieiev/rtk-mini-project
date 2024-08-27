import React, { FC } from 'react';
import css from '../../../styles/ItemsComponent.module.css';
import { useAppSelector } from '../../../hooks/useAppSelector';
import EggGroupCardComponent from '../egg-group-card/EggGroupCardComponent';

const EggGroupsComponent: FC = () => {
    const eggGroups = useAppSelector(store => store.pokemonSlice.eggGroups);

    return (
        <div className={css.main}>
            {eggGroups && eggGroups.results.map((eggGroup, i) => <EggGroupCardComponent key={i} name={eggGroup.name} />)}
        </div>
    );
};

export default EggGroupsComponent;