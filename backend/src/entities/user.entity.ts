import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Exclude } from "class-transformer";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 150 })
  name: string;

  @Column({ length: 127, unique: true })
  email: string;

  @Column({ length: 11 })
  cpf: string;

  @Column({ length: 14 })
  phone: string;

  @Column()
  birth_date: Date;

  @Column()
  description: string;

  @Column({ length: 8 })
  cep: number;

  @Column()
  state: string;

  @Column()
  city: string;

  @Column()
  street: string;

  @Column()
  number: number;

  @Column()
  complement: string;

  @Column()
  account: string;

  @Column({ length: 120 })
  @Exclude()
  password: string;

  @Column()
  @Exclude()
  confirm_password: string;

  //   @OneToMany(() => Announcement, (announcement) => announcement.user, { cascade: true })
  //   announcements: Announcement[];
}
