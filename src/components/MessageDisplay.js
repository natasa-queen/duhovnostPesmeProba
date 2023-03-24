// import React, { useState, useEffect } from "react";
// import { useStaticQuery, graphql } from "gatsby";
// import '../assets/css/poruka.scss';




// const MessageDisplay = () => {

// const [currentMessage, setCurrentMessage] = useState("");

//   const data = useStaticQuery(graphql`
//     query {
//       markdownRemark(fileAbsolutePath: { regex: "/poruke/poruke.md" }) {
//         frontmatter {
//           poruke
//         }
//       }
//     }
//   `);

//   const messages = data.markdownRemark.frontmatter.poruke;

//   useEffect(() => {
//     const messageInterval = setInterval(() => {
//       const randomIndex = Math.floor(Math.random() * messages.length);
//       setCurrentMessage(messages[randomIndex]);
//     }, 1000); // jedan dan u milisekundama
//     return () => clearInterval(messageInterval);
//   }, [messages]);

//   return (
//     <div className="poruka">{currentMessage}</div>
//   )
// };
// export default MessageDisplay;
