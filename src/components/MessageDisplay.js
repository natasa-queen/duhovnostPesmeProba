// import React, { useState, useEffect } from "react";
//
//
// import '../assets/css/poruka.scss';
//
//
// import { useStaticQuery, graphql } from "gatsby";
//
//
// const MessageDisplay = () => {
//   const [currentMessage, setCurrentMessage] = useState({
//     tekst: "",
//     pisac: ""
//   });
//
//   const data = useStaticQuery(graphql`
//     query {
//         allPorukeJson {
//             edges {
//                 node {
//                     poruke {
//                         pisac
//                         tekst
//                     }
//                 }
//             }
//         }
//     }
//   `)
//
//   const messages = data.allPorukeJson.edges[0].node.poruke;
//
//   useEffect(() => {
//     const storedMessage = window.sessionStorage.getItem("currentMessage");
//     if (storedMessage) {
//       setCurrentMessage(JSON.parse(storedMessage));
//     } else {
//       const randomIndex = Math.floor(Math.random() * messages.length);
//       setCurrentMessage(messages[randomIndex]);
//       window.sessionStorage.setItem(
//         "currentMessage",
//         JSON.stringify(messages[randomIndex])
//       );
//     }
//
//     const messageInterval = setInterval(() => {
//       const randomIndex = Math.floor(Math.random() * messages.length);
//       setCurrentMessage(messages[randomIndex]);
//       window.sessionStorage.setItem(
//         "currentMessage",
//         JSON.stringify(messages[randomIndex])
//       );
//     },  180000); // jedan dan u milisekundama
//     return () => clearInterval(messageInterval);
//   }, [messages]);
//
//   return (
//     <div className="poruka">
//       <p className="tekst">{currentMessage.tekst}</p>
//       <p className="pisac">- {currentMessage.pisac}</p>
//     </div>
//   );
// };
//
// export default MessageDisplay;
