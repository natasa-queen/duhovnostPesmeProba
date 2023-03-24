
import React, { useState, useEffect } from "react";


import '../assets/css/poruka.scss';


import { useStaticQuery, graphql } from "gatsby";



const MessageDisplay = () => {
  const [currentMessage, setCurrentMessage] = useState({
    tekst: "",
    pisac: ""
  });

  const data = useStaticQuery(graphql`
    query {
        allPorukeJson {
            edges {
                node {
                    poruke {
                        pisac
                        tekst
                    }
                }
            }
        }
    }       
  `)

  const messages = data.allPorukeJson.edges[0].node.poruke;

  useEffect(() => {
    const storedMessage = window.sessionStorage.getItem("currentMessage");
    if (storedMessage) {
      setCurrentMessage(JSON.parse(storedMessage));
    } else {
      const randomIndex = Math.floor(Math.random() * messages.length);
      setCurrentMessage(messages[randomIndex]);
      window.sessionStorage.setItem(
        "currentMessage",
        JSON.stringify(messages[randomIndex])
      );
    }

    const messageInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * messages.length);
      setCurrentMessage(messages[randomIndex]);
      window.sessionStorage.setItem(
        "currentMessage",
        JSON.stringify(messages[randomIndex])
      );
    }, 10000); // jedan dan u milisekundama
    return () => clearInterval(messageInterval);
  }, [messages]);

  return (
    <div className="poruka">
      <p>{currentMessage.tekst}</p>
      <p>- {currentMessage.pisac}</p>
    </div>
  );
};

export default MessageDisplay;
















// const messages = [
//     'Poruka 1',
//     'Poruka 2',
//     'Poruka 3',
//     'Poruka 4',
//     'Poruka 5',
//     'Poruka 6',
//     'Poruka 7',
//     'Poruka 8',
//     'Poruka 9',
//     'Poruka 10',
//     'Poruka 11',
//     'Poruka 12',
//     'Poruka 13',
//     'Poruka 14',
//     'Poruka 15',
//     'Poruka 16',
//     'Poruka 17',
//     'Poruka 18',
//     'Poruka 19',
//     'Poruka 20',
//     'Poruka 21',
//     'Poruka 22'
//   ];

// const MessageDisplay = () => {
//   const [currentMessage, setCurrentMessage] = useState("");



//   useEffect(() => {
//     const storedMessage = window.localStorage.getItem("currentMessage");
//     if (storedMessage) {
//       setCurrentMessage(storedMessage);
//     } else {
//       const randomIndex = Math.floor(Math.random() * messages.length);
//       setCurrentMessage(messages[randomIndex]);
//       window.localStorage.setItem("currentMessage", messages[randomIndex]);
//     }

//     const messageInterval = setInterval(() => {
//       const randomIndex = Math.floor(Math.random() * messages.length);
//       setCurrentMessage(messages[randomIndex]);
//       window.localStorage.setItem("currentMessage", messages[randomIndex]);
//     }, 10000); // jedan dan u milisekundama
//     return () => clearInterval(messageInterval);
//   }, [messages]);

//   return (
//     <div className="poruka">
//         {currentMessage}
//     </div>
//   )
// };

// export default MessageDisplay;

