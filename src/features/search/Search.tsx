import React from 'react';
import { Input } from 'antd';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { changed, selectSearch } from './searchSlice';

export function Search(): JSX.Element {
    const search = useAppSelector(selectSearch);
    const dispatch = useAppDispatch();

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changed(event.target.value));
    }

    return (
        <Input
            value={search}
            onChange={onChange}
            allowClear
            placeholder="Search"
        />
    );
}
