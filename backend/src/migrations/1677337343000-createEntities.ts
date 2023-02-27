import { MigrationInterface, QueryRunner } from "typeorm";

export class createEntities1677337343000 implements MigrationInterface {
    name = 'createEntities1677337343000'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "announcements" ADD "is_published" boolean NOT NULL DEFAULT true`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "announcements" DROP COLUMN "is_published"`);
    }

}
