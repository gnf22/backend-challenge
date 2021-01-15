module.exports = {
  type: "postgres",
  host: process.env.POSTGRES_HOST,
  extra: {
    socketPath: process.env.POSTGRES_HOST
  },
  synchronize: true,
  logging: false,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  entities: [
    "./dist/modules/**/infra/typeorm/entities/*.js"
  ],
  migrations: [
    "./dist/shared/infra/typeorm/migrations/*.js"
  ],
  cli: {
    "migrationsDir": "./src/shared/infra/typeorm/migrations"
  }
}
