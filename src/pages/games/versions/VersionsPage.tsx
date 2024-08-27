import React, { FC, useEffect } from 'react';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useSearchParams } from 'react-router-dom';
import { gameActions } from '../../../store/slices/game.slice';
import css from '../../../styles/ItemsPage.module.css';
import PaginationComponent from '../../../components/pagination/PaginationComponent';
import VersionsComponent from '../../../components/games/versions/VersionsComponent';

const VersionsPage: FC = () => {
    const versionsPages = useAppSelector(store => store.gameSlice.versionsPages);
    const dispatch = useAppDispatch();
    const [params] = useSearchParams({
        page: '1',
    });
    const pageParam = params.get('page');
    const page = pageParam ? +pageParam : 1;

    useEffect(() => {
        dispatch(gameActions.getAllVersions((page - 1) * 20));
    }, [params]);

    return (
        <div className={css.main}>
            <div>
                <h1>Versions Page</h1>
                <VersionsComponent />
            </div>
            <PaginationComponent pages={versionsPages} />
        </div>
    );
};

export default VersionsPage;