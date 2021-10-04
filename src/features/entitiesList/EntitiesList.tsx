import React, { useEffect } from 'react';
import { List } from 'antd';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { LoadingStatus, selectError, selectLoadingStatus } from './entitiesListSlice';
import { fetchEntities } from './fetch';
import { selectFilteredEntities } from './selectFilteredEntities';

export function EntitiesList(): JSX.Element {
    const loadingStatus = useAppSelector(selectLoadingStatus);
    const error = useAppSelector(selectError);
    const filteredEntitiesList = useAppSelector(selectFilteredEntities);
    const dispatch = useAppDispatch();

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
                    dataSource={filteredEntitiesList}
                    renderItem={entity => (
                        <List.Item>
                            {entity.name}
                        </List.Item>
                    )}
                />
            )}
            {loadingStatus === LoadingStatus.failed && error}
        </div>
    );
}
