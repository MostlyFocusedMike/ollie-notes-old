const { Model } = require('objection');
const knex = require('../knex');

Model.knex(knex); // Give the knex object to objection.

// Using base class, lets us add generic queries to every model
class Queries extends Model {
    static async all(filtered) {
        return this.query();
    }

    static async find(id) {
        return this.query().where('id', '=', id);
    }

    static async where(column, value) {
        return this.query().where(column, '=', value);
    }
}

module.exports = Queries;
