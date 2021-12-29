import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {hp, color} from 'utils';
import {useSelector, useDispatch} from 'react-redux';

const AskMother = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector(state => state.themeReducer.theme);
  const darkModeOptions = [
    {title: 'Auto', onPress: () => dispatch({type: 'auto'})},
    {title: 'Dark', onPress: () => dispatch({type: 'dark'})},
    {title: 'Light', onPress: () => dispatch({type: 'light'})},
  ];
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: darkMode === 'on' ? color.dark : color.light,
      }}>
      <Text style={{color: darkMode === 'on' && '#ffffff'}}>DarkMode : </Text>
      {darkModeOptions.map((e, i) => (
        <TouchableOpacity
          onPress={e.onPress}
          key={i}
          style={{marginVertical: hp(1)}}>
          <Text style={{color: 'blue'}}>{e.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default AskMother;
