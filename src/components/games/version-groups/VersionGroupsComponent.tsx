import React, { FC } from 'react';
import css from '../../../styles/ItemsComponent.module.css';
import { useAppSelector } from '../../../hooks/useAppSelector';
import VersionGroupCardComponent from '../version-group-card/VersionGroupCardComponent';

const VersionGroupsComponent: FC = () => {
    const versionGroups = useAppSelector(store => store.gameSlice.versionGroups);

    return (
        <div className={css.main}>
            {versionGroups && versionGroups.results.map((versionGroup, i) => <VersionGroupCardComponent key={i} name={versionGroup.name} />)}
        </div>
    );
};

export default VersionGroupsComponent;