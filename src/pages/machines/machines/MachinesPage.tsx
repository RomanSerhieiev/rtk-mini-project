import React, { FC, useEffect } from 'react';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useSearchParams } from 'react-router-dom';
import { machineActions } from '../../../store/slices/machine.slice';
import css from '../../../styles/ItemsPage.module.css';
import PaginationComponent from '../../../components/pagination/PaginationComponent';
import MachinesComponent from '../../../components/machines/machines/MachinesComponent';

const MachinesPage: FC = () => {
    const machines = useAppSelector(store => store.machineSlice.machines);
    const dispatch = useAppDispatch();
    const [params] = useSearchParams({
        page: '1',
    });
    const pageParam = params.get('page');
    const page = pageParam ? +pageParam : 1;

    const pages = machines
        ? machines.count % 20 === 0
            ? machines.count / 20
            : Math.floor(machines.count / 20) + 1
        : 1;

    useEffect(() => {
        dispatch(machineActions.getAll((page - 1) * 20));
    }, [params]);

    return (
        <div className={css.main}>
            <div>
                <h1>Machines Page</h1>
                <MachinesComponent />
            </div>
            <PaginationComponent pages={pages} />
        </div>
    );
};

export default MachinesPage;