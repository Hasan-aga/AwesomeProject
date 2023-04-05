import {View} from 'react-native';
import MyWebview from './mywebview';
import React, {useEffect, useMemo, useState} from 'react';

function isVisible(link: string, selectedLink: string): boolean {
  return link === selectedLink;
}

interface State {
  selectedItems: Set<string>;
}

export default function WebviewSelector({
  links,
  selectedLink,
}: {
  links: string[];
  selectedLink: string;
}) {
  const [alreadyRendered, setalreadyRendered] = useState<Set<string>>(
    new Set(),
  );
  useEffect(() => {
    setalreadyRendered(new Set([...alreadyRendered, selectedLink]));
  }, [selectedLink]);

  const viewmap = useMemo(
    () =>
      links.reduce((acc, curr) => {
        acc[curr] = (
          <MyWebview
            key={curr}
            link={curr}
            isVisible={isVisible(curr, selectedLink)}
          />
        );
        return acc;
      }, {}),
    [links],
  );
  return (
    <View style={{flex: 1}}>
      {alreadyRendered &&
        [...alreadyRendered].map(link => {
          return viewmap[link];
        })}
    </View>
  );
}
