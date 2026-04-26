import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type CenteredMessageScreenProps = {
  title: string;
  subtitle?: string;
};

const CenteredMessageScreen = ({
  title,
  subtitle,
}: CenteredMessageScreenProps): React.JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  title: {
    color: '#121212',
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
  },
  subtitle: {
    color: '#707070',
    fontSize: 15,
    marginTop: 10,
    textAlign: 'center',
  },
});

export default CenteredMessageScreen;
