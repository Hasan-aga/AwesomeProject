/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import WebviewSelector from './WebviewSelector';

// if (__DEV__) {
//   import('./ReactotronConfig').then(() =>
//     console.log('Reactotron Configured baby'),
//   );
// }

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
              key={link}
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
      <WebviewSelector selectedLink={selectedLink} links={links} />
    </View>
  );
}

export default App;
