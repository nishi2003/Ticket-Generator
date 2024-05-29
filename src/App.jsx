// import React, { useState } from 'react';

// function TicketGenerator() {
//   const [numTickets, setNumTickets] = useState(0);
//   const [generatedTickets, setGeneratedTickets] = useState([]);

//   const handleGenerateTickets = () => {
//     if (numTickets <= 0) {
//       alert("Please enter a valid number of tickets greater than zero.");
//       return;
//     }

//     const tickets = [];
//     for (let i = 0; i < numTickets; i++) {
//       const ticket = Math.floor(1000 + Math.random() * 9000); 
//       tickets.push(ticket);
//     }
//     setGeneratedTickets(tickets);
//   };

//   return (
//     <div>
//       <h2>Ticket Generator</h2>
//       <label>
//         Number of Tickets:
//         <input
//           type="number"
//           value={numTickets}
//           onChange={(e) => setNumTickets(parseInt(e.target.value))}
//         />
//       </label>
//       <button onClick={handleGenerateTickets}>Generate Tickets</button>
//       <div>
//         {generatedTickets.length > 0 && (
//           <div>
//             <h3>Generated Tickets:</h3>
//             <ul>
//               {generatedTickets.map((ticket, index) => (
//                 <li key={index}>{ticket}</li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default TicketGenerator;

import React, { useState } from 'react';
import './App.css'; 

function TicketGenerator() {
  const [numTickets, setNumTickets] = useState(0);
  const [generatedTickets, setGeneratedTickets] = useState([]);
  const [selectedTicket, setSelectedTicket] = useState('');
  const [winner, setWinner] = useState('');

  const handleGenerateTickets = () => {
    if (numTickets <= 0) {
      alert("Please enter a valid number of tickets greater than zero.");
      return;
    }

    const tickets = [];
    for (let i = 0; i < numTickets; i++) {
      const ticket = Math.floor(1000 + Math.random() * 9000);
      tickets.push(ticket);
    }
    setGeneratedTickets(tickets);
  };

  const handleDrawWinner = () => {
    if (generatedTickets.length === 0) {
      alert("Please generate tickets first.");
      return;
    }

    const randomIndex = Math.floor(Math.random() * generatedTickets.length);
    const winningTicket = generatedTickets[randomIndex];
    setWinner(winningTicket);
  };

  return (
    <div className="ticket-generator-container"> 
      <h2>Ticket Generator</h2>
      <label>
        Number of Tickets:
        <input
          type="number"
          value={numTickets}
          onChange={(e) => setNumTickets(parseInt(e.target.value))}
        />
      </label>
      <button onClick={handleGenerateTickets}>Generate Tickets</button>

      {generatedTickets.length > 0 && (
        <div>
          <label>
            Select Ticket:
            <select value={selectedTicket} onChange={(e) => setSelectedTicket(e.target.value)}>
              <option value="">Select a ticket</option>
              {generatedTickets.map((ticket, index) => (
                <option key={index} value={ticket}>{ticket}</option>
              ))}
            </select>
          </label>
          <button onClick={handleDrawWinner}>Draw Winner</button>
        </div>
      )}

      {winner && (
        <div>
          <h3>Winner:</h3>
          <p>The winning ticket is: {winner}</p>
        </div>
      )}
    </div>
  );
}

export default TicketGenerator;
