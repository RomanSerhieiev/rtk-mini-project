import React, { FC } from 'react';
import css from '../../../styles/ItemsComponent.module.css';
import { useAppSelector } from '../../../hooks/useAppSelector';
import VersionCardComponent from '../version-card/VersionCardComponent';

const VersionsComponent: FC = () => {
    const versions = useAppSelector(store => store.gameSlice.versions);

    return (
        <div className={css.main}>
            {versions && versions.results.map((version, i) => <VersionCardComponent key={i} name={version.name} />)}
        </div>
    );
};

export default VersionsComponent;