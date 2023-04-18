document
  .getElementById("feedback-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); 
    var mailtoLink = `https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=braincleanser908@gmail.com`;
    window.open(mailtoLink);
  });