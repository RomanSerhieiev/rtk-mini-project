import React, { FC } from 'react';
import css from '../../../styles/ItemsComponent.module.css';
import { useAppSelector } from '../../../hooks/useAppSelector';
import BerryFlavorCardComponent from '../berry-flavor-card/BerryFlavorCardComponent';

const BerryFlavorsComponent: FC = () => {
    const flavors = useAppSelector(store => store.berrySlice.flavors);

    return (
        <div className={css.main}>
            {flavors && flavors.results.map((flavor, i) => <BerryFlavorCardComponent key={i} name={flavor.name} />)}
        </div>
    );
};

export default BerryFlavorsComponent;