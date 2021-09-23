import * as Notifications from "expo-notifications";
import AsyncStorage from "@react-native-async-storage/async-storage";

const NOTIFICATION_KEY = "flashCard:roger:notification";
export function clearLocalNotification() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY).then(
    Notifications.cancelAllScheduledNotificationsAsync
  );
}

export function setLocalNotification() {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Notifications.requestPermissionsAsync().then(({ status }) => {
          if (status === "granted") {
            Notifications.cancelAllScheduledNotificationsAsync();
            Notifications.setNotificationHandler({
              handleNotification: async () => ({
                shouldShowAlert: true,
                shouldPlaySound: true,
                shouldSetBadge: true,
              }),
            });
            Notifications.scheduleNotificationAsync({
              content: {
                title: "Flashcards Reminder",
                body: "👋 don't forget to practice today!",
              },
              trigger: {
                hour: 20,
                minute: 45,
                //seconds: 60,
                repeats: true,
              },
            });
            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
          }
        });
      }
    });
}

export function getPercent(num, total) {
  let percent = 0;
  if (num > 0) {
    percent = Math.round((num / total) * 100);
  }
  return percent;
}
