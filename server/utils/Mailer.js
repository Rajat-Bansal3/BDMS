const mailer= require ("nodemailer")

const sendMail = async(option)=> {
    const transporter = mailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth:{
            user:process.env.EMAIL_USER,
            pass:process.env.EMAIL_PASS
        }
    })
    const emailOptions = {
        from: "Blood Request <BloodLink@gmail.com>",
        to:option.email,
        subject:option.subject,
        text:option.text 
    }
    transporter.sendMail(emailOptions)
}
module.exports = sendMail