// ==UserScript==
// @name         Old Drip
// @namespace    https://www.getdrip.com/*
// @version      0.1
// @description  Bringing back the old version of drip
// @author       Shane White
// @match        https://www.getdrip.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
       $( "link" ).each(function( index ) {
       var currentCSS = $(this).attr("href");
           if (currentCSS.indexOf("application") >= 0)
           {
               $(this).attr("href", "https://shanefromfargo.github.io/drip-reskin/OldDrip.css")
           }
           if (currentCSS.indexOf("favicon") >= 0)
           {
               $(this).attr("href", "https://shanefromfargo.github.io/drip-reskin/favicon.ico")
           }
       });
        $(".logo-picker").remove();
        $(".drip-logo").html('<img src="https://shanefromfargo.github.io/drip-reskin/drip_logo.jpg" width="42"/>');
})();