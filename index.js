// You are building a reminder feature for a task management app. 
// Write an async function that sends a reminder (simulated with console.log) 
// after a delay using setTimeout. The function should return a Promise that
//  resolves after 3 seconds with the message "Reminder sent to user!", and
//  you should await it to log the message.

// let promise = new Promise(function(resolve,reject){
//     setTimeout(function(){resolve("Reminder sent to User!")},3000);
//     });
//  async function asyncReminder(){
//     try{
//     let message = await promise;
//     console.log(message);
//     }
//     catch (error){
//         console.log("Reminder failed")
//     };
// };
// ansyncReminder();

// In a startup's DevOps dashboard, implement a setInterval 
// function that checks server status every 5 seconds by calling
//  an async function checkServer() that returns a Promise resolving 
//  to "Server is running" or rejecting with "Server down". Use .then()
//   and .catch() to handle the result and stop the interval after 30 
//   seconds using clearInterval.]
// const intervalId = setInterval(() => {
//     checkServer()
//         .then((message) => console.log(message))
//         .catch((error) => console.error(error));
// }, 5000);
// async function checkServer() {
//     return Math.random() > 0.5
//         ? Promise.resolve("Server running")
//         : Promise.reject("Server down");
// }
// setTimeout(() => {
//     clearInterval(intervalId);
//     console.log("Stopped checking server.");
// }, 30000);

// You're building a system to show multiple notifications 
// to a user. Create an async function showNotifications
// that takes an array of messages and shows each message 
// 1 second apart using await and setTimeout wrapped in a
//  Promise. After all messages are shown, log 
//  "All notifications sent".

// function sendMessage(message) {
//     return new Promise((resolve) => setTimeout(resolve, message));
// }
// async function showNotifications(notifications) {
//     for (let mesg of notifications) {
//         await sendMessage(1000);
//         console.log(mesg);
//     }
//     console.log("All notifications sent");
// }
// showNotifications(["Goodmorning", "Your flight is set for 3p.m", "Check in early enough","Thank you"]);

// In your startup’s API integration, write an async function
//  fetchDataWithRetry() that tries to fetch data from a mock 
//  API (use Promise.reject() for failure), retries up to 3 
//  times with a 2-second delay between attempts using setTimeout, 
//  and resolves with "Data fetched" or logs "Failed after 3 attempts" 
//  if all fail.

// function mockAPI() {
//     return Math.random() > 0.5
//         ? Promise.resolve("Data fetched")
//         : Promise.reject("Data fetch failed");
// }
// function delaymessg(message) {
//     return new Promise((reject) => setTimeout(reject, message));
// }
// async function fetchDataWithRetry() {
//     let attempts = 0;

//     while (attempts < 3) {
//         try {
//             const data = await mockAPI();
//             console.log(data);
//             return;
//         } catch (err) {
//             console.error(err);
//             attempts++;
//             if (attempts < 3) {
//                 await delaymessg(2000);
//             }
//         }
//     }
//     console.log("Failed after 3 attempts");
// }
// fetchDataWithRetry();

// You’re building a countdown timer for a product launch. 
// Write a function that takes a number n and logs the countdown
//  every second using setInterval. Once it reaches 0, stop the 
//  interval and call an async function launchProduct() that
//   returns a resolved Promise with "Product Launched!" and logs it.

function launchProduct() {
    return Promise.resolve("Product Launched!");
  }
  
  function countdown(n) {
    const timer = setInterval(async () => {
      console.log(n);
      if (n === 0) {
        clearInterval(timer);
        const result = await launchProduct();
        console.log(result);
      }
      n--;
    }, 1000);
  };
  countdown(5);




  
  