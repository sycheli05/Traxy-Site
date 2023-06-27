// import nodemailer from 'nodemailer';
// import sgTransport from 'nodemailer-sendgrid-transport';

// const transporter = {
//     auth: {
//         // Use your SendGrid API key here
//         api_key: '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'
//     }
// }

// const mailer = nodemailer.createTransport(sgTransport(transporter));
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export default async (req, res) => {
    console.log(req.body)
    const { fullName, email, phoneNumber, pricingPlan, wilaya, vehicles, text } = req.body;

    const data = {
        to: 's3openservices@gmail.com',
        from: 'sales@traxy.org',
        subject: 'Demande de devis - CLIENT',
        text: text,
        html: `
            <b>From:</b> ${fullName} <br /> 
            <b>Phone Number:</b> ${phoneNumber} <br /> 
            <b>E-mail:</b> ${email} <br /> 
            <b>Pricing Plan:</b> ${pricingPlan} <br /> 
            <b>Wilaya:</b> ${wilaya} <br />
            <b>Vehicles quantity:</b> ${vehicles} <br />
            <b>More details:</b> ${text} <br />
        `
    };
    sgMail
        .send(data)
        .then((response) => {
            console.log(response[0].statusCode)
            console.log(response[0].headers)
        })
        .catch((error) => {
            console.error(error)
        })
    // try {
    //     const response = await mailer.sendMail(data);
    //     console.log(response)
    //     res.status(200).send("Email send successfully")
    // } catch (error) {
    //     console.log(error);
    //     res.status(500).send("Error proccessing charge");
    // }
}
