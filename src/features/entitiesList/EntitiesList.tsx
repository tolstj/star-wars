import React, { useEffect } from 'react';
import { List } from 'antd';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { LoadingStatus, selectLoadingStatus } from './entitiesListSlice';
import { fetchEntities } from './fetch';
import { selectFilteredEntities } from './selectFilteredEntities';

export function EntitiesList(): JSX.Element {
    const loadingStatus = useAppSelector(selectLoadingStatus);
    const filteredEntitiesList = useAppSelector(selectFilteredEntities);
    const dispatch = useAppDispatch();

    const entityNames = filteredEntitiesList.map(({ name }) => name);

    useEffect(() => {
        if (loadingStatus === LoadingStatus.idle) {
            dispatch(fetchEntities());
        }
    }, [dispatch, loadingStatus]);

    return (
        <div>
            {loadingStatus === LoadingStatus.loading && 'loading...'}
            {loadingStatus === LoadingStatus.succeeded && (
                <List
                    bordered
                    dataSource={entityNames}
                    renderItem={item => (
                        <List.Item>
                            {item}
                        </List.Item>
                    )}
                />
            )}
        </div>
    );
}
