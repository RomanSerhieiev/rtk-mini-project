import React, { FC, useEffect } from 'react';
import css from '../../../styles/ItemsPage.module.css';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useSearchParams } from 'react-router-dom';
import { gameActions } from '../../../store/slices/game.slice';
import PaginationComponent from '../../../components/pagination/PaginationComponent';
import VersionGroupsComponent from '../../../components/games/version-groups/VersionGroupsComponent';

const VersionGroupsPage: FC = () => {
    const versionGroupsPages = useAppSelector(store => store.gameSlice.versionGroupsPages);
    const dispatch = useAppDispatch();
    const [params] = useSearchParams({
        page: '1',
    });
    const pageParam = params.get('page');
    const page = pageParam ? +pageParam : 1;

    useEffect(() => {
        dispatch(gameActions.getAllVersionGroups((page - 1) * 20));
    }, [params]);

    return (
        <div className={css.main}>
            <div>
                <h1>Version Groups Page</h1>
                <VersionGroupsComponent />
            </div>
            <PaginationComponent pages={versionGroupsPages} />
        </div>
    );
};

export default VersionGroupsPage;