import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1677435181087 implements MigrationInterface {
    name = 'createTables1677435181087'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "cep"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "state"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "city"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "street"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "number"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "complement"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "complement" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "number" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "street" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "city" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "state" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "cep" character varying(8) NOT NULL`);
    }

}
