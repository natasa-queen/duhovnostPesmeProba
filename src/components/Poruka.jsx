// import React, { useState, useEffect } from 'react';
// import '../assets/css/poruka.scss'

// const messages = [
//   'Poruka 1',
//   'Poruka 2',
//   'Poruka 3',
//   'Poruka 4',
//   'Poruka 5',
//   'Poruka 6',
//   'Poruka 7',
//   'Poruka 8',
//   'Poruka 9',
//   'Poruka 10',
//   'Poruka 11',
//   'Poruka 12',
//   'Poruka 13',
//   'Poruka 14',
//   'Poruka 15',
//   'Poruka 16',
//   'Poruka 17',
//   'Poruka 18',
//   'Poruka 19',
//   'Poruka 20',
//   'Poruka 21',
//   'Poruka 22',
//   // ...
// ];

// const selectRandomMessage = () => {
//     const randomIndex = Math.floor(Math.random() * messages.length);
//     return messages[randomIndex];
//   };
  
//   const getNextMessageTime = () => {
//     const currentDate = new Date();
//     // const targetDate = new Date(currentDate.getTime() + (24 * 60 * 60 * 1000));
//     const targetDate = new Date(currentDate.getTime() + (1 * 10 * 10 * 100));
//     return targetDate.getTime();
//   };
  
//   const Poruka = () => {
//     const [message, setMessage] = useState('');
//     const [nextMessageTime, setNextMessageTime] = useState(getNextMessageTime());
  
//     useEffect(() => {
//       const storedMessage = localStorage.getItem('message');
//       const storedTime = localStorage.getItem('nextMessageTime');
  
//       if (storedMessage && storedTime && parseInt(storedTime) > Date.now()) {
//         setMessage(storedMessage);
//         return;
//       }
  
//       const timeUntilNextMessage = nextMessageTime - Date.now();
  
//       const interval = setInterval(() => {
//         const randomMessage = selectRandomMessage();
//         setMessage(randomMessage);
//         setNextMessageTime(getNextMessageTime());
  
//         localStorage.setItem('message', randomMessage);
//         localStorage.setItem('nextMessageTime', getNextMessageTime());
//       }, timeUntilNextMessage);
  
//       return () => clearInterval(interval);
//     }, [nextMessageTime]);
  
//     return (
//       <div className='poruka'>
//         <h1>Scheduled message:</h1>
//         <p>{message}</p>
//       </div>
//     );
//   };
  
//   export default Poruka;





import React, { useState, useEffect } from 'react';
import '../assets/css/poruka.scss'

const messages = [
  'Poruka 1',
  'Poruka 2',
  'Poruka 3',
  // ...
];

const selectRandomMessage = () => {
  const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
};

const Poruka = ({ hour, minute }) => {
  const [message, setMessage] = useState('opoppo');

  useEffect(() => {
    const currentDate = new Date();
    const targetDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), hour, minute);

    if (currentDate.getTime() > targetDate.getTime()) {
      targetDate.setDate(targetDate.getDate() + 1);
    }

    const timeUntilTargetDate = targetDate.getTime() - currentDate.getTime();

    let storedMessage = localStorage.getItem('scheduledMessage');
    if (storedMessage) {
      setMessage(storedMessage);
    } else {
      const randomMessage = selectRandomMessage();
      setMessage(randomMessage);
      localStorage.setItem('scheduledMessage', randomMessage);
    }

    const interval = setInterval(() => {
      const randomMessage = selectRandomMessage();
      setMessage(randomMessage);
      localStorage.setItem('scheduledMessage', randomMessage);
    }, timeUntilTargetDate);

    return () => clearInterval(interval);
  }, []);



  return (
    <div className='poruka'>
      <h1>Scheduled message:</h1>
      <p>{message}</p>
    </div>
  );
};

export default Poruka;










// import React, { useState, useEffect } from 'react';
// import '../assets/css/poruka.scss'

// const messages = [
//   'Poruka 1',
//   'Poruka 2',
//   'Poruka 3',
//   // ...
// ];

// const selectRandomMessage = () => {
//   const randomIndex = Math.floor(Math.random() * messages.length);
//   return messages[randomIndex];
// };

// const Poruka = () => {
//   const [message, setMessage] = useState(selectRandomMessage);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const randomMessage = selectRandomMessage();
//       setMessage(randomMessage);
//     // }, 86400000); // 24 sata u milisekundama
//     }, 10000); // 24 sata u milisekundama

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className='poruka'>
//       <h1>Random poruka dana:</h1>
//       <p>{message}</p>
//     </div>
//   );
// };

// export default Poruka;





// import React, { useState, useEffect } from 'react';

// const messages = [
//   'Poruka 1',
//   'Poruka 2',
//   'Poruka 3',
//   // ...
// ];

// const selectRandomMessage = () => {
//   const randomIndex = Math.floor(Math.random() * messages.length);
//   return messages[randomIndex];
// };

// const ScheduledMessage = ({ hour, minute }) => {
//   const [message, setMessage] = useState('');

//   useEffect(() => {
//     const currentDate = new Date();
//     const targetDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), hour, minute);

//     if (currentDate.getTime() > targetDate.getTime()) {
//       targetDate.setDate(targetDate.getDate() + 1);
//     }

//     const timeUntilTargetDate = targetDate.getTime() - currentDate.getTime();

//     const interval = setInterval(() => {
//       const randomMessage = selectRandomMessage();
//       setMessage(randomMessage);
//     }, timeUntilTargetDate);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div>
//       <h1>Scheduled message:</h1>
//       <p>{message}</p>
//     </div>
//   );
// };

// export default ScheduledMessage;

{/* <ScheduledMessage hour={10} minute={30} />  tamo gde postavljam*/} 
