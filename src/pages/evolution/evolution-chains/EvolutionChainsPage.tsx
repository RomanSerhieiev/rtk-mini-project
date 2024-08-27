import React, { FC, useEffect } from 'react';
import css from '../../../styles/ItemsPage.module.css';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useSearchParams } from 'react-router-dom';
import { evolutionActions } from '../../../store/slices/evolution.slice';
import PaginationComponent from '../../../components/pagination/PaginationComponent';
import EvolutionChainsComponent from '../../../components/evolution/evolution-chains/EvolutionChainsComponent';

const EvolutionChainsPage: FC = () => {
    const chainsPages = useAppSelector(store => store.evolutionSlice.chainsPages);
    const dispatch = useAppDispatch();
    const [params] = useSearchParams({
        page: '1',
    });
    const pageParam = params.get('page');
    const page = pageParam ? +pageParam : 1;

    useEffect(() => {
        dispatch(evolutionActions.getAllChains((page - 1) * 20));
    }, [params]);

    return (
        <div className={css.main}>
            <div>
                <h1>Evolution Chains Page</h1>
                <EvolutionChainsComponent />
            </div>
            <PaginationComponent pages={chainsPages} />
        </div>
    );
};

export default EvolutionChainsPage;