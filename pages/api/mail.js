const body = JSON.parse(req.body);

const mail = require('@sendgrid/mail');
mail.setApiKey(process.env.SENDGRID_API_KEY);
const message = `
    Name: ${body.name}rn
    Email: ${body.email}rn
    Message: ${body.message}
`;

mail.send({
    to: 'mohammedbensadia195@gmail.com', // Change to your recipient
    from: 'sales@traxy.org', // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}).then(() => {
    res.status(200).json({ status: 'Ok' });
});