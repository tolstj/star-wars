import React from 'react';
import { Select, Typography } from 'antd';
import { EntityType } from '../../interfaces/Entity';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { added, removed, selectEntityTypes } from './entitySelectSlice';

const { Title } = Typography;

const options = [
    { value: EntityType.Character },
    { value: EntityType.Planet },
    { value: EntityType.Starship },
];

export function EntitySelect(): JSX.Element {
    const entityTypes = useAppSelector(selectEntityTypes);
    const dispatch = useAppDispatch();

    const onSelect = (entityType: EntityType) => {
        dispatch(added(entityType));
    };

    const onDeselect = (entityType: EntityType) => {
        dispatch(removed(entityType));
    };

    return (
        <>
            <Title level={5}>Select entities</Title>
            <Select
                mode="multiple"
                options={options}
                value={entityTypes}
                onSelect={onSelect}
                onDeselect={onDeselect}
                showArrow
            />
        </>
    );
}
