import React, { FC } from 'react';
import { useAppSelector } from '../../../hooks/useAppSelector';
import css from '../../../styles/ItemsComponent.module.css';
import MachineCardComponent from '../machine-card/MachineCardComponent';

const MachinesComponent: FC = () => {
    const machines = useAppSelector(store => store.machineSlice.machines);

    return (
        <div className={css.main}>
            {machines && machines.results.map((machine, i) => <MachineCardComponent key={i} url={machine.url} />)}
        </div>
    );
};

export default MachinesComponent;