'use strict';

module.exports = app => {
  class AllocationController extends app.Controller {
    * index() {

      const ss = [ '', '', '', 'active' ];
      yield this.ctx.render('main/allocation.njk', { selected: ss });
    }


  }
  return AllocationController;
};
