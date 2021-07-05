(function () {
  var ns = $.namespace('pskl.controller.dialogs');

  ns.PiskelInfoController = function () {};
 
  pskl.utils.inherit(ns.PiskelInfoController, ns.AbstractDialogController);

  ns.PiskelInfoController.prototype.init = function () {
    this.superclass.init.call(this);
    
  };
})();
