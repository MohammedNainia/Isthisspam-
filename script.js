const messageInput = document.getElementById("message-input");
const result = document.getElementById("result");
const checkMessageButton = document.getElementById("check-message-btn");

// Define regular expressions for each spam word
const spamWords = [
  "please help",
  "assist me",
  "\\d+ (?:hundred|thousand|million|billion)? dollars",
  "(?:^|\\s)fr[e3][e3] m[o0]n[e3]y(?:$|\\s)",
  "(?:^|\\s)[s5][t7][o0][c{[(]k [a@4]l[e3]r[t7](?:$|\\s)",
  "(?:^|\\s)d[e3][a@4]r fr[i1|][e3]nd(?:$|\\s)",
  "access now",
  "act",
  "act immediately",
  "act now",
  "act now!",
  "action",
  "action required",
  "apply here",
  "apply now",
  "apply now!",
  "apply online",
  "become a member",
  "before it's too late",
  "being a member",
  "buy",
  "buy direct",
  "buy now",
  "buy today",
  "call",
  "call free",
  "call free/now",
  "call me",
  "call now",
  "call now!",
  "can we have a minute of your time?",
  "cancel now",
  "cancellation required",
  "claim now",
  "click",
  "click below",
  "click here",
  "click me to download",
  "click now",
  "click this link",
  "click to get",
  "click to remove",
  "contact us immediately",
  "deal ending soon",
  "do it now",
  "do it today",
  "don't delete",
  "don't hesitate",
  "don't waste time",
  "don't delete",
  "exclusive deal",
  "expire",
  "expires today",
  "final call",
  "for instant access",
  "for only",
  "for you",
  "friday before [holiday]",
  "get it away",
  "get it now",
  "get now",
  "get paid",
  "get started",
  "get started now",
  "great offer",
  "hurry up",
  "immediately",
  "info you requested",
  "information you requested",
  "instant",
  "limited time",
  "new customers only",
  "now",
  "now only",
  "offer expires",
  "once in lifetime",
  "only",
  "order now",
  "order today",
  "please read",
  "purchase now",
  "sign up free",
  "sign up free today",
  "supplies are limited",
  "take action",
  "take action now",
  "this won't last",
  "time limited",
  "today",
  "top urgent",
  "trial",
  "urgent",
  "what are you waiting for?",
  "while supplies last",
  "you are a winner",
  "all",
  "all natural",
  "all natural/new",
  "all new",
  "all-natural",
  "all-new",
  "allowance",
  "as seen on",
  "as seen on oprah",
  "at no cost",
  "auto email removal",
  "avoice bankruptcy",
  "avoid",
  "beneficial offer",
  "beneficiary",
  "bill 1618",
  "brand new pager",
  "bulk email",
  "buying judgements",
  "buying judgments",
  "cable converter",
  "calling creditors",
  "can you help us?",
  "cancel at any time",
  "cannot be combined",
  "free money",
  "free followers",
  " to win",
];

const spamWordsRegex = spamWords.map(
  (word) => new RegExp(`\\b${word}\\b`, "i")
);

// Function to check if the message contains any spam words
const isSpam = (msg) => spamWordsRegex.some((regex) => regex.test(msg));

// Event listener for the check message button
checkMessageButton.addEventListener("click", () => {
  if (!messageInput.value.trim()) {
    alert("Please enter a message.");
    return;
  }

  result.textContent = isSpam(messageInput.value)
    ? "Oh no! This looks like a spam message."
    : "This message does not seem to contain any spam.";
  messageInput.value = "";
});

// Function to show the pop-up window
function showPopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "block"; // Ensure pop-up is displayed
  setTimeout(function () {
    popup.classList.add("show"); // Add class to trigger fade-in animation after a delay
  }, 50); // Adjust delay as needed
}

// Function to close the pop-up window
function closePopup() {
  var popup = document.getElementById("popup");
  popup.classList.remove("show"); // Remove class to trigger fade-out animation
  setTimeout(function () {
    popup.style.display = "none"; // Hide pop-up after fade-out animation completes
  }, 100); // Match the duration of the fade-out animation
}

// Add event listener for keydown event on messageInput
messageInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    // If the pressed key is Enter, trigger a click event on checkMessageButton
    checkMessageButton.click();
  }
});
