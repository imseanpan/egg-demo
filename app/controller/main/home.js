'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * index() {

      yield this.ctx.render('main/html.njk', { view: 'test1' });
    }
  }
  return HomeController;
};
