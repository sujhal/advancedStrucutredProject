import { useEffect, useState } from 'react';
import { Keyboard, type KeyboardEvent } from 'react-native';

type KeyboardInfo = {
  visible: boolean;
  height: number;
};

export const useKeyboard = (): KeyboardInfo => {
  const [info, setInfo] = useState<KeyboardInfo>({ visible: false, height: 0 });
  useEffect(() => {
    const showSub = Keyboard.addListener('keyboardDidShow', (event: KeyboardEvent) => {
      setInfo({ visible: true, height: event.endCoordinates.height });
    });
    const hideSub = Keyboard.addListener('keyboardDidHide', () => {
      setInfo({ visible: false, height: 0 });
    });
    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, []);
  return info;
};
