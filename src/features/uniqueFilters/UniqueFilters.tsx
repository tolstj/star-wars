import React, { useEffect } from 'react';
import { InputNumber, Select } from 'antd';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectEntities } from '../entitySelect/entitySelectSlice';
import { initFilters, selectUniqueFilters, typeInputChanged, typeSelectAdded, typeSelectRemoved } from './uniqueFiltersSlice';
import { UniqueFilterType } from '../../interfaces/UniqueFilter';

export function UniqueFilters(): JSX.Element {
    const entities = useAppSelector(selectEntities);
    const uniqueFilters = useAppSelector(selectUniqueFilters);
    const dispatch = useAppDispatch();

    const onChange = (id: string, newValue: string | number) => {
        dispatch(typeInputChanged(
            {
                id,
                value: Number(newValue),
            }
        ));
    }

    const onSelect = (id: string, filterValue: any) => {
        dispatch(typeSelectAdded(
            {
                id,
                value: filterValue,
            }
        ))
    }

    const onDeselect = (id: string, filterValue: any) => {
        dispatch(typeSelectRemoved(
            {
                id,
                value: filterValue,
            }
        ))
    }

    useEffect(() => {
        if (entities.length === 1) {
            dispatch(initFilters(entities[0]));
        } else {
            dispatch(initFilters(null));
        }
    }, [dispatch, entities]);

    return (
        <div>
            {// @ts-ignore
            uniqueFilters.map((uniqueFilter) => {
                if (uniqueFilter.type === UniqueFilterType.Input) {
                    return (
                        <InputNumber
                            min={0}
                            value={uniqueFilter.value}
                            onChange={(newValue) => onChange(uniqueFilter.id, newValue)}
                            key={uniqueFilter.id}
                        />
                    );
                } else if (uniqueFilter.type === UniqueFilterType.Select) {
                    return (
                        <Select
                            mode="multiple"
                            options={uniqueFilter.options!.map((option: any) => ({
                                value: option
                            }))}
                            value={uniqueFilter.value}
                            onSelect={(filterValue) => onSelect(uniqueFilter.id, filterValue)}
                            onDeselect={(filterValue) => onDeselect(uniqueFilter.id, filterValue)}
                            key={uniqueFilter.id}
                        />
                    );
                } else {
                    return 'Unknown type of filter';
                }
            })}
        </div>
    );
}
