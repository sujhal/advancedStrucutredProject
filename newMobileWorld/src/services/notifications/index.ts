import notifee from '@notifee/react-native';

export const requestNotificationPermission = async () => {
  await notifee.requestPermission();
};

export const createDefaultNotificationChannel = async () => {
  await notifee.createChannel({
    id: 'default',
    name: 'Default',
    importance: 4,
  });
};
