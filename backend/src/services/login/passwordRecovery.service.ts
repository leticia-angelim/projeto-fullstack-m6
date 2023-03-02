import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";
import AppDataSource from "../../data-source";
import nodemailer from "nodemailer";
import { hash } from "bcryptjs";
import crypto from "crypto";

const passwordRecoveryService = async (email: string): Promise<void> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ email });

  if (!user) {
    throw new AppError("User not registered", 404);
  }

  const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "e8a00225db8072",
      pass: "2cd4dc07d8a5fd",
    },
  });

  const newPassword = crypto.randomBytes(4).toString("hex");

  transporter
    .sendMail({
      from: "Motors Shop <72f697ab36-50e36b@inbox.mailtrap.io>",
      to: email,
      subject: "Recuperação de Senha!",
      html: `<p>Olá, sua nova senha para acessar o nosso sistema é: ${newPassword}</p><br/><a href="http://localhost:3000/login">Faça o login aqui</a>`,
    })
    .then(() => {
      hash(newPassword, 10).then((password) => {
        userRepository.update(user.id, {
          password,
        });
      });
    });
};

export default passwordRecoveryService;
