import nodemailer from 'nodemailer'

export async function getMailClient(){
  const account = await nodemailer.createTestAccount()

  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure:false,
    auth:{
      user: account.user,
      password: account.pass,
    }
  })

  return transporter
}