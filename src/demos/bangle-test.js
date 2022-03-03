var mainmenu = {
    "" : {
      "title" : "-- Main Menu --"
    },
    "Backlight On" : function() { LED1.set(); },
    "Backlight Off" : function() { LED1.reset(); },
    "Submenu" : function() { E.showMenu(submenu); },
    "Exit" : function() { E.showMenu(); },
  };
E.showMenu(mainmenu);