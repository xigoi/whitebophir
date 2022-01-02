/**
 *                        WHITEBOPHIR
 *********************************************************
 * @licstart  The following is the entire license notice for the
 *  JavaScript code in this page.
 *
 * Copyright (C) 2013  Ophir LOJKINE
 *
 *
 * The JavaScript code in this page is free software: you can
 * redistribute it and/or modify it under the terms of the GNU
 * General Public License (GNU GPL) as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option)
 * any later version.  The code is distributed WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.
 *
 * As additional permission under GNU GPL version 3 section 7, you
 * may distribute non-source (e.g., minimized or compacted) forms of
 * that code without the copy of the GNU GPL normally required by
 * section 4, provided you include this license notice and a URL
 * through which recipients can access the Corresponding Source.
 *
 * @licend
 */

(function() { //Code isolation
  //Indicates the id of the shape the user is currently drawing or an empty string while the user is not drawing

  const pushups = document.getElementById('pushups');

  pushups.addEventListener('click', (evt) => {
    evt.preventDefault();
    Tools.drawAndSend({
      'type': 'rect',
      'id': -1,
      'pushups': +pushups.innerText + (evt.shiftKey ? -10 : 10),
    }, pushupTool);
  });

  function draw(data) {
    pushups.innerText = data.pushups;
  }

  var pushupTool = {
    "name": "Pushups",
    "shortcut": "r",
    "listeners": {
      "press": () => { },
      "move": () => { },
      "release": () => { },
    },
    "draw": draw,
    "mouseCursor": "crosshair",
    "stylesheet": "tools/rect/rect.css"
  };
  Tools.register(pushupTool);

})(); //End of code isolation
