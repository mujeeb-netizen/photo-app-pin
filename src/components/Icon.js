import React from 'react';
import {View} from 'react-native';
import Svg, {
  Path,
  G,
  Circle,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';
const Icons = ({name, color, color1, color2, color3}) => {
  return (
    <View>
      {name === 'feed' ? (
        <>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="20.5"
            height="21.618"
            viewBox="0 0 20.5 21.618">
            <Defs>
              <LinearGradient
                id="a"
                x1="0.5"
                x2="0.5"
                y2="1"
                gradientUnits="objectBoundingBox">
                <Stop offset="0" stopColor={color2}></Stop>
                <Stop offset="1" stopColor={color1}></Stop>
              </LinearGradient>
            </Defs>
            <Path
              fill="url(#a)"
              stroke={color3}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M9.157 20.771V17.7a1.426 1.426 0 011.424-1.419h2.886A1.426 1.426 0 0114.9 17.7h0v3.076A1.225 1.225 0 0016.1 22h1.924a3.456 3.456 0 003.476-3.438h0V9.838a2.439 2.439 0 00-.962-1.9l-6.58-5.248a3.18 3.18 0 00-3.944 0L3.462 7.943a2.42 2.42 0 00-.962 1.9v8.714A3.456 3.456 0 005.973 22H7.9a1.235 1.235 0 001.241-1.229h0"
              transform="translate(-1.75 -1.132)"></Path>
          </Svg>
        </>
      ) : null}
      {name === 'map' ? (
        <>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="16.857"
            height="19.836"
            viewBox="0 0 16.857 19.836">
            <Defs>
              <LinearGradient
                id="a"
                x1="0.5"
                x2="0.5"
                y2="1"
                gradientUnits="objectBoundingBox">
                <Stop offset="0" stopColor={color2}></Stop>
                <Stop offset="1" stopColor={color1}></Stop>
              </LinearGradient>
            </Defs>
            <G transform="translate(-550.25 -788.726)">
              <Path
                fill="url(#a)"
                stroke={color3}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M4.239 10.391a7.678 7.678 0 0115.357.052v.087a11.339 11.339 0 01-3.478 7.3 20.184 20.184 0 01-3.591 2.957.93.93 0 01-1.217 0 19.818 19.818 0 01-5.052-4.73 9.826 9.826 0 01-2.017-5.635z"
                transform="translate(546.761 786.737)"></Path>
              <Circle
                cx="2.461"
                cy="2.461"
                r="2.461"
                fill="none"
                stroke={color3}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                transform="translate(555.718 794.815)"></Circle>
            </G>
          </Svg>
        </>
      ) : null}
      {name === 'explore' ? (
        <>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="20.575"
            height="21.033"
            viewBox="0 0 20.575 21.033">
            <G
              fill="none"
              stroke={color1}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              transform="translate(-2.028 -2.028)">
              <Circle
                cx="8.989"
                cy="8.989"
                r="8.989"
                transform="translate(2.778 2.778)"></Circle>
              <Path d="M18.018 18.485L21.542 22"></Path>
            </G>
          </Svg>
        </>
      ) : null}
      {name === 'profile' ? (
        <>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="16.665"
            height="20.723"
            viewBox="0 0 16.665 20.723">
            <Defs>
              <LinearGradient
                id="a"
                x1="0.5"
                x2="0.5"
                y2="1"
                gradientUnits="objectBoundingBox">
                <Stop offset="0" stopColor={color2}></Stop>
                <Stop offset="1" stopColor={color1}></Stop>
              </LinearGradient>
            </Defs>
            <G
              fill="url(#a)"
              stroke={color3}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              transform="translate(-3708.25 -684.25) translate(3705 683)">
              <Circle
                cx="4.778"
                cy="4.778"
                r="4.778"
                transform="translate(6.801 2)"></Circle>
              <Path d="M4 18.2a2.215 2.215 0 01.22-.97 4.042 4.042 0 012.819-1.62 16.793 16.793 0 012.343-.33 25.059 25.059 0 014.384 0 16.979 16.979 0 012.343.33c1.071.22 2.361.659 2.819 1.62a2.27 2.27 0 010 1.95c-.458.961-1.748 1.4-2.819 1.611a15.709 15.709 0 01-2.343.339 25.825 25.825 0 01-3.57.055 4.067 4.067 0 01-.815-.055 15.43 15.43 0 01-2.334-.339c-1.08-.21-2.362-.65-2.828-1.611A2.279 2.279 0 014 18.2z"></Path>
            </G>
          </Svg>
        </>
      ) : null}
      {name === 'male' ? (
        <>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="72.125"
            height="72.125"
            viewBox="0 0 72.125 72.125">
            <Path
              fill={color}
              d="M46.716 29.566l6.395-6.394.512 8.09a3 3 0 005.987-.378l-.806-12.705a5.265 5.265 0 00-4.879-4.86l-12.684-.8a3 3 0 00-.377 5.986l8.113.513-6.402 6.402a21 21 0 104.145 4.145zM19.011 53.113a15.3 15.3 0 1121.502-.127 15.222 15.222 0 01-21.502.127z"></Path>
          </Svg>
        </>
      ) : null}
      {name === 'female' ? (
        <>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="41.997"
            height="60"
            viewBox="0 0 41.997 60">
            <Path
              fill={color}
              d="M41.997 21.187a21 21 0 10-24 20.965v3.868h-4.98a3 3 0 000 6h4.98V57a3 3 0 006 0v-4.98h4.979a3 3 0 000-6h-4.979v-3.87a21.143 21.143 0 0018-20.963zm-36.128 0A15.131 15.131 0 1120.99 36.53 15.238 15.238 0 015.869 21.187z"></Path>
          </Svg>
        </>
      ) : null}
    </View>
  );
};

export default Icons;
