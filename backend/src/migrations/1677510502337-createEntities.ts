import { MigrationInterface, QueryRunner } from "typeorm";

export class createEntities1677510502337 implements MigrationInterface {
    name = 'createEntities1677510502337'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "address" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "cep" character varying NOT NULL, "state" character varying NOT NULL, "city" character varying NOT NULL, "street" character varying NOT NULL, "number" integer NOT NULL, "complement" character varying NOT NULL, CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "cep"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "state"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "city"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "street"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "number"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "complement"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "addressId" uuid`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_bafb08f60d7857f4670c172a6ea" UNIQUE ("addressId")`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_bafb08f60d7857f4670c172a6ea" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_bafb08f60d7857f4670c172a6ea"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_bafb08f60d7857f4670c172a6ea"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "addressId"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "complement" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "number" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "street" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "city" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "state" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "cep" character varying(8) NOT NULL`);
        await queryRunner.query(`DROP TABLE "address"`);
    }

}
