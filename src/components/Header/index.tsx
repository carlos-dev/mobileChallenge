import React from 'react';
import { Text, View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import IconArrow from 'react-native-vector-icons/AntDesign';
import scaleFontSize from '../../utils/scaleFontSize';

import { styles } from './styles';

type Props = {
  navigation: any;
  title: string;
  hasBackButton?: boolean;
}

export const Header = ({ navigation, title, hasBackButton }: Props) => (
  <View style={styles.header}>
    {hasBackButton && (
      <BorderlessButton style={styles.buttonIcon} onPress={() => navigation.goBack()}>
        <IconArrow name="arrowleft" size={scaleFontSize(18)} color="#333" />
      </BorderlessButton>
    )}

    <Text style={styles.title}>{title}</Text>
  </View>
);

Header.defaultProps = {
  hasBackButton: false,
};
