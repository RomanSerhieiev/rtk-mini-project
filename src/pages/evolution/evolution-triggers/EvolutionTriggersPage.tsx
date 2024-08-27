import React, { FC, useEffect } from 'react';
import css from '../../../styles/ItemsPage.module.css';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useSearchParams } from 'react-router-dom';
import { evolutionActions } from '../../../store/slices/evolution.slice';
import PaginationComponent from '../../../components/pagination/PaginationComponent';
import EvolutionTriggersComponent from '../../../components/evolution/evolution-triggers/EvolutionTriggersComponent';

const EvolutionTriggersPage: FC = () => {
    const triggersPages = useAppSelector(store => store.evolutionSlice.triggersPages);
    const dispatch = useAppDispatch();
    const [params] = useSearchParams({
        page: '1',
    });
    const pageParam = params.get('page');
    const page = pageParam ? +pageParam : 1;

    useEffect(() => {
        dispatch(evolutionActions.getAllTriggers((page - 1) * 20));
    }, [params]);

    return (
        <div className={css.main}>
            <div>
                <h1>Evolution Triggers Page</h1>
                <EvolutionTriggersComponent />
            </div>
            <PaginationComponent pages={triggersPages} />
        </div>
    );
};

export default EvolutionTriggersPage;