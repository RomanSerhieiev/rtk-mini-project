import React, { FC, useEffect } from 'react';
import css from '../../../styles/ItemsPage.module.css';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useSearchParams } from 'react-router-dom';
import { moveActions } from '../../../store/slices/move.slice';
import PaginationComponent from '../../../components/pagination/PaginationComponent';
import MoveDamageClassesComponent from '../../../components/moves/move-damage-classes/MoveDamageClassesComponent';

const MoveDamageClassesPage: FC = () => {
    const pages = useAppSelector(store => store.moveSlice.damageClassesPages);
    const dispatch = useAppDispatch();
    const [params] = useSearchParams({
        page: '1',
    });
    const pageParam = params.get('page');
    const page = pageParam ? +pageParam : 1;

    useEffect(() => {
        dispatch(moveActions.getAllDamageClasses((page - 1) * 20));
    }, [params]);

    return (
        <div className={css.main}>
            <div>
                <h1>Move Damage Classes Page</h1>
                <MoveDamageClassesComponent />
            </div>
            <PaginationComponent pages={pages} />
        </div>
    );
};

export default MoveDamageClassesPage;