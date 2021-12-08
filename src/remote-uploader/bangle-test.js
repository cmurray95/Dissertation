var mainmenu = {
    "" : {
      "title" : "-- Main Menu --"
    },
    "Backlight On" : function() { LED1.set(); },
    "Backlight Off" : function() { LED1.reset(); },
    "Submenu" : function() { E.showMenu(submenu); },
    "Exit" : function() { E.showMenu(); },
  };
  
  // Submenu
  var submenu = {
    "" : {
      "title" : "-- SubMenu --"
    },
    "One" : undefined, // do nothing
    "Two" : undefined, // do nothing
    "< Back" : function() { E.showMenu(mainmenu); },
  };
  
  E.showMenu(mainmenu);