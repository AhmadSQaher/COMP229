import nodemailer from 'nodemailer';

export const sendContactEmail = async (formData) => {
  const transporter = nodemailer.createTransport({
    service: 'yahoo',
    auth: {
      user: 'sameerqaher@yahoo.ca',     
      pass: 'cijlgudmwtfapxtn'               
    }
  });

  const mailOptions = {
    from: 'sameerqaher@yahoo.ca',           
    replyTo: formData.emailAddress,          
    to: 'sameerqaher@yahoo.ca',              
    subject: `New Contact Form Submission from ${formData.firstName} ${formData.lastName}`,
    text: `
      Name: ${formData.firstName} ${formData.lastName}
      Contact Number: ${formData.contactNumber}
      Email: ${formData.emailAddress}
      Message: ${formData.message}
    `
  };

  await transporter.sendMail(mailOptions);
};