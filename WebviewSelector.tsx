import {View} from 'react-native';
import MyWebview from './mywebview';
import React from 'react';

function isVisible(link: string, selectedLink: string): boolean {
  return link === selectedLink;
}

export default function WebviewSelector({
  links,
  selectedLink,
}: {
  links: string[];
  selectedLink: string;
}) {
  return (
    <View style={{flex: 1}}>
      {links.map(link => {
        return (
          <MyWebview
            key={link}
            link={link}
            isVisible={isVisible(link, selectedLink)}
          />
        );
      })}
    </View>
  );
}
