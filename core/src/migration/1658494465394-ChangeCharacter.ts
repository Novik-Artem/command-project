import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeCharacter1658494465394 implements MigrationInterface {
  name = "ChangeCharacter1658494465394";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "characters" ("char_id" SERIAL NOT NULL, "name" character varying NOT NULL, "birthday" character varying NOT NULL, "occupation" text NOT NULL, "img" character varying NOT NULL, "status" character varying NOT NULL, "nickname" character varying NOT NULL, CONSTRAINT "PK_78d679ad0775e5f2aa4cd18fb5e" PRIMARY KEY ("char_id"))`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "characters"`);
  }
}
