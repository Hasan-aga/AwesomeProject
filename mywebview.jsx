import {useEffect, useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import WebView from 'react-native-webview';

export default function MyWebview({link, isVisible}) {
  console.log(isVisible);
  const pureWebview = useMemo(() => <WebView source={{uri: link}} />, [link]);
  useEffect(() => {
    fetch('https://www.google.com/')
      .then(res => res.text())
      .then(data => console.log('res', data))
      .catch(error => console.log(error));
  }, []);
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
