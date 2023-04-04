/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import MyWebview from './mywebview';

// if (__DEV__) {
//   import('./ReactotronConfig').then(() =>
//     console.log('Reactotron Configured baby'),
//   );
// }

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [isVisible, setisVisible] = useState(true);

  return (
    <View style={{flexDirection: 'column', height: '100%', width: '100%'}}>
      <View style={{flex: 1, alignSelf: 'center', justifyContent: 'center'}}>
        <TouchableOpacity
          onPress={() => {
            console.log('press');
            setisVisible(!isVisible);
          }}>
          <Text style={{fontSize: 20, color: '#007aff', marginBottom: 20}}>
            {isVisible ? 'Hide View' : 'Show View'}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1}}>
        <MyWebview link="https://reactnative.dev/" isVisible={isVisible} />
        <MyWebview link="https://stackoverflow.com/" isVisible={!isVisible} />
      </View>
    </View>
  );
}

export default App;
