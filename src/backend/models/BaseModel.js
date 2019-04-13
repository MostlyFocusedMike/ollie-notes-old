const { Model } = require('objection');
const knex = require('./knex');

Model.knex(knex); // Give the knex object to objection.

/**
 * A base class that lets us add generic queries to every model
 */
class BaseModel extends Model {
    /**
     *  Essentially just a shortcut for `this.query`
     * @return {array} An array of all instances of the model in the DB
     */
    static async all() {
        return this.query();
    }

    /**
     * Find an instance of a model based on the id
     * @param {number} id - The id of the instance you want to find
     * @return {object|undefined} The instance as an object or `undefined` if there is no match
     */
    static async find(id) {
        const user = await this.query().where('id', '=', id);
        return user[0];
    }

    /**
     * Find all instances of a model based on the value of a given column
     * @param {string} column - The name of the column
     * @param {string|number} value - The value of the given column
     * @return {array} An array of all matches, will be empty if no matches found
     */
    static async where(column, value) {
        return this.query().where(column.toLowerCase(), '=', value.toLowerCase());
    }
}

module.exports = BaseModel;
