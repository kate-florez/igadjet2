var mw = mw || {};

mw.igadget2 = {};

var iterator = mw.igadget2;

jQuery(document).ready(function moovwebModuleLoad() {
  for (var moduleKey in iterator) {
    if (iterator.hasOwnProperty(moduleKey)) {
      var module = iterator[moduleKey];
      if (module.name && (jQuery("body").hasClass(module.name) || module.name === "mw-global") && typeof module.init !== 'undefined') {
        module.init();
      }
    }
  }

  function initialize() {
    var $mwHeader = $(".mw-header");
    $mwHeader.find(".mw-menu-btn").on("click", function() {
      $mwHeader.find("#Menu").toggle();
    });
    $(".modalContainer").DOMNodeAppear(function() {
      $(this).css("top", window.pageYOffset + 15);
    });
  }
  initialize();

});
