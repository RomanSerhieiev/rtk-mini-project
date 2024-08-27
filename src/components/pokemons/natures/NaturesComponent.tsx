import React, { FC } from 'react';
import css from '../../../styles/ItemsComponent.module.css';
import { useAppSelector } from '../../../hooks/useAppSelector';
import NatureCardComponent from '../nature-card/NatureCardComponent';

const NaturesComponent: FC = () => {
    const natures = useAppSelector(store => store.pokemonSlice.natures);

    return (
        <div className={css.main}>
            {natures && natures.results.map((nature, i) => <NatureCardComponent key={i} name={nature.name} />)}
        </div>
    );
};

export default NaturesComponent;