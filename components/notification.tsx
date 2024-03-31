// "use client";

// import { useCallback, useEffect } from "react";

// const sendNotification = () => {
//     if ('Notification' in window && Notification.permission === 'granted') {
//       new Notification('Hello Developer !!', {
//         body: 'This is a notification from the website',
//         icon: '/images/notify.svg', 
//       })
//     }else{
//       requestNotificationPermission()
//     }
//   };

//   const requestNotificationPermission = useCallback(() => {
//     if ('Notification' in window) {
//       Notification.requestPermission().then(permission => {
        
//         if (permission === 'granted') {
//           console.log("Notification permission granted.");
//         }
//       })
//     }else{
//       console.log("This browser does not support desktop notification");
//     }
//   }, []);

//   useEffect(() => {
//     if ('Notification' in window) {
//       requestNotificationPermission();
//     }
//   }, [requestNotificationPermission]);
