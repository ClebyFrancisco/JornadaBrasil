exports.up = function (knex) {
  return knex.schema
    .dropTableIfExists('logins')
    .createTable('logins', table => {
      table.increments('idLogin', 'INT').notNullable().primary()
      table.specificType('login', 'VARCHAR(18)').notNullable().unique()
      table.specificType('password', 'VARCHAR(12)').notNullable()
    })
}

exports.down = function (knex) {
  return knex.schema.dropTable('logins')
}
