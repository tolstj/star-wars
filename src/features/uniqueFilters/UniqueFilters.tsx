import React, { useEffect } from 'react';
import { InputNumber, Select, Typography } from 'antd';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectEntityTypes } from '../entitySelect/entitySelectSlice';
import { initFilters, selectUniqueFilters, typeInputChanged, typeSelectAdded, typeSelectRemoved } from './uniqueFiltersSlice';
import { UniqueFilterType } from '../../interfaces/UniqueFilter';

const { Title } = Typography;

export function UniqueFilters(): JSX.Element {
    const entityTypes = useAppSelector(selectEntityTypes);
    const uniqueFilters = useAppSelector(selectUniqueFilters);
    const dispatch = useAppDispatch();

    const onChange = (field: string, newValue: string | number) => {
        dispatch(typeInputChanged(
            {
                field,
                value: Number(newValue),
            }
        ));
    }

    const onSelect = (field: string, filterValue: any) => {
        dispatch(typeSelectAdded(
            {
                field,
                value: filterValue,
            }
        ))
    }

    const onDeselect = (field: string, filterValue: any) => {
        dispatch(typeSelectRemoved(
            {
                field,
                value: filterValue,
            }
        ))
    }

    useEffect(() => {
        if (entityTypes.length === 1) {
            dispatch(initFilters(entityTypes[0]));
        } else {
            dispatch(initFilters(null));
        }
    }, [dispatch, entityTypes]);

    return (
        <div>
            {// @ts-ignore
            uniqueFilters.map((uniqueFilter) => {
                if (uniqueFilter.type === UniqueFilterType.Input) {
                    return (
                        <div key={uniqueFilter.field}>
                            <Title level={5}>{uniqueFilter.title}</Title>
                            <InputNumber
                                min={0}
                                value={uniqueFilter.value}
                                onChange={(newValue) => onChange(uniqueFilter.field, newValue)}
                            />
                        </div>
                    );
                } else if (uniqueFilter.type === UniqueFilterType.Select) {
                    return (
                        <div key={uniqueFilter.field}>
                            <Title level={5}>{uniqueFilter.title}</Title>
                            <Select
                                mode="multiple"
                                options={uniqueFilter.options!.map((option: any) => ({
                                    value: option
                                }))}
                                value={uniqueFilter.value}
                                onSelect={(filterValue) => onSelect(uniqueFilter.field, filterValue)}
                                onDeselect={(filterValue) => onDeselect(uniqueFilter.field, filterValue)}
                                showArrow
                            />
                        </div>
                    );
                } else {
                    return 'Unknown type of filter';
                }
            })}
        </div>
    );
}
