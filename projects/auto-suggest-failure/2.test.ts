'use strict';

import suman, {s} from 'suman';
const {Test} = suman.init(module);

Test.create(function (it: s.ItFn) {
<<<<<<< HEAD
  
  //fooagaoigeon
=======

  //fooagaoigeon

>>>>>>> 5e3e9dde543a84cc8deda39030fc69e0ac77042a
  
  it.define('help')
<<<<<<< HEAD
  .cb(true)
  .run();
  
=======
    .cb(true)
    .run(function(){

    });


>>>>>>> 5e3e9dde543a84cc8deda39030fc69e0ac77042a
  it('works', (t: s.ITestCaseParam) => {
  
  });
  
});