'use strict';

module.exports = app => {
  app.get('/', 'main.home.index');
  app.get('/human', 'main.human.index');
  app.get('/store', 'main.store.index');
  app.get('/allocation', 'main.allocation.index');

  app.get('/human/get', 'main.human.get');
  app.get('/human/get/:name', 'main.human.get');
  app.post('/human/update', 'main.human.update');
  app.post('/human/create', 'main.human.create');
  app.post('/human/delete', 'main.human.delete');
};
