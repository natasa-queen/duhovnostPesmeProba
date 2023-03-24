import React, { useState, useEffect } from 'react';
import '../assets/css/poruka.scss';

const messages = [
  'Poruka 1',
  'Poruka 2',
  'Poruka 3',
  'Poruka 4',
  'Poruka 5',
  'Poruka 6',
  'Poruka 7',
  'Poruka 8',
  'Poruka 9',
  'Poruka 10',
  'Poruka 11',
  'Poruka 12',
  'Poruka 13',
  'Poruka 14',
  'Poruka 15',
  'Poruka 16',
  'Poruka 17',
  'Poruka 18',
  'Poruka 19',
  'Poruka 20',
  'Poruka 21',
  'Poruka 22'
];



const MessageDisplay = () => {
  const [currentMessage, setCurrentMessage] = useState("");



  useEffect(() => {
    const storedMessage = window.localStorage.getItem("currentMessage");
    if (storedMessage) {
      setCurrentMessage(storedMessage);
    } else {
      const randomIndex = Math.floor(Math.random() * messages.length);
      setCurrentMessage(messages[randomIndex]);
      window.localStorage.setItem("currentMessage", messages[randomIndex]);
    }

    const messageInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * messages.length);
      setCurrentMessage(messages[randomIndex]);
      window.localStorage.setItem("currentMessage", messages[randomIndex]);
    }, 10000); // jedan dan u milisekundama
    return () => clearInterval(messageInterval);
  }, [messages]);

  return <div className="poruka">{currentMessage}</div>;
};

export default MessageDisplay;




// const selectRandomMessage = () => {
//   const randomIndex = Math.floor(Math.random() * messages.length);
//   return messages[randomIndex];
// };

// const Poruka = ({ hour, minute }) => {
//   const [message, setMessage] = useState('');

//   useEffect(() => {
//     const currentDate = new Date();
//     const targetDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), hour, minute);

//     if (currentDate.getTime() > targetDate.getTime()) {
//       targetDate.setDate(targetDate.getDate() + 1);
//     }

//     const timeUntilTargetDate = targetDate.getTime() - currentDate.getTime();

//     const storedMessage = localStorage.getItem('scheduledMessage');
//     if (storedMessage) {
//       setMessage(storedMessage);
//     } else {
//       const randomMessage = selectRandomMessage();
//       setMessage(randomMessage);
//       localStorage.setItem('scheduledMessage', randomMessage);
//     }

//     const interval = setInterval(() => {
//       const randomMessage = selectRandomMessage();
//       setMessage(randomMessage);
//       localStorage.setItem('scheduledMessage', randomMessage);
//     }, timeUntilTargetDate);

//     return () => clearInterval(interval);
//   }, [hour, minute]);

//   return (
//     <div className="poruka">
//       <h1>Scheduled message:</h1>
//       <p>{message}</p>
//     </div>
//   );
// };

// export default Poruka



