const [formElem] = ["form"].map(id => document.getElementById(id));



const send = ({ to, subject, text }) => {
  fetch("https://mail-sender-production.up.railway.app/receive", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ to, subject, text }),
  });
};

const sendMessage = () => {
  const [to, subject, text] = ["to", "subject", "text"].map(
    id => document.getElementById(id).value
  );

  send({ to, subject, text });
};

formElem.addEventListener("submit", e => {
  e.preventDefault();
  sendMessage();

});
