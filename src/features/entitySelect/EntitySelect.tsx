import React from 'react';
import { Select, Typography } from 'antd';
import { Entity } from '../../interfaces/Entity';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { added, removed, selectEntities } from './entitySelectSlice';

const { Title } = Typography;

const options = [
    { value: Entity.Character },
    { value: Entity.Planet },
    { value: Entity.Starship },
];

export function EntitySelect(): JSX.Element {
    const entities = useAppSelector(selectEntities);
    const dispatch = useAppDispatch();

    const onSelect = (entity: Entity) => {
        dispatch(added(entity));
    };

    const onDeselect = (entity: Entity) => {
        dispatch(removed(entity));
    };

    return (
        <>
            <Title level={5}>Select entities</Title>
            <Select
                mode="multiple"
                options={options}
                value={entities}
                onSelect={onSelect}
                onDeselect={onDeselect}
                showArrow
            />
        </>
    );
}
