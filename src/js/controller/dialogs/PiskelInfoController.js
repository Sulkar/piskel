(function () {
  var ns = $.namespace('pskl.controller.dialogs');

  ns.PiskelInfoController = function () {};
  console.log("in")
  pskl.utils.inherit(ns.PiskelInfoController, ns.AbstractDialogController);

  ns.PiskelInfoController.prototype.init = function () {
    this.superclass.init.call(this);
    
  };
})();
