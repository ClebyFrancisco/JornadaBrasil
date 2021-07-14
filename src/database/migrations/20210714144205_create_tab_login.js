exports.up = function (knex) {
  return knex.schema.dropTableIfExists('users').createTable('users', table => {
    table.increments('idUser', 'INT').notNullable().primary()
    table.specificType('username', 'VARCHAR(18)').notNullable().unique()
    table.specificType('password', 'VARCHAR(12)').notNullable()
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
