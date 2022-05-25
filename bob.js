//TODO learn regex

const hey = (message) => {
  console.log(message.match("[^0-9]"));
  if (message.endsWith("?") && message.toUpperCase() !== message) {
    console.log("Sure");
    return "Sure.";
  }
  if (message.toUpperCase() === message && message.endsWith("?")) {
    console.log("Calm down, I know what I'm doing!");
    return "Calm down, I know what I'm doing!";
  }
  if (message.toUpperCase() === message && !parseInt(message)) {
    console.log(parseInt(message));
    console.log("Whoa, chill out!");
    return "Whoa, chill out!";
  }
  if (!message) {
    console.log("Fine. Be that way!");
    return "Fine. Be that way!";
  }
  console.log("w/e");
  return "Whatever";
};
hey("1, 2, 3");
hey("hey");
//Bob is a lackadaisical teenager. In conversation, his responses are very limited.

// Bob answers 'Sure.' if you ask him a question, such as "How are you?".

// He answers 'Whoa, chill out!' if you YELL AT HIM (in all capitals).

// He answers 'Calm down, I know what I'm doing!' if you yell a question at him.

// He says 'Fine. Be that way!' if you address him without actually saying anything.

// He answers 'Whatever.' to anything else.

// Bob's conversational partner is a purist when it comes to written communication and always follows normal rules regarding sentence punctuation in English.
