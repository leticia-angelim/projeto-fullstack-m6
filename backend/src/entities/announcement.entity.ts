import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { Comments } from "./Comments";
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
  @OneToMany(() => Comments, (comment) => comment.announcement, {
    cascade: true,
  })
  comments: Comments[]
}
