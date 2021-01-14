import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateTravel1610584441760 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'travels',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'local',
            type: 'varchar',
          },
          {
            name: 'month',
            type: 'integer',
          },
          {
            name: 'year',
            type: 'integer',
          },
          {
            name: 'country_id',
            type: 'integer',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'CountryTravel',
            columnNames: ['country_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'countries',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('travels');
  }
}
