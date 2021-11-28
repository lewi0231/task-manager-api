const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "paullewis1308@gmail.com",
    subject: "Thanks for joining!",
    text: `Welcome to the app ${name} let me know how you get along with the app.`,
  });
};

const sendCancelEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "paullewis1308@gmail.com",
    subject: "Sorry to see you go!",
    text: `We would love to hear your feedback, ${name}`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelEmail,
};
