import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";

import { User } from "./user.entity";
import { Announcement } from "./announcement.entity";

@Entity("comments")
export class Comments {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column({ length: 1500 })
  comment: string;
  @ManyToOne(() => User, { onDelete: "CASCADE" })
  user: User;
  @ManyToOne(() => Announcement, { onDelete: "CASCADE" })
  announcement: Announcement;
}
