import {MigrationInterface, QueryRunner} from "typeorm";

export class addressInEmployee1649323148262 implements MigrationInterface {
    name = 'addressInEmployee1649323148262'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employee" DROP CONSTRAINT "FK_115af053a363c6cdb5fa0d65ee7"`);
        await queryRunner.query(`ALTER TABLE "employee" RENAME COLUMN "address_id_id" TO "address_id"`);
        await queryRunner.query(`ALTER TABLE "employee" RENAME CONSTRAINT "UQ_115af053a363c6cdb5fa0d65ee7" TO "UQ_2a4f5082f1be346e2b8cdec2194"`);
        await queryRunner.query(`ALTER TABLE "employee" ADD CONSTRAINT "FK_2a4f5082f1be346e2b8cdec2194" FOREIGN KEY ("address_id") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employee" DROP CONSTRAINT "FK_2a4f5082f1be346e2b8cdec2194"`);
        await queryRunner.query(`ALTER TABLE "employee" RENAME CONSTRAINT "UQ_2a4f5082f1be346e2b8cdec2194" TO "UQ_115af053a363c6cdb5fa0d65ee7"`);
        await queryRunner.query(`ALTER TABLE "employee" RENAME COLUMN "address_id" TO "address_id_id"`);
        await queryRunner.query(`ALTER TABLE "employee" ADD CONSTRAINT "FK_115af053a363c6cdb5fa0d65ee7" FOREIGN KEY ("address_id_id") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
