import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
 
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#373B44", "#4286f4"],
    title: "천둥",
    subtitle: "토르주의 벼락주의 ~!!! "
  },
  Drizzle: {
    iconName: "weather-hail",
    gradient: ["#89F7FE", "#66A6FF"],
    title: "이슬비",
    subtitle: "조금 오는 비라도 우산은 챙기셧죠?"
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#00C6FB", "#005BEA"],
    title: "비",
    subtitle: "김치전에 막걸리 마시는날~!"
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#7DE2FC", "#B9B6E5"],
    title: "눈",
    subtitle: "눈이와 눈이와 설레임에 눈이와~"
  },
  Atmosphere: {
    iconName: "weather-hail",
    gradient: ["#89F7FE", "#66A6FF"],
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#FF7300", "#FEF253"],
    title: "맑음",
    subtitle: "햇빛 보기 좋은날~ "
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#D7D2CC", "#304352"],
    title: "흐림",
    subtitle: "정신까지 흐리멍텅 해짐 주의!"
  },
  Mist: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "약간의 비",
    subtitle: "조금 오는 비라도 우산은 필수! "
  },
  Dust: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "미세먼지",
    subtitle: "중국산 먼지들이 찾아와요..."
  },
  Haze: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "흐리고 안개",
    subtitle: "집에서 휴식을 취하는것도 나쁘지 않겠어요 "
  }
};

export default function Weather({ temp,condition }) {
  return (
      <LinearGradient
        colors={weatherOptions[condition].gradient}
        style={styles.container}>
          {/* 상단아이콘 바  */}
          <StatusBar barStyle="light-content" /> 
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
         size={100}
         color="white"
         name={weatherOptions[condition].iconName}/>
        <Text style={styles.temp}>{temp}℃</Text>
      </View>
      <View style={{...styles.halfContainer,...styles.textContainer}} >
          <Text style={styles.title}>
            {weatherOptions[condition].title}
          </Text>
          <Text style={styles.subtitle}>
            {weatherOptions[condition].subtitle}
          </Text>
      </View>
      </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "Dust"
  ]).isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize:40,
    color:"white",
  },
  halfContainer: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize:44,
    fontWeight: "300",
    color:"white",
    marginBottom: 10,
  },
  subtitle :{
    fontWeight:"600",
    color:"white",
    fontSize:24,
  },
  textContainer: {
    paddingHorizontal:20,
    alignItems:"flex-start"
  }
  
});