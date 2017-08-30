'use strict';

module.exports = app => {
  class StoreController extends app.Controller {
    * index() {

      const ss = [ '', '', 'active', '' ];
      yield this.ctx.render('main/store.njk', { selected: ss });
    }


  }
  return StoreController;
};
