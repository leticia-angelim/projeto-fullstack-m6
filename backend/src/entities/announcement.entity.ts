import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from "./user.entity";

@Entity("announcements")
export class Announcement {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  announcement_type: string;

  @Column()
  title: string;

  @Column()
  year: number;

  @Column()
  mileage: number;

  @Column()
  price: number;

  @Column()
  description: string;

  @Column()
  vehicle_type: string;

  @Column()
  cover_img: string;

  @Column()
  gallery_img: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => User, { onDelete: "CASCADE" })
  user: User;
}
