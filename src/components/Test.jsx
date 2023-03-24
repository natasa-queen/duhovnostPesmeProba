
import React, { useState, useEffect } from "react";


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
    }, 1000); // jedan dan u milisekundama
    return () => clearInterval(messageInterval);
  }, [messages]);

  return <div className="poruka">{currentMessage}</div>;
};

export default MessageDisplay;



















// import React, { useState, useEffect } from "react";
// import { useStaticQuery, graphql } from "gatsby";
// import firebase from "firebase/app";
// import "firebase/database";

// const Poruka = ({ hour, minute }) => {
//   const [message, setMessage] = useState("");

//   const data = useStaticQuery(graphql`
//     query {
//       allMarkdownRemark {
//         edges {
//           node {
//             frontmatter {
//               title
//             }
//             html
//           }
//         }
//       }
//     }
//   `);

//   const messages = data.allMarkdownRemark.edges.map((edge) => ({
//     title: edge.node.frontmatter.title,
//     body: edge.node.html,
//   }));

//   const selectRandomMessage = () => {
//     const randomIndex = Math.floor(Math.random() * messages.length);
//     return messages[randomIndex];
//   };

//   useEffect(() => {
//     const currentDate = new Date();
//     const targetDate = new Date(
//       currentDate.getFullYear(),
//       currentDate.getMonth(),
//       currentDate.getDate(),
//       hour,
//       minute
//     );

//     if (currentDate.getTime() > targetDate.getTime()) {
//       targetDate.setDate(targetDate.getDate() + 1);
//     }

//     const timeUntilTargetDate = targetDate.getTime() - currentDate.getTime();

//     const db = firebase.database();
//     const messageRef = db.ref("scheduledMessage");

//     messageRef.once("value", (snapshot) => {
//       const storedMessage = snapshot.val();
//       if (storedMessage) {
//         setMessage(storedMessage);
//       } else {
//         const randomMessage = selectRandomMessage();
//         setMessage(randomMessage.body);
//         messageRef.set(randomMessage.body);
//       }
//     });

//     const interval = setInterval(() => {
//       const randomMessage = selectRandomMessage();
//       setMessage(randomMessage.body);
//       messageRef.set(randomMessage.body);
//     }, timeUntilTargetDate);

//     return () => clearInterval(interval);
//   }, [hour, minute]);

//   return (
//     <div className="poruka">
//       <h1>Scheduled message:</h1>
//       <div dangerouslySetInnerHTML={{ __html: message }} />
//     </div>
//   );
// };

// export default Poruka;
