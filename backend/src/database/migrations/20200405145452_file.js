
exports.up = function(knex) {
  return(
    knex.schema.createTable('file',function (table){
      table.increments().primary();
      table.string('title', 16).notNullable();
      table.string('text',255).notNullable();

    })
  )
};

exports.down = function(knex) {
  return knex.schema.dropTable('files');
};
