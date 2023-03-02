import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";
import AppDataSource from "../../data-source";
import nodemailer from "nodemailer";
import crypto from "crypto";
import "dotenv/config";

const forgotPasswordService = async (email: string): Promise<void> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ email });

  if (!user) {
    throw new AppError("User not registered", 404);
  }

  const token = crypto.randomBytes(4).toString("hex");

  const now = new Date();
  now.setHours(now.getHours() + 1);

  await userRepository.update(user.id, {
    passwordResetToken: token,
    passwordResetExpires: now,
  });

  const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  transporter.sendMail({
    from: "Motors Shop <motorsshop@mail.com>",
    to: email,
    subject: "Recuperação de Senha!",
    html: `<p>Informe <a href="http://localhost:3000/resetPassword">aqui</a> sua nova senha utilizando o código: ${token}.</p>`,
  });
};

export default forgotPasswordService;
