import React, { FC } from 'react';
import { APIResource } from '../../../models/common/APIResource.model';
import { useAppSelector } from '../../../hooks/useAppSelector';
import css from '../../../styles/ItemCardComponent.module.css';
import { Button, Card, CardHeader } from 'reactstrap';

const CharacteristicCardComponent: FC<APIResource> = ({url}) => {
    const {blue} = useAppSelector(store => store.themeSlice);
    const id = url.split('/')

    return (
        <Card className={css.main} color={blue ? 'primary' : 'success'}>
            <CardHeader>
                Characteristic #{id[id.length - 2]}
            </CardHeader>
            <Button className={css.button} color={'warning'}>
                Go
            </Button>
        </Card>
    );
};

export default CharacteristicCardComponent;