import React, {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Progress, Articles, Tools} from './topBar';
import {wp, hp, color} from 'utils';
import {useSelector} from 'react-redux';

const YourBaby = () => {
  const darkMode = useSelector(state => state.themeReducer.theme);
  const [activeTab, setActiveTab] = useState(2);
  const dataTopbar = ['Progress', 'Articles', 'Tools'];

  const selectedContent = index => {
    switch (index) {
      case 0:
        return <Progress />;
      case 1:
        return <Articles />;
      case 2:
        return <Tools />;
      default:
        break;
    }
  };

  return (
    <SafeAreaView style={styles.container(darkMode)}>
      <View style={styles.topBar}>
        {dataTopbar.map((e, i) => (
          <TouchableOpacity
            style={styles.topBarItem(activeTab, i, darkMode)}
            key={i}
            onPress={() => setActiveTab(i)}>
            <Text style={(styles.topBarText(darkMode))}>{e}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.content}>{selectedContent(activeTab)}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: darkMode => ({
    backgroundColor: darkMode === 'on' ? color.dark : color.light,
    flex: 1,
  }),
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  topBarItem: (activeTab, i, darkMode) => ({
    width: wp(33),
    alignItems: 'center',
    borderBottomWidth: activeTab === i ? wp(0.5) : null,
    borderBottomColor:
      activeTab === i ? (darkMode === 'on' ? color.light : color.dark) : null,
    paddingVertical: hp(2),
  }),
  topBarText: darkMode => ({
    fontSize: wp(4),
    color: darkMode === 'on' ? color.light : color.dark,
  }),
  content: {
    padding: wp(5),
  },
});

export default YourBaby;
