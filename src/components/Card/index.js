import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {wp, hp, color} from 'utils';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Emoji from 'react-native-emoji';
import {LineChart} from 'react-native-chart-kit';
import {ScrollView} from 'react-native-gesture-handler';

const Card = ({type, todayChart}) => {
  const selectedCard = cardType => {
    switch (cardType) {
      case 'weight':
        return color.green;
      case 'mood':
        return color.warning;
      case 'update':
        return color.primary;
      case 'appoinment':
        return color.blue;
      default:
        break;
    }
  };
  const selectedIcon = cardType => {
    switch (cardType) {
      case 'weight':
        return 'weight';
      case 'mood':
        return 'smile';
      case 'update':
        return 'thumbtack';
      case 'appoinment':
        return 'calendar-check';
      default:
        break;
    }
  };

  const dataEmoji = [
    {
      icon: 'smile',
      title: 'Joyful',
    },
    {
      icon: 'slightly_smiling_face',
      title: 'Happy',
    },
    {
      icon: 'neutral_face',
      title: 'Neutral',
    },
    {
      icon: 'tired_face',
      title: 'Stress',
    },
    {
      icon: 'cry',
      title: 'Sad',
    },
    {
      icon: 'face_with_thermometer',
      title: 'Sick',
    },
  ];

  const pickEmoji = x => {
    Alert.alert('Hello !', `You're feeling ${x}`, [
      {
        text: 'Bye !',
      },
      {text: 'OK'},
    ]);
  };

  const selectedContent = cardType => {
    switch (cardType) {
      case 'weight':
        return (
          <View>
            <LineChart
              data={{
                labels: [
                  'Fri',
                  'Sat',
                  'Sun',
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Today',
                ],
                datasets: [
                  {
                    data: [
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      todayChart,
                    ],
                  },
                ],
              }}
              width={wp(80)}
              height={220}
              withHorizontalLabels={false}
              withVerticalLines
              withHorizontalLines={false}
              transparent
              yAxisInterval={1}
              chartConfig={{
                decimalPlaces: 0,
                color: (opacity = 1) => `rgba(52, 48, 52, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(52, 48, 52, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: '6',
                  strokeWidth: '2',
                  stroke: color.green,
                },
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16,
                paddingRight: wp(3),
              }}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'baseline',
              }}>
              <View>
                <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
                  <Text style={{fontSize: wp(15)}}>
                    {Math.round(todayChart)}
                  </Text>
                  <Text style={{marginHorizontal: wp(2)}}>kg</Text>
                </View>
                <Text>Updated 2h ago</Text>
              </View>
              <View
                style={{
                  padding: wp(2),
                  backgroundColor: color.muted,
                  borderRadius: 20,
                }}>
                <Icon name="pencil-alt" size={wp(3)} color={color.light} />
              </View>
            </View>
          </View>
        );
      case 'mood':
        return (
          <View>
            <Text style={styles.contentTitle}>How are you feeling ?</Text>

            <View style={styles.containerEmoji}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {dataEmoji.map((e, i) => (
                  <TouchableOpacity
                    onPress={() => pickEmoji(e.title)}
                    key={i}
                    style={{marginHorizontal: wp(2)}}>
                    <View style={styles.contentEmoji}>
                      <Emoji name={e.icon} />
                    </View>
                    <Text style={{alignSelf: 'center'}}>{e.title}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          </View>
        );
      case 'update':
        return (
          <View style={styles.content}>
            <View style={{width: wp(60)}}>
              <TextInput placeholder="Add important notes here..." />
            </View>
            <Icon name="scroll" size={wp(10)} color={color.primary} />
          </View>
        );
      case 'appoinment':
        return (
          <View style={styles.content}>
            <View style={{width: wp(60)}}>
              <Text style={styles.contentTitle}>Fri, 8 Jan - 09:00</Text>
              <Text>Antenatal Visit with Dr. Lukman Adi Saputra</Text>
            </View>
            <Icon name="chevron-right" size={wp(3)} color={color.dark} />
          </View>
        );
      default:
        break;
    }
  };
  return (
    <View style={styles.container(type, selectedCard)}>
      <View style={styles.containerHeader}>
        <View style={styles.containerTitle}>
          <Icon name={selectedIcon(type)} size={wp(6)} color={color.dark} />
          <Text style={styles.textTitle}>{type.toUpperCase()}</Text>
        </View>
        <View style={styles.containerTitle}>
          <Text style={[styles.textTitle, {color: selectedCard(type)}]}>
            {type === 'appoinment' ? 'See All' : 'See History'}
          </Text>
          <Icon name="chevron-right" size={wp(2)} color={selectedCard(type)} />
        </View>
      </View>
      {selectedContent(type)}
      {type === 'appoinment' && <Text>+ 2 more appoinments</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: (type, selectedCard) => ({
    backgroundColor: type === 'weight' ? '#D4F9ED' : `${selectedCard(type)}50`,
    padding: wp(5),
    borderRadius: 15,
    marginVertical: hp(1),
  }),
  containerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  containerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textTitle: {
    fontWeight: 'bold',
    marginHorizontal: wp(2),
    fontSize: wp(3.2),
  },
  content: {
    backgroundColor: color.light,
    marginVertical: wp(5),
    padding: wp(3),
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  contentTitle: {
    fontSize: wp(5),
    fontWeight: 'bold',
  },
  containerEmoji: {
    fontWeight: 'bold',
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  contentEmoji: {
    fontSize: 20,
    padding: wp(5),
    marginVertical: hp(1),
    backgroundColor: color.warning,
    borderRadius: 100,
  },
});

export default Card;
