import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {hp, wp, color} from 'utils';
import {useSelector} from 'react-redux';
const Header = ({label}) => {
  const darkMode = useSelector(state => state.themeReducer.theme);
  return (
    <View style={styles.container(darkMode)}>
      <View style={{flexDirection: 'row'}}>
        <Icon
          name="user"
          size={wp(6)}
          color={color.muted}
          style={styles.iconStyle}
        />
        <Icon
          name="heart"
          size={wp(6)}
          color={color.muted}
          style={styles.iconStyle}
        />
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Icon
          name="sun"
          size={wp(6)}
          color={color.yellow}
          style={styles.iconStyle}
        />
        <Text
          style={{
            fontWeight: 'bold',
            color: darkMode === 'on' ? color.light : color.dark,
          }}>
          {label}
        </Text>
        <Icon
          name="chevron-down"
          size={wp(3)}
          color={color.muted}
          style={styles.iconStyle}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconStyle: {paddingHorizontal: wp(2)},
  container: darkMode => ({
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: wp(5),
    backgroundColor: darkMode === 'on' ? color.dark : color.light,
  }),
});

export default Header;
