import React, {useEffect, useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import WebView from 'react-native-webview';

interface MyWebviewType {
  link: string;
  isVisible: boolean;
}
export default function MyWebview({link, isVisible}: MyWebviewType) {
  console.log(isVisible);
  const pureWebview = useMemo(() => <WebView source={{uri: link}} />, [link]);

  return (
    <View style={isVisible ? styles.container : styles.hiddenView}>
      {pureWebview}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'purple',
    flex: 1,
    flexDirection: 'column',
  },
  hiddenView: {
    display: 'none',
    height: 0,
    width: 0,
    backgroundColor: 'red',
  },
});
