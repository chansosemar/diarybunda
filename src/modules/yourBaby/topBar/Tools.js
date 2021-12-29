import React, {useState, useCallback} from 'react';
import {RefreshControl, FlatList} from 'react-native';
import {Card} from 'components';
import {hp} from 'utils';
const Tools = () => {
  const [todayChart, setTodayChart] = useState(Math.random() * 100);
  const [refreshing, setRefreshing] = useState(false);
  const listData = ['weight', 'mood', 'update', 'appoinment'];

  const onRefresh = useCallback(() => {
    setTodayChart(Math.random() * 100);
    setRefreshing(true);
    setRefreshing(false);
  }, []);

  const ItemView = ({item}) => {
    return (
      <>
        <Card type={item} todayChart={item === 'weight' ? todayChart : null} />
      </>
    );
  };

  return (
    <>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={listData}
        keyExtractor={(item, index) => index.toString()}
        enableEmptySections={true}
        renderItem={ItemView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        style={{height: hp(70)}}
      />
    </>
  );
};

export default Tools;
