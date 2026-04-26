import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { ROUTES } from '@app/navigation/routeNames';
import type { AppStackParamList } from '@app/navigation/types';
import { useAppFlow } from '@app/state/AppFlowContext';

const PreOnboardingScreen = (): React.JSX.Element => {
  const navigation = useNavigation<NativeStackNavigationProp<AppStackParamList>>();
  const {
    completePreOnboarding,
    nextPreOnboardingStep,
    preOnboardingStep,
    previousPreOnboardingStep,
  } = useAppFlow();

  const isLastStep = preOnboardingStep === 4;

  const handleContinuePress = (): void => {
    if (isLastStep) {
      completePreOnboarding();
      navigation.replace(ROUTES.HOME_TABS, { screen: ROUTES.HOME });
      return;
    }

    nextPreOnboardingStep();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pre-Onboarding</Text>
      <Text style={styles.subtitle}>Step {preOnboardingStep} of 4</Text>
      <View style={styles.actionsRow}>
        <Pressable
          disabled={preOnboardingStep === 1}
          onPress={previousPreOnboardingStep}
          style={[styles.actionButton, preOnboardingStep === 1 ? styles.disabledButton : null]}
        >
          <Text style={styles.actionButtonText}>Previous</Text>
        </Pressable>
        <Pressable onPress={handleContinuePress} style={styles.actionButton}>
          <Text style={styles.actionButtonText}>{isLastStep ? 'Finish' : 'Continue'}</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    color: '#0f172a',
    fontSize: 24,
    fontWeight: '700',
  },
  subtitle: {
    color: '#334155',
    fontSize: 15,
    marginTop: 8,
  },
  actionsRow: {
    flexDirection: 'row',
    marginTop: 20,
  },
  actionButton: {
    backgroundColor: '#0f172a',
    borderRadius: 8,
    marginHorizontal: 6,
    minWidth: 110,
    paddingVertical: 10,
  },
  disabledButton: {
    opacity: 0.35,
  },
  actionButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default PreOnboardingScreen;
