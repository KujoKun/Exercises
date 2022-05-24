function createVisitor(name, age, ticketId) {
  return { name, age, ticketId };
}
createVisitor("Verena Nardi", 45, "H32AZ123");

function revokeTicket(visitor) {
  if (!visitor.ticketId) return visitor;
  visitor.ticketId = null;
  return visitor;
}
revokeTicket({
  name: "Verena Nardi",
  age: 45,
  ticketId: "H32AZ123",
});
function ticketStatus(tickets, ticketId) {
  if (ticketId in tickets) {
    if (tickets[ticketId]) return `sold to ${tickets[ticketId]}`;
    return "not sold";
  }
  return "unknown ticket id";
}
const tickets = {
  "0H2AZ123": null,
  "23LA9T41": "Verena Nardi",
};

ticketStatus(tickets, "RE90VAW7");
// => 'unknown ticket id'

ticketStatus(tickets, "0H2AZ123");
// => 'not sold'

ticketStatus(tickets, "23LA9T41");
// => 'sold to Verena Nardi'

function simpleTicketStatus(tickets, ticketId) {
  return tickets[ticketId] ?? "invalid ticket !!!";
}

simpleTicketStatus(tickets, "23LA9T41");
// => 'Verena Nardi'

simpleTicketStatus(tickets, "0H2AZ123");
// => 'invalid ticket !!!'

simpleTicketStatus(tickets, "RE90VAW7");
// => 'invalid ticket !!!'
function gtcVersion(visitor) {
  return visitor?.gtc?.version;
}

gtcVersion({
  name: "Verena Nardi",
  age: 45,
  ticketId: "H32AZ123",
  gtc: {
    signed: true,
    version: "2.1",
  },
});
