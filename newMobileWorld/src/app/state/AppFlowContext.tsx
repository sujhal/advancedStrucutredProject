import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';

type AppFlowContextType = {
  isAuthenticated: boolean;
  isPreOnboardingComplete: boolean;
  preOnboardingStep: number;
  businessOnboardingStep: number;
  notificationCount: number;
  cartCount: number;
  nextPreOnboardingStep: () => void;
  previousPreOnboardingStep: () => void;
  completePreOnboarding: () => void;
  nextBusinessOnboardingStep: () => void;
  previousBusinessOnboardingStep: () => void;
  markAuthenticated: () => void;
  markSignedOut: () => void;
};

const PRE_ONBOARDING_TOTAL_STEPS = 4;
const BUSINESS_ONBOARDING_TOTAL_STEPS = 7;

const AppFlowContext = createContext<AppFlowContextType | undefined>(undefined);

type AppFlowProviderProps = {
  children: React.ReactNode;
};

export const AppFlowProvider = ({ children }: AppFlowProviderProps): React.JSX.Element => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isPreOnboardingComplete, setIsPreOnboardingComplete] = useState(false);
  const [preOnboardingStep, setPreOnboardingStep] = useState(1);
  const [businessOnboardingStep, setBusinessOnboardingStep] = useState(1);
  const [notificationCount] = useState(4);
  const [cartCount] = useState(3);

  const nextPreOnboardingStep = useCallback((): void => {
    setPreOnboardingStep(currentStep => {
      const nextStep = Math.min(currentStep + 1, PRE_ONBOARDING_TOTAL_STEPS);
      return nextStep;
    });
  }, []);

  const previousPreOnboardingStep = useCallback((): void => {
    setPreOnboardingStep(currentStep => Math.max(currentStep - 1, 1));
  }, []);

  const completePreOnboarding = useCallback((): void => {
    setIsPreOnboardingComplete(true);
  }, []);

  const nextBusinessOnboardingStep = useCallback((): void => {
    setBusinessOnboardingStep(currentStep =>
      Math.min(currentStep + 1, BUSINESS_ONBOARDING_TOTAL_STEPS),
    );
  }, []);

  const previousBusinessOnboardingStep = useCallback((): void => {
    setBusinessOnboardingStep(currentStep => Math.max(currentStep - 1, 1));
  }, []);

  const markAuthenticated = useCallback((): void => {
    setIsAuthenticated(true);
  }, []);

  const markSignedOut = useCallback((): void => {
    setIsAuthenticated(false);
    setIsPreOnboardingComplete(false);
    setPreOnboardingStep(1);
    setBusinessOnboardingStep(1);
  }, []);

  const value = useMemo(
    () => ({
      businessOnboardingStep,
      cartCount,
      completePreOnboarding,
      isAuthenticated,
      isPreOnboardingComplete,
      markAuthenticated,
      markSignedOut,
      nextBusinessOnboardingStep,
      nextPreOnboardingStep,
      notificationCount,
      preOnboardingStep,
      previousBusinessOnboardingStep,
      previousPreOnboardingStep,
    }),
    [
      businessOnboardingStep,
      cartCount,
      completePreOnboarding,
      isAuthenticated,
      isPreOnboardingComplete,
      markAuthenticated,
      markSignedOut,
      nextBusinessOnboardingStep,
      nextPreOnboardingStep,
      notificationCount,
      preOnboardingStep,
      previousBusinessOnboardingStep,
      previousPreOnboardingStep,
    ],
  );

  return <AppFlowContext.Provider value={value}>{children}</AppFlowContext.Provider>;
};

export const useAppFlow = (): AppFlowContextType => {
  const context = useContext(AppFlowContext);

  if (!context) {
    throw new Error('useAppFlow must be used within AppFlowProvider');
  }

  return context;
};