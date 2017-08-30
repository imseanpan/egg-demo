'use strict';

module.exports = app => {
  class HumanController extends app.Controller {
    * index() {
      // const ss = [ '', 'active', '', '' ];
      // const human = yield app.mysql.query('select * from human');

      yield this.ctx.render('main/html.njk', { view: 'human' });
    }
    * get() {

      const row = this.ctx.params;
      let sql = 'select * from human';

      if (row.name) {
        sql += ` where name LIKE '%${row.name}%'`;
      }

      const results = yield app.mysql.query(sql);
      yield this.ctx.body = results;
    }
    * create() {

      const row = this.ctx.request.body;

      const result = yield app.mysql.insert('human', row);
      const updateSuccess = result.affectedRows === 1;
      yield this.ctx.body = { success: updateSuccess };
    }

    * update() {

      const row = this.ctx.request.body;

      const result = yield app.mysql.update('human', row);
      const updateSuccess = result.affectedRows === 1;

      yield this.ctx.body = { success: updateSuccess };
    }

    * delete() {
      const row = this.ctx.request.body;

      const result = yield app.mysql.delete('human', row);
      const updateSuccess = result.affectedRows === 1;

      yield this.ctx.body = { success: updateSuccess };
    }
  }
  return HumanController;
};
