import {MigrationInterface, QueryRunner} from "typeorm";

export class addressIdInEmployee1649322922250 implements MigrationInterface {
    name = 'addressIdInEmployee1649322922250'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employee" ADD "address_id_id" uuid`);
        await queryRunner.query(`ALTER TABLE "employee" ADD CONSTRAINT "UQ_115af053a363c6cdb5fa0d65ee7" UNIQUE ("address_id_id")`);
        await queryRunner.query(`ALTER TABLE "employee" ADD CONSTRAINT "FK_115af053a363c6cdb5fa0d65ee7" FOREIGN KEY ("address_id_id") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employee" DROP CONSTRAINT "FK_115af053a363c6cdb5fa0d65ee7"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP CONSTRAINT "UQ_115af053a363c6cdb5fa0d65ee7"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "address_id_id"`);
    }

}
