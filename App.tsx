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

function isVisible(link: string, selectedLink: string) {
  return link === selectedLink;
}

function App(): JSX.Element {
  const links = ['https://reactnative.dev/', 'https://stackoverflow.com/'];
  const [selectedLink, setSelectedLink] = useState('');

  useEffect(() => {
    setSelectedLink(links[0]);
  }, []);

  return (
    <View style={{flexDirection: 'column', height: '100%', width: '100%'}}>
      <View style={{flex: 1, alignSelf: 'center', justifyContent: 'center'}}>
        {links.map(link => {
          return (
            <TouchableOpacity
              onPress={() => {
                console.log('press');
                setSelectedLink(link);
              }}>
              <Text style={{fontSize: 20, color: '#007aff', marginBottom: 20}}>
                show {link}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={{flex: 1}}>
        {links.map(link => {
          return (
            <MyWebview link={link} isVisible={isVisible(link, selectedLink)} />
          );
        })}
      </View>
    </View>
  );
}

export default App;
