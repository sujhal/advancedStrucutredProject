import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { useAppFlow } from '@app/state/AppFlowContext';

const ProfileSettingsScreen = (): React.JSX.Element => {
  const { markSignedOut } = useAppFlow();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Settings</Text>
      <Text style={styles.subtitle}>Manage account preferences and sign out safely.</Text>
      <Pressable onPress={markSignedOut} style={styles.signOutButton}>
        <Text style={styles.signOutText}>Sign Out</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    color: '#0f172a',
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
  },
  subtitle: {
    color: '#334155',
    fontSize: 14,
    marginTop: 8,
    textAlign: 'center',
  },
  signOutButton: {
    backgroundColor: '#991b1b',
    borderRadius: 8,
    marginTop: 24,
    paddingVertical: 12,
  },
  signOutText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default ProfileSettingsScreen;
