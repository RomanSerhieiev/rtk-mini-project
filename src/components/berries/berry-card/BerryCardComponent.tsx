import React, { FC } from 'react';
import css from '../../../styles/ItemCardComponent.module.css';
import { Button, Card, CardHeader } from 'reactstrap';
import { NamedAPIResource } from '../../../models/common/NamedAPIResource.model';
import { useAppSelector } from '../../../hooks/useAppSelector';

const BerryCardComponent: FC<Partial<NamedAPIResource>> = ({name}) => {
    const blue = useAppSelector(store => store.themeSlice.blue);

    return (
        <Card className={css.main} color={blue ? 'primary' : 'success'}>
            <CardHeader>
                {name}
            </CardHeader>
            <Button className={css.button} color={'warning'}>
                Go
            </Button>
        </Card>
    );
};

export default BerryCardComponent;