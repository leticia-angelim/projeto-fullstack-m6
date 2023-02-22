import { MigrationInterface, QueryRunner } from "typeorm";

export class createEntities1677032350794 implements MigrationInterface {
    name = 'createEntities1677032350794'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "photos" RENAME COLUMN "gallery_img" TO "url"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "photos" RENAME COLUMN "url" TO "gallery_img"`);
    }

}
