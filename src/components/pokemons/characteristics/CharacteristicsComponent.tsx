import React, { FC } from 'react';
import css from '../../../styles/ItemsComponent.module.css';
import { useAppSelector } from '../../../hooks/useAppSelector';
import CharacteristicCardComponent from '../characteristic-card/CharacteristicCardComponent';

const CharacteristicsComponent: FC = () => {
    const characteristics = useAppSelector(store => store.pokemonSlice.characteristics);

    return (
        <div className={css.main}>
            {characteristics && characteristics.results.map((characteristic, i) => <CharacteristicCardComponent key={i} url={characteristic.url} />)}
        </div>
    );
};

export default CharacteristicsComponent;