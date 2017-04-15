
<!DOCTYPE html>
<html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <title>Get started with RAPPER</title>
  <meta name="viewport" content="width=device-width">

 
  
  <link rel="stylesheet" href="../css/normalize.css">
  <link href="../css/jquery-ui-1.8.22.custom.css" rel="stylesheet">

  <!--<link href="../css/jquery-ui.css" rel="stylesheet">-->

  <link href="../css/bootstrap.css" rel="stylesheet">
  <link href="../css/bootstrap-responsive.css" rel="stylesheet">
  <link rel="stylesheet" href="../css/style.css">

 
  <link rel="stylesheet" href="../css/etch.css">
  <link rel="stylesheet" href="../css/frame.css">

  <link rel="stylesheet" href="../css/codemirror.css">

  
  <!-- newly added  mixpanel-->
  
  <script type="text/javascript" async="" src="../js/mixpanel-2.1.min.js"></script>
  <script type="text/javascript">(function(c,a){window.mixpanel=a;var b,d,h,e;b=c.createElement("script");b.type="text/javascript";b.async=!0;b.src=("https:"===c.location.protocol?"https:":"http:")+'//cdn.mxpnl.com/libs/mixpanel-2.1.min.js';d=c.getElementsByTagName("script")[0];d.parentNode.insertBefore(b,d);a._i=[];a.init=function(b,c,f){function d(a,b){var c=b.split(".");2==c.length&&(a=a[c[0]],b=c[1]);a[b]=function(){a.push([b].concat(Array.prototype.slice.call(arguments,0)))}}var g=a;"undefined"!==typeof f?
  g=a[f]=[]:f="mixpanel";g.people=g.people||[];h="disable track track_pageview track_links track_forms register register_once unregister identify name_tag set_config people.identify people.set people.increment".split(" ");for(e=0;e<h.length;e++)d(g,h[e]);a._i.push([b,c,f])};a.__SV=1.1})(document,window.mixpanel||[]);
  mixpanel.init("ebf718d309dd2bc0e1c4d55d2fe550b8");</script>
  <!--  -->
 <g:hiddenField name="hiddenPageId" value="" />
 <g:hiddenField name="hiddenPageName" value="" />
 <g:hiddenField name="hiddenProjectId" value="" />
  

 <style type="text/css">    
  .CodeMirror {border-top: 1px solid black; border-bottom: 1px solid black;}
  .CodeMirror-collapserange { width: .6em; }
 </style>  
  
<style id="ace_editor">
.ace_editor {
    position: absolute;
    overflow: hidden;
    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Droid Sans Mono', 'Consolas', monospace;
    font-size: 12px;
}

.ace_scroller {
    position: absolute;
    overflow: hidden;
}

.ace_content {
    position: absolute;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    cursor: text;
}

.ace_gutter {
    position: absolute;
    overflow : hidden;
    height: 100%;
    width: auto;
    cursor: default;
    z-index: 4;
}

.ace_scroller.horscroll {
    box-shadow: 17px 0 16px -16px rgba(0, 0, 0, 0.4) inset;
}

.ace_gutter-cell {
    padding-left: 19px;
    padding-right: 6px;
}

.ace_gutter-cell.ace_error {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUM2OEZDQTQ4RTU0MTFFMUEzM0VFRTM2RUY1M0RBMjYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QUM2OEZDQTU4RTU0MTFFMUEzM0VFRTM2RUY1M0RBMjYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBQzY4RkNBMjhFNTQxMUUxQTMzRUVFMzZFRjUzREEyNiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBQzY4RkNBMzhFNTQxMUUxQTMzRUVFMzZFRjUzREEyNiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkgXxbAAAAJbSURBVHjapFNNaBNBFH4zs5vdZLP5sQmNpT82QY209heh1ioWisaDRcSKF0WKJ0GQnrzrxasHsR6EnlrwD0TagxJabaVEpFYxLWlLSS822tr87m66ccfd2GKyVhA6MMybgfe97/vmPUQphd0sZjto9XIn9OOsvlu2nkqRzVU+6vvlzPf8W6bk8dxQ0NPbxAALgCgg2JkaQuhzQau/El0zbmUA7U0Es8v2CiYmKQJHGO1QICCLoqilMhkmurDAyapKgqItezi/USRdJqEYY4D5jCy03ht2yMkkvL91jTTX10qzyyu2hruPRN7jgbH+EOsXcMLgYiThEgAMhABW85oqy1DXdRIdvP1AHJ2acQXvDIrVHcdQNrEKNYSVMSZGMjEzIIAwDXIo+6G/FxcGnzkC3T2oMhLjre49sBB+RRcHLqdafK6sYdE/GGBwU1VpFNj0aN8pJbe+BkZyevUrvLl6Xmm0W9IuTc0DxrDNAJd5oEvI/KRsNC3bQyNjPO9yQ1YHcfj2QvfQc/5TUhJTBc2iM0U7AWDQtc1nJHvD/cfO2s7jaGkiTEfa/Ep8coLu7zmNmh8+dc5lZDuUeFAGUNA/OY6JVaypQ0vjr7XYjUvJM37vt+j1vuTK5DgVfVUoTjVe+y3/LxMxY2GgU+CSLy4cpfsYorRXuXIOi0Vt40h67uZFTdIo6nLaZcwUJWAzwNS0tBnqqKzQDnjdG/iPyZxo46HaKUpbvYkj8qYRTZsBhge+JHhZyh0x9b95JqjVJkT084kZIPwu/mPWqPgfQ5jXh2+92Ay7HedfAgwA6KDWafb4w3cAAAAASUVORK5CYII=");
    background-repeat: no-repeat;
    background-position: 2px center;
}

.ace_gutter-cell.ace_warning {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUM2OEZDQTg4RTU0MTFFMUEzM0VFRTM2RUY1M0RBMjYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QUM2OEZDQTk4RTU0MTFFMUEzM0VFRTM2RUY1M0RBMjYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBQzY4RkNBNjhFNTQxMUUxQTMzRUVFMzZFRjUzREEyNiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBQzY4RkNBNzhFNTQxMUUxQTMzRUVFMzZFRjUzREEyNiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pgd7PfIAAAGmSURBVHjaYvr//z8DJZiJgUIANoCRkREb9gLiSVAaQx4OQM7AAkwd7XU2/v++/rOttdYGEB9dASEvOMydGKfH8Gv/p4XTkvRBfLxeQAP+1cUhXopyvzhP7P/IoSj7g7Mw09cNKO6J1QQ0L4gICPIv/veg/8W+JdFvQNLHVsW9/nmn9zk7B+cCkDwhL7gt6knSZnx9/LuCEOcvkIAMP+cvto9nfqyZmmUAksfnBUtbM60gX/3/kgyv3/xSFOL5DZT+L8vP+Yfh5cvfPvp/xUHyQHXGyAYwgpwBjZYFT3Y1OEl/OfCH4ffv3wzc4iwMvNIsDJ+f/mH4+vIPAxsb631WW0Yln6ZpQLXdMK/DXGDflh+sIv37EivD5x//Gb7+YWT4y86sl7BCCkSD+Z++/1dkvsFRl+HnD1Rvje4F8whjMXmGj58YGf5zsDMwcnAwfPvKcml62DsQDeaDxN+/Y0qwlpEHqrdB94IRNIDUgfgfKJChGK4OikEW3gTiXUB950ASLFAF54AC94A0G9QAfOnmF9DCDzABFqS08IHYDIScdijOjQABBgC+/9awBH96jwAAAABJRU5ErkJggg==");
    background-repeat: no-repeat;
    background-position: 2px center;
}

.ace_gutter-cell.ace_info {
    background-image: url("data:image/gif;base64,R0lGODlhEAAQAMQAAAAAAEFBQVJSUl5eXmRkZGtra39/f4WFhYmJiZGRkaampry8vMPDw8zMzNXV1dzc3OTk5Orq6vDw8P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABQALAAAAAAQABAAAAUuICWOZGmeaBml5XGwFCQSBGyXRSAwtqQIiRuiwIM5BoYVbEFIyGCQoeJGrVptIQA7");
    background-position: 2px center;
}
.ace_dark .ace_gutter-cell.ace_info {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGRTk5MTVGREIxNDkxMUUxOTc5Q0FFREQyMTNGMjBFQyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGRTk5MTVGRUIxNDkxMUUxOTc5Q0FFREQyMTNGMjBFQyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkZFOTkxNUZCQjE0OTExRTE5NzlDQUVERDIxM0YyMEVDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkZFOTkxNUZDQjE0OTExRTE5NzlDQUVERDIxM0YyMEVDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+SIDkjAAAAJ1JREFUeNpi/P//PwMlgImBQkB7A6qrq/+DMC55FkIGKCoq4pVnpFkgTp069f/+/fv/r1u37r+tre1/kg0A+ptn9uzZYLaRkRHpLvjw4cNXWVlZhufPnzOcO3eOdAO0tbVPAjHDmzdvGA4fPsxIsgGSkpJmv379Ynj37h2DjIyMCMkG3LhxQ/T27dsMampqDHZ2dq/pH41DxwCAAAMAFdc68dUsFZgAAAAASUVORK5CYII=");
}

.ace_editor .ace_sb {
    position: absolute;
    overflow-x: hidden;
    overflow-y: scroll;
    right: 0;
}

.ace_editor .ace_sb div {
    position: absolute;
    width: 1px;
    left: 0;
}

.ace_editor .ace_print_margin_layer {
    z-index: 0;
    position: absolute;
    overflow: hidden;
    margin: 0;
    left: 0;
    height: 100%;
    width: 100%;
}

.ace_editor .ace_print_margin {
    position: absolute;
    height: 100%;
}

.ace_editor > textarea {
    position: absolute;
    z-index: 0;
    width: 0.5em;
    height: 1em;
    opacity: 0;
    background: transparent;
    appearance: none;
    -moz-appearance: none;
    border: none;
    resize: none;
    outline: none;
    overflow: hidden;
}

.ace_editor > textarea.ace_composition {
    background: #fff;
    color: #000;
    z-index: 1000;
    opacity: 1;
    border: solid lightgray 1px;
    margin: -1px
}

.ace_layer {
    z-index: 1;
    position: absolute;
    overflow: hidden;
    white-space: nowrap;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    /* setting pointer-events: auto; on node under the mouse, which changes
        during scroll, will break mouse wheel scrolling in Safari */
    pointer-events: none;
}

.ace_gutter .ace_layer {
    position: relative;
    min-width: 40px;
    width: auto;
    text-align: right;
    pointer-events: auto;
}

.ace_text-layer {
    color: black;
    font: inherit !important;
}

.ace_cjk {
    display: inline-block;
    text-align: center;
}

.ace_cursor-layer {
    z-index: 4;
}

.ace_cursor {
    z-index: 4;
    position: absolute;
}

.ace_cursor.ace_hidden {
    opacity: 0.2;
}

.ace_editor.multiselect .ace_cursor {
    border-left-width: 1px;
}

.ace_line {
    white-space: nowrap;
}

.ace_marker-layer .ace_step {
    position: absolute;
    z-index: 3;
}

.ace_marker-layer .ace_selection {
    position: absolute;
    z-index: 5;
}

.ace_marker-layer .ace_bracket {
    position: absolute;
    z-index: 6;
}

.ace_marker-layer .ace_active_line {
    position: absolute;
    z-index: 2;
}

.ace_marker-layer .ace_selected_word {
    position: absolute;
    z-index: 4;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
}

.ace_line .ace_fold {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;

    display: inline-block;
    height: 11px;
    margin-top: -2px;
    vertical-align: middle;

    background-image:
        url("data:image/png,%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%11%00%00%00%09%08%06%00%00%00%D4%E8%C7%0C%00%00%03%1EiCCPICC%20Profile%00%00x%01%85T%DFk%D3P%14%FE%DAe%9D%B0%E1%8B%3Ag%11%09%3Eh%91ndStC%9C%B6kW%BA%CDZ%EA6%B7!H%9B%A6m%5C%9A%C6%24%ED~%B0%07%D9%8Bo%3A%C5w%F1%07%3E%F9%07%0C%D9%83o%7B%92%0D%C6%14a%F8%AC%88%22L%F6%22%B3%9E%9B4M'S%03%B9%F7%BB%DF%F9%EE9'%E7%E4%5E%A0%F9qZ%D3%14%2F%0F%14USO%C5%C2%FC%C4%E4%14%DF%F2%01%5E%1CC%2B%FChM%8B%86%16J%26G%40%0F%D3%B2y%EF%B3%F3%0E%1E%C6lt%EEo%DF%AB%FEc%D5%9A%95%0C%11%F0%1C%20%BE%945%C4%22%E1Y%A0i%5C%D4t%13%E0%D6%89%EF%9D15%C2%CDLsX%A7%04%09%1Fg8oc%81%E1%8C%8D%23%96f45%40%9A%09%C2%07%C5B%3AK%B8%408%98i%E0%F3%0D%D8%CE%81%14%E4'%26%A9%92.%8B%3C%ABER%2F%E5dE%B2%0C%F6%F0%1Fs%83%F2_%B0%A8%94%E9%9B%AD%E7%10%8Dm%9A%19N%D1%7C%8A%DE%1F9%7Dp%8C%E6%00%D5%C1%3F_%18%BDA%B8%9DpX6%E3%A35~B%CD%24%AE%11%26%BD%E7%EEti%98%EDe%9A%97Y)%12%25%1C%24%BCbT%AE3li%E6%0B%03%89%9A%E6%D3%ED%F4P%92%B0%9F4%BF43Y%F3%E3%EDP%95%04%EB1%C5%F5%F6KF%F4%BA%BD%D7%DB%91%93%07%E35%3E%A7)%D6%7F%40%FE%BD%F7%F5r%8A%E5y%92%F0%EB%B4%1E%8D%D5%F4%5B%92%3AV%DB%DB%E4%CD%A6%23%C3%C4wQ%3F%03HB%82%8E%1Cd(%E0%91B%0Ca%9Ac%C4%AA%F8L%16%19%22J%A4%D2itTy%B28%D6%3B(%93%96%ED%1CGx%C9_%0E%B8%5E%16%F5%5B%B2%B8%F6%E0%FB%9E%DD%25%D7%8E%BC%15%85%C5%B7%A3%D8Q%ED%B5%81%E9%BA%B2%13%9A%1B%7Fua%A5%A3n%E17%B9%E5%9B%1Bm%AB%0B%08Q%FE%8A%E5%B1H%5Ee%CAO%82Q%D7u6%E6%90S%97%FCu%0B%CF2%94%EE%25v%12X%0C%BA%AC%F0%5E%F8*l%0AO%85%17%C2%97%BF%D4%C8%CE%DE%AD%11%CB%80q%2C%3E%AB%9ES%CD%C6%EC%25%D2L%D2%EBd%B8%BF%8A%F5B%C6%18%F9%901CZ%9D%BE%24M%9C%8A9%F2%DAP%0B'%06w%82%EB%E6%E2%5C%2F%D7%07%9E%BB%CC%5D%E1%FA%B9%08%AD.r%23%8E%C2%17%F5E%7C!%F0%BE3%BE%3E_%B7o%88a%A7%DB%BE%D3d%EB%A31Z%EB%BB%D3%91%BA%A2%B1z%94%8F%DB'%F6%3D%8E%AA%13%19%B2%B1%BE%B1~V%08%2B%B4%A2cjJ%B3tO%00%03%25mN%97%F3%05%93%EF%11%84%0B%7C%88%AE-%89%8F%ABbW%90O%2B%0Ao%99%0C%5E%97%0CI%AFH%D9.%B0%3B%8F%ED%03%B6S%D6%5D%E6i_s9%F3*p%E9%1B%FD%C3%EB.7U%06%5E%19%C0%D1s.%17%A03u%E4%09%B0%7C%5E%2C%EB%15%DB%1F%3C%9E%B7%80%91%3B%DBc%AD%3Dma%BA%8B%3EV%AB%DBt.%5B%1E%01%BB%0F%AB%D5%9F%CF%AA%D5%DD%E7%E4%7F%0Bx%A3%FC%06%A9%23%0A%D6%C2%A1_2%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%9A%9C%18%00%00%00%B5IDAT(%15%A5%91%3D%0E%02!%10%85ac%E1%05%D6%CE%D6%C6%CE%D2%E8%ED%CD%DE%C0%C6%D6N.%E0V%F8%3D%9Ca%891XH%C2%BE%D9y%3F%90!%E6%9C%C3%BFk%E5%011%C6-%F5%C8N%04%DF%BD%FF%89%DFt%83DN%60%3E%F3%AB%A0%DE%1A%5Dg%BE%10Q%97%1B%40%9C%A8o%10%8F%5E%828%B4%1B%60%87%F6%02%26%85%1Ch%1E%C1%2B%5Bk%FF%86%EE%B7j%09%9A%DA%9B%ACe%A3%F9%EC%DA!9%B4%D5%A6%81%86%86%98%CC%3C%5B%40%FA%81%B3%E9%CB%23%94%C16Azo%05%D4%E1%C1%95a%3B%8A'%A0%E8%CC%17%22%85%1D%BA%00%A2%FA%DC%0A%94%D1%D1%8D%8B%3A%84%17B%C7%60%1A%25Z%FC%8D%00%00%00%00IEND%AEB%60%82"),
        url("data:image/png,%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%05%00%00%007%08%06%00%00%00%C4%DD%80C%00%00%03%1EiCCPICC%20Profile%00%00x%01%85T%DFk%D3P%14%FE%DAe%9D%B0%E1%8B%3Ag%11%09%3Eh%91ndStC%9C%B6kW%BA%CDZ%EA6%B7!H%9B%A6m%5C%9A%C6%24%ED~%B0%07%D9%8Bo%3A%C5w%F1%07%3E%F9%07%0C%D9%83o%7B%92%0D%C6%14a%F8%AC%88%22L%F6%22%B3%9E%9B4M'S%03%B9%F7%BB%DF%F9%EE9'%E7%E4%5E%A0%F9qZ%D3%14%2F%0F%14USO%C5%C2%FC%C4%E4%14%DF%F2%01%5E%1CC%2B%FChM%8B%86%16J%26G%40%0F%D3%B2y%EF%B3%F3%0E%1E%C6lt%EEo%DF%AB%FEc%D5%9A%95%0C%11%F0%1C%20%BE%945%C4%22%E1Y%A0i%5C%D4t%13%E0%D6%89%EF%9D15%C2%CDLsX%A7%04%09%1Fg8oc%81%E1%8C%8D%23%96f45%40%9A%09%C2%07%C5B%3AK%B8%408%98i%E0%F3%0D%D8%CE%81%14%E4'%26%A9%92.%8B%3C%ABER%2F%E5dE%B2%0C%F6%F0%1Fs%83%F2_%B0%A8%94%E9%9B%AD%E7%10%8Dm%9A%19N%D1%7C%8A%DE%1F9%7Dp%8C%E6%00%D5%C1%3F_%18%BDA%B8%9DpX6%E3%A35~B%CD%24%AE%11%26%BD%E7%EEti%98%EDe%9A%97Y)%12%25%1C%24%BCbT%AE3li%E6%0B%03%89%9A%E6%D3%ED%F4P%92%B0%9F4%BF43Y%F3%E3%EDP%95%04%EB1%C5%F5%F6KF%F4%BA%BD%D7%DB%91%93%07%E35%3E%A7)%D6%7F%40%FE%BD%F7%F5r%8A%E5y%92%F0%EB%B4%1E%8D%D5%F4%5B%92%3AV%DB%DB%E4%CD%A6%23%C3%C4wQ%3F%03HB%82%8E%1Cd(%E0%91B%0Ca%9Ac%C4%AA%F8L%16%19%22J%A4%D2itTy%B28%D6%3B(%93%96%ED%1CGx%C9_%0E%B8%5E%16%F5%5B%B2%B8%F6%E0%FB%9E%DD%25%D7%8E%BC%15%85%C5%B7%A3%D8Q%ED%B5%81%E9%BA%B2%13%9A%1B%7Fua%A5%A3n%E17%B9%E5%9B%1Bm%AB%0B%08Q%FE%8A%E5%B1H%5Ee%CAO%82Q%D7u6%E6%90S%97%FCu%0B%CF2%94%EE%25v%12X%0C%BA%AC%F0%5E%F8*l%0AO%85%17%C2%97%BF%D4%C8%CE%DE%AD%11%CB%80q%2C%3E%AB%9ES%CD%C6%EC%25%D2L%D2%EBd%B8%BF%8A%F5B%C6%18%F9%901CZ%9D%BE%24M%9C%8A9%F2%DAP%0B'%06w%82%EB%E6%E2%5C%2F%D7%07%9E%BB%CC%5D%E1%FA%B9%08%AD.r%23%8E%C2%17%F5E%7C!%F0%BE3%BE%3E_%B7o%88a%A7%DB%BE%D3d%EB%A31Z%EB%BB%D3%91%BA%A2%B1z%94%8F%DB'%F6%3D%8E%AA%13%19%B2%B1%BE%B1~V%08%2B%B4%A2cjJ%B3tO%00%03%25mN%97%F3%05%93%EF%11%84%0B%7C%88%AE-%89%8F%ABbW%90O%2B%0Ao%99%0C%5E%97%0CI%AFH%D9.%B0%3B%8F%ED%03%B6S%D6%5D%E6i_s9%F3*p%E9%1B%FD%C3%EB.7U%06%5E%19%C0%D1s.%17%A03u%E4%09%B0%7C%5E%2C%EB%15%DB%1F%3C%9E%B7%80%91%3B%DBc%AD%3Dma%BA%8B%3EV%AB%DBt.%5B%1E%01%BB%0F%AB%D5%9F%CF%AA%D5%DD%E7%E4%7F%0Bx%A3%FC%06%A9%23%0A%D6%C2%A1_2%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%9A%9C%18%00%00%00%3AIDAT8%11c%FC%FF%FF%7F%18%03%1A%60%01%F2%3F%A0%891%80%04%FF%11-%F8%17%9BJ%E2%05%B1ZD%81v%26t%E7%80%F8%A3%82h%A12%1A%20%A3%01%02%0F%01%BA%25%06%00%19%C0%0D%AEF%D5%3ES%00%00%00%00IEND%AEB%60%82");
    background-repeat: no-repeat, repeat-x;
    background-position: center center, top left;
    color: transparent;

    border: 1px solid black;
    -moz-border-radius: 2px;
    -webkit-border-radius: 2px;
    border-radius: 2px;

    cursor: pointer;
    pointer-events: auto;
}

.ace_dark .ace_fold {
}

.ace_fold:hover{
    background-image:
        url("data:image/png,%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%11%00%00%00%09%08%06%00%00%00%D4%E8%C7%0C%00%00%03%1EiCCPICC%20Profile%00%00x%01%85T%DFk%D3P%14%FE%DAe%9D%B0%E1%8B%3Ag%11%09%3Eh%91ndStC%9C%B6kW%BA%CDZ%EA6%B7!H%9B%A6m%5C%9A%C6%24%ED~%B0%07%D9%8Bo%3A%C5w%F1%07%3E%F9%07%0C%D9%83o%7B%92%0D%C6%14a%F8%AC%88%22L%F6%22%B3%9E%9B4M'S%03%B9%F7%BB%DF%F9%EE9'%E7%E4%5E%A0%F9qZ%D3%14%2F%0F%14USO%C5%C2%FC%C4%E4%14%DF%F2%01%5E%1CC%2B%FChM%8B%86%16J%26G%40%0F%D3%B2y%EF%B3%F3%0E%1E%C6lt%EEo%DF%AB%FEc%D5%9A%95%0C%11%F0%1C%20%BE%945%C4%22%E1Y%A0i%5C%D4t%13%E0%D6%89%EF%9D15%C2%CDLsX%A7%04%09%1Fg8oc%81%E1%8C%8D%23%96f45%40%9A%09%C2%07%C5B%3AK%B8%408%98i%E0%F3%0D%D8%CE%81%14%E4'%26%A9%92.%8B%3C%ABER%2F%E5dE%B2%0C%F6%F0%1Fs%83%F2_%B0%A8%94%E9%9B%AD%E7%10%8Dm%9A%19N%D1%7C%8A%DE%1F9%7Dp%8C%E6%00%D5%C1%3F_%18%BDA%B8%9DpX6%E3%A35~B%CD%24%AE%11%26%BD%E7%EEti%98%EDe%9A%97Y)%12%25%1C%24%BCbT%AE3li%E6%0B%03%89%9A%E6%D3%ED%F4P%92%B0%9F4%BF43Y%F3%E3%EDP%95%04%EB1%C5%F5%F6KF%F4%BA%BD%D7%DB%91%93%07%E35%3E%A7)%D6%7F%40%FE%BD%F7%F5r%8A%E5y%92%F0%EB%B4%1E%8D%D5%F4%5B%92%3AV%DB%DB%E4%CD%A6%23%C3%C4wQ%3F%03HB%82%8E%1Cd(%E0%91B%0Ca%9Ac%C4%AA%F8L%16%19%22J%A4%D2itTy%B28%D6%3B(%93%96%ED%1CGx%C9_%0E%B8%5E%16%F5%5B%B2%B8%F6%E0%FB%9E%DD%25%D7%8E%BC%15%85%C5%B7%A3%D8Q%ED%B5%81%E9%BA%B2%13%9A%1B%7Fua%A5%A3n%E17%B9%E5%9B%1Bm%AB%0B%08Q%FE%8A%E5%B1H%5Ee%CAO%82Q%D7u6%E6%90S%97%FCu%0B%CF2%94%EE%25v%12X%0C%BA%AC%F0%5E%F8*l%0AO%85%17%C2%97%BF%D4%C8%CE%DE%AD%11%CB%80q%2C%3E%AB%9ES%CD%C6%EC%25%D2L%D2%EBd%B8%BF%8A%F5B%C6%18%F9%901CZ%9D%BE%24M%9C%8A9%F2%DAP%0B'%06w%82%EB%E6%E2%5C%2F%D7%07%9E%BB%CC%5D%E1%FA%B9%08%AD.r%23%8E%C2%17%F5E%7C!%F0%BE3%BE%3E_%B7o%88a%A7%DB%BE%D3d%EB%A31Z%EB%BB%D3%91%BA%A2%B1z%94%8F%DB'%F6%3D%8E%AA%13%19%B2%B1%BE%B1~V%08%2B%B4%A2cjJ%B3tO%00%03%25mN%97%F3%05%93%EF%11%84%0B%7C%88%AE-%89%8F%ABbW%90O%2B%0Ao%99%0C%5E%97%0CI%AFH%D9.%B0%3B%8F%ED%03%B6S%D6%5D%E6i_s9%F3*p%E9%1B%FD%C3%EB.7U%06%5E%19%C0%D1s.%17%A03u%E4%09%B0%7C%5E%2C%EB%15%DB%1F%3C%9E%B7%80%91%3B%DBc%AD%3Dma%BA%8B%3EV%AB%DBt.%5B%1E%01%BB%0F%AB%D5%9F%CF%AA%D5%DD%E7%E4%7F%0Bx%A3%FC%06%A9%23%0A%D6%C2%A1_2%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%9A%9C%18%00%00%00%B5IDAT(%15%A5%91%3D%0E%02!%10%85ac%E1%05%D6%CE%D6%C6%CE%D2%E8%ED%CD%DE%C0%C6%D6N.%E0V%F8%3D%9Ca%891XH%C2%BE%D9y%3F%90!%E6%9C%C3%BFk%E5%011%C6-%F5%C8N%04%DF%BD%FF%89%DFt%83DN%60%3E%F3%AB%A0%DE%1A%5Dg%BE%10Q%97%1B%40%9C%A8o%10%8F%5E%828%B4%1B%60%87%F6%02%26%85%1Ch%1E%C1%2B%5Bk%FF%86%EE%B7j%09%9A%DA%9B%ACe%A3%F9%EC%DA!9%B4%D5%A6%81%86%86%98%CC%3C%5B%40%FA%81%B3%E9%CB%23%94%C16Azo%05%D4%E1%C1%95a%3B%8A'%A0%E8%CC%17%22%85%1D%BA%00%A2%FA%DC%0A%94%D1%D1%8D%8B%3A%84%17B%C7%60%1A%25Z%FC%8D%00%00%00%00IEND%AEB%60%82"),
        url("data:image/png,%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%05%00%00%007%08%06%00%00%00%C4%DD%80C%00%00%03%1EiCCPICC%20Profile%00%00x%01%85T%DFk%D3P%14%FE%DAe%9D%B0%E1%8B%3Ag%11%09%3Eh%91ndStC%9C%B6kW%BA%CDZ%EA6%B7!H%9B%A6m%5C%9A%C6%24%ED~%B0%07%D9%8Bo%3A%C5w%F1%07%3E%F9%07%0C%D9%83o%7B%92%0D%C6%14a%F8%AC%88%22L%F6%22%B3%9E%9B4M'S%03%B9%F7%BB%DF%F9%EE9'%E7%E4%5E%A0%F9qZ%D3%14%2F%0F%14USO%C5%C2%FC%C4%E4%14%DF%F2%01%5E%1CC%2B%FChM%8B%86%16J%26G%40%0F%D3%B2y%EF%B3%F3%0E%1E%C6lt%EEo%DF%AB%FEc%D5%9A%95%0C%11%F0%1C%20%BE%945%C4%22%E1Y%A0i%5C%D4t%13%E0%D6%89%EF%9D15%C2%CDLsX%A7%04%09%1Fg8oc%81%E1%8C%8D%23%96f45%40%9A%09%C2%07%C5B%3AK%B8%408%98i%E0%F3%0D%D8%CE%81%14%E4'%26%A9%92.%8B%3C%ABER%2F%E5dE%B2%0C%F6%F0%1Fs%83%F2_%B0%A8%94%E9%9B%AD%E7%10%8Dm%9A%19N%D1%7C%8A%DE%1F9%7Dp%8C%E6%00%D5%C1%3F_%18%BDA%B8%9DpX6%E3%A35~B%CD%24%AE%11%26%BD%E7%EEti%98%EDe%9A%97Y)%12%25%1C%24%BCbT%AE3li%E6%0B%03%89%9A%E6%D3%ED%F4P%92%B0%9F4%BF43Y%F3%E3%EDP%95%04%EB1%C5%F5%F6KF%F4%BA%BD%D7%DB%91%93%07%E35%3E%A7)%D6%7F%40%FE%BD%F7%F5r%8A%E5y%92%F0%EB%B4%1E%8D%D5%F4%5B%92%3AV%DB%DB%E4%CD%A6%23%C3%C4wQ%3F%03HB%82%8E%1Cd(%E0%91B%0Ca%9Ac%C4%AA%F8L%16%19%22J%A4%D2itTy%B28%D6%3B(%93%96%ED%1CGx%C9_%0E%B8%5E%16%F5%5B%B2%B8%F6%E0%FB%9E%DD%25%D7%8E%BC%15%85%C5%B7%A3%D8Q%ED%B5%81%E9%BA%B2%13%9A%1B%7Fua%A5%A3n%E17%B9%E5%9B%1Bm%AB%0B%08Q%FE%8A%E5%B1H%5Ee%CAO%82Q%D7u6%E6%90S%97%FCu%0B%CF2%94%EE%25v%12X%0C%BA%AC%F0%5E%F8*l%0AO%85%17%C2%97%BF%D4%C8%CE%DE%AD%11%CB%80q%2C%3E%AB%9ES%CD%C6%EC%25%D2L%D2%EBd%B8%BF%8A%F5B%C6%18%F9%901CZ%9D%BE%24M%9C%8A9%F2%DAP%0B'%06w%82%EB%E6%E2%5C%2F%D7%07%9E%BB%CC%5D%E1%FA%B9%08%AD.r%23%8E%C2%17%F5E%7C!%F0%BE3%BE%3E_%B7o%88a%A7%DB%BE%D3d%EB%A31Z%EB%BB%D3%91%BA%A2%B1z%94%8F%DB'%F6%3D%8E%AA%13%19%B2%B1%BE%B1~V%08%2B%B4%A2cjJ%B3tO%00%03%25mN%97%F3%05%93%EF%11%84%0B%7C%88%AE-%89%8F%ABbW%90O%2B%0Ao%99%0C%5E%97%0CI%AFH%D9.%B0%3B%8F%ED%03%B6S%D6%5D%E6i_s9%F3*p%E9%1B%FD%C3%EB.7U%06%5E%19%C0%D1s.%17%A03u%E4%09%B0%7C%5E%2C%EB%15%DB%1F%3C%9E%B7%80%91%3B%DBc%AD%3Dma%BA%8B%3EV%AB%DBt.%5B%1E%01%BB%0F%AB%D5%9F%CF%AA%D5%DD%E7%E4%7F%0Bx%A3%FC%06%A9%23%0A%D6%C2%A1_2%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%9A%9C%18%00%00%003IDAT8%11c%FC%FF%FF%7F%3E%03%1A%60%01%F2%3F%A3%891%80%04%FFQ%26%F8w%C0%B43%A1%DB%0C%E2%8F%0A%A2%85%CAh%80%8C%06%08%3C%04%E8%96%18%00%A3S%0D%CD%CF%D8%C1%9D%00%00%00%00IEND%AEB%60%82");
    background-repeat: no-repeat, repeat-x;
    background-position: center center, top left;
}

.ace_dragging .ace_content {
    cursor: move;
}

.ace_folding-enabled > .ace_gutter-cell {
    padding-right: 13px;
}

.ace_fold-widget {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;

    margin: 0 -12px 1px 1px;
    display: inline-block;
    height: 14px;
    width: 11px;
    vertical-align: text-bottom;

    background-image: url("data:image/png,%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%05%00%00%00%05%08%06%00%00%00%8Do%26%E5%00%00%004IDATx%DAe%8A%B1%0D%000%0C%C2%F2%2CK%96%BC%D0%8F9%81%88H%E9%D0%0E%96%C0%10%92%3E%02%80%5E%82%E4%A9*-%EEsw%C8%CC%11%EE%96w%D8%DC%E9*Eh%0C%151(%00%00%00%00IEND%AEB%60%82");
    background-repeat: no-repeat;
    background-position: center 4px;

    border-radius: 3px;
    
    border: 1px solid transparent;
}

.ace_fold-widget.end {
    background-image: url("data:image/png,%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%05%00%00%00%05%08%06%00%00%00%8Do%26%E5%00%00%004IDATx%DAm%C7%C1%09%000%08C%D1%8C%ECE%C8E(%8E%EC%02)%1EZJ%F1%C1'%04%07I%E1%E5%EE%CAL%F5%A2%99%99%22%E2%D6%1FU%B5%FE0%D9x%A7%26Wz5%0E%D5%00%00%00%00IEND%AEB%60%82");
}

.ace_fold-widget.closed {
    background-image: url("data:image/png,%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%03%00%00%00%06%08%06%00%00%00%06%E5%24%0C%00%00%009IDATx%DA5%CA%C1%09%000%08%03%C0%AC*(%3E%04%C1%0D%BA%B1%23%A4Uh%E0%20%81%C0%CC%F8%82%81%AA%A2%AArGfr%88%08%11%11%1C%DD%7D%E0%EE%5B%F6%F6%CB%B8%05Q%2F%E9tai%D9%00%00%00%00IEND%AEB%60%82");
}

.ace_fold-widget:hover {
    border: 1px solid rgba(0, 0, 0, 0.3);
    background-color: rgba(255, 255, 255, 0.2);
    -moz-box-shadow: 0 1px 1px rgba(255, 255, 255, 0.7);
    -webkit-box-shadow: 0 1px 1px rgba(255, 255, 255, 0.7);
    box-shadow: 0 1px 1px rgba(255, 255, 255, 0.7);
    background-position: center 4px;
}

.ace_fold-widget:active {
    border: 1px solid rgba(0, 0, 0, 0.4);
    background-color: rgba(0, 0, 0, 0.05);
    -moz-box-shadow: 0 1px 1px rgba(255, 255, 255, 0.8);
    -webkit-box-shadow: 0 1px 1px rgba(255, 255, 255, 0.8);
    box-shadow: 0 1px 1px rgba(255, 255, 255, 0.8);
}
/**
 * Dark version for fold widgets
 */
.ace_dark .ace_fold-widget {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHklEQVQIW2P4//8/AzoGEQ7oGCaLLAhWiSwB146BAQCSTPYocqT0AAAAAElFTkSuQmCC");
}
.ace_dark .ace_fold-widget.end {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAH0lEQVQIW2P4//8/AxQ7wNjIAjDMgC4AxjCVKBirIAAF0kz2rlhxpAAAAABJRU5ErkJggg==");
}
.ace_dark .ace_fold-widget.closed {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAFCAYAAACAcVaiAAAAHElEQVQIW2P4//+/AxAzgDADlOOAznHAKgPWAwARji8UIDTfQQAAAABJRU5ErkJggg==");
}
.ace_dark .ace_fold-widget:hover {
    box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);
    background-color: rgba(255, 255, 255, 0.1);
}
.ace_dark .ace_fold-widget:active {
    -moz-box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);
    -webkit-box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);
    box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);
}
    
    
    
.ace_fold-widget.invalid {
    background-color: #FFB4B4;
    border-color: #DE5555;
}

.ace_fade-fold-widgets .ace_fold-widget {
       -moz-transition: opacity 0.4s ease 0.05s;
    -webkit-transition: opacity 0.4s ease 0.05s;
         -o-transition: opacity 0.4s ease 0.05s;
        -ms-transition: opacity 0.4s ease 0.05s;
            transition: opacity 0.4s ease 0.05s;
    opacity: 0;
}

.ace_fade-fold-widgets:hover .ace_fold-widget {
       -moz-transition: opacity 0.05s ease 0.05s;
    -webkit-transition: opacity 0.05s ease 0.05s;
         -o-transition: opacity 0.05s ease 0.05s;
        -ms-transition: opacity 0.05s ease 0.05s;
            transition: opacity 0.05s ease 0.05s;
    opacity:1;
}
</style><style id="ace-tm">.ace-tm .ace_editor {
  border: 2px solid rgb(159, 159, 159);
}

.ace-tm .ace_editor.ace_focus {
  border: 2px solid #327fbd;
}

.ace-tm .ace_gutter {
  background: #f0f0f0;
  color: #333;
}

.ace-tm .ace_print_margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-tm .ace_fold {
    background-color: #6B72E6;
}

.ace-tm .ace_text-layer {
}

.ace-tm .ace_cursor {
  border-left: 2px solid black;
}

.ace-tm .ace_cursor.ace_overwrite {
  border-left: 0px;
  border-bottom: 1px solid black;
}
        
.ace-tm .ace_line .ace_invisible {
  color: rgb(191, 191, 191);
}

.ace-tm .ace_line .ace_storage,
.ace-tm .ace_line .ace_keyword {
  color: blue;
}

.ace-tm .ace_line .ace_constant {
  color: rgb(197, 6, 11);
}

.ace-tm .ace_line .ace_constant.ace_buildin {
  color: rgb(88, 72, 246);
}

.ace-tm .ace_line .ace_constant.ace_language {
  color: rgb(88, 92, 246);
}

.ace-tm .ace_line .ace_constant.ace_library {
  color: rgb(6, 150, 14);
}

.ace-tm .ace_line .ace_invalid {
  background-color: rgba(255, 0, 0, 0.1);
  color: red;
}

.ace-tm .ace_line .ace_support.ace_function {
  color: rgb(60, 76, 114);
}

.ace-tm .ace_line .ace_support.ace_constant {
  color: rgb(6, 150, 14);
}

.ace-tm .ace_line .ace_support.ace_type,
.ace-tm .ace_line .ace_support.ace_class {
  color: rgb(109, 121, 222);
}

.ace-tm .ace_line .ace_keyword.ace_operator {
  color: rgb(104, 118, 135);
}

.ace-tm .ace_line .ace_string {
  color: rgb(3, 106, 7);
}

.ace-tm .ace_line .ace_comment {
  color: rgb(76, 136, 107);
}

.ace-tm .ace_line .ace_comment.ace_doc {
  color: rgb(0, 102, 255);
}

.ace-tm .ace_line .ace_comment.ace_doc.ace_tag {
  color: rgb(128, 159, 191);
}

.ace-tm .ace_line .ace_constant.ace_numeric {
  color: rgb(0, 0, 205);
}

.ace-tm .ace_line .ace_variable {
  color: rgb(49, 132, 149);
}

.ace-tm .ace_line .ace_xml_pe {
  color: rgb(104, 104, 91);
}

.ace-tm .ace_entity.ace_name.ace_function {
  color: #0000A2;
}

.ace-tm .ace_markup.ace_markupine {
    text-decoration:underline;
}

.ace-tm .ace_markup.ace_heading {
  color: rgb(12, 7, 255);
}

.ace-tm .ace_markup.ace_list {
  color:rgb(185, 6, 144);
}

.ace-tm .ace_marker-layer .ace_selection {
  background: rgb(181, 213, 255);
}
.ace-tm.multiselect .ace_selection.start {
  box-shadow: 0 0 3px 0px white;
  border-radius: 2px;
}
.ace-tm .ace_marker-layer .ace_step {
  background: rgb(252, 255, 0);
}

.ace-tm .ace_marker-layer .ace_stack {
  background: rgb(164, 229, 101);
}

.ace-tm .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid rgb(192, 192, 192);
}

.ace-tm .ace_marker-layer .ace_active_line {
  background: rgba(0, 0, 0, 0.07);
}

.ace-tm .ace_gutter_active_line {
    background-color : #dcdcdc;
}

.ace-tm .ace_marker-layer .ace_selected_word {
  background: rgb(250, 250, 255);
  border: 1px solid rgb(200, 200, 250);
}

.ace-tm .ace_meta.ace_tag {
  color:rgb(0, 50, 198);
}

.ace-tm .ace_string.ace_regex {
  color: rgb(255, 0, 0)
}</style></head>
<body data-twttr-rendered="true">
  <header>
    <div class="relative">
      <div id="h" class="clearfix">
        <div class="left clearfix">
        <input type="button" class="ds-button" value="Home Page" id="homep">
        <input type="button" class="ds-button" value="New Page" id="newp">
        <input type="button" class="ds-button" value="Preview" id="preview">
        <input type="button" class="ds-button"  value="Build" id="buildui">                                        

        </div>
        <div class="right clearfix">
            
          <input type="button" class="ds-button"  value="Create WAR" id="createWar">  
          <input type="button" class="ds-button"  value="Injection Point" id="injectCode">                                        
          <a href="#" class="size" data-size="phone"><img src="../images/phone_icon.png"></a>
          <a href="#" class="size" data-size="tablet"><img src="../images/tablet_icon.png"></a>
          <a href="#" class="size selected" data-size="laptop"><img src="../images/laptop_icon.png"></a>
          <a href="#" class="size last" data-size="desktop"><img src="../images/desktop_icon.png"></a>

          
          <a href="#" class="ds-button" id="debug-dump-html">Export</a>
        
        
          
        </div>
        <form action="${resource(file: 'j_spring_security_logout')}" method='POST'  autocomplete='off'  >    
          <div class="account">         
            <input type='submit'  class="ds-button" id="logout"  title="LogOut Here" value="LogOut" />               
          </div>
        </form>           
      </div>
    </div>
    <div id="breadcrumbs" class="hidden">
    </div>
  </header>
  <div id="b" role="main">
    <div class="panes left">
      
      
    </div>
    <div id="frame-content" class="relative laptop" style="height: 640px; ">
      <div id="frame-c">
        <div id="frame">
            
          <iframe id="ifr" src="../images/frame.htm"></iframe>    
            
          <div id="frame-drop" class="ui-droppable">
            <div class="relative">
            </div>
          </div>
        </div>
      </div>
       <div id="css-editor" style="display: none; height: 270px; ">
        <div class="relative">
          <div class="buttons">
            Registered selectors: <select id="css-entry-select"></select> <a class="btn" id="css-entry-add">insert</a>
          </div>
          
          
          <div id="css-editor" style="height: 400px;">
        <div class="relative">
          <div id="show-css" class="proxima clearfix active"><div class="relative">CSS/HTML <div class="icon"></div></div></div>
          <div id="css-editor-wrapper">
            <div class="buttons clearfix">
              <div class="left">
                <h5>CSS</h5>
              </div>
              <div class="right">
                <select id="css-entry-select" selected="selected"></select> <a class="btn" id="css-entry-add"> insert selector</a>
              </div>
            </div>
            <div id="css-editor-target" class=" ace_editor ace-tm"><textarea wrap="off" style="top: -1px; height: 20px; width: 7px; left: 44px;"></textarea><div class="ace_gutter ace_fade-fold-widgets"><div class="ace_layer ace_gutter-layer ace_folding-enabled" style="margin-top: 0px; height: 391px;"><div class="ace_gutter-cell ace_gutter_active_line " title="" style="height:20px;">1</div></div></div><div class="ace_scroller" style="height: 351px; left: 40px; right: 17px;"><div class="ace_content" style="margin-top: 0px; width: 626px; height: 391px;"><div class="ace_layer ace_marker-layer"><div class="ace_active_line start" style="height:20px;width:610px;top:0px;left:0px;"></div></div><div class="ace_print_margin_layer"><div class="ace_print_margin" style="left: 564px; visibility: hidden;"></div></div><div class="ace_layer ace_text-layer" style="padding: 0px 4px;"><div class="ace_line" style="height:20px"></div></div><div class="ace_layer ace_marker-layer"></div><div class="ace_layer ace_cursor-layer" style=""><div class="ace_cursor ace_hidden" style="left: 4px; top: 0px; width: 7px; height: 20px;"></div></div></div></div><div style="height: auto; width: auto; top: -100px; left: -100px; visibility: hidden; position: fixed; overflow: visible; white-space: nowrap;">X</div><div class="ace_sb" style="width: 22px; height: 351px;"><div style="height: 20px;"></div></div></div>
          </div>
          <div id="html-editor-wrapper">
            <div class="buttons">
              <div class="left">
                <h5>HTML (read-only)</h5>
              </div>
              <div class="right clearfix" style="line-height: 64px">
                <input type="checkbox" id="toggle-boilerplate" style="margin-top: -1px"> Show Bootstrap Boilerplate
                <a class="btn" id="export-zip">Download .zip</a>
              </div>
            </div>
            <div id="html-editor-target" class=" ace_editor ace-tm">
                <textarea wrap="off" style="top: 19px; height: 20px; width: 7px; left: 86px;"></textarea>
                <div class="ace_gutter ace_fade-fold-widgets">
                    <div class="ace_layer ace_gutter-layer ace_folding-enabled" style="margin-top: 0px; height: 391px;">
                        <div class="ace_gutter-cell " title="" style="height:20px;">1<span class="ace_fold-widget start open"></span></div>
                        <div class="ace_gutter-cell  ace_gutter_active_line" title="" style="height:20px;">2</div></div></div>
                        <div class="ace_scroller" style="height: 351px; left: 40px; right: 17px; overflow-x: hidden;">
                            <div class="ace_content" style="margin-top: 0px; width: 626px; height: 391px;">
                                <div class="ace_layer ace_marker-layer">
                                    <div class="ace_active_line start" style="height:20px;width:618px;top:20px;left:0px;"></div></div><div class="ace_print_margin_layer"><div class="ace_print_margin" style="left: 564px; visibility: hidden;"></div></div><div class="ace_layer ace_text-layer" style="padding: 0px 4px;"><div class="ace_line" style="height:20px"><span class="ace_meta ace_tag">&lt;</span><span class="ace_meta ace_tag ace_tag-name">div</span>&nbsp;<span class="ace_entity ace_other ace_attribute-name">class</span><span class="ace_keyword ace_operator">=</span><span class="ace_string">"container"</span><span class="ace_meta ace_tag">&gt;</span></div><div class="ace_line" style="height:20px"><span class="ace_meta ace_tag">&lt;/</span><span class="ace_meta ace_tag ace_tag-name">div</span><span class="ace_meta ace_tag">&gt;</span></div></div><div class="ace_layer ace_marker-layer"></div><div class="ace_layer ace_cursor-layer" style=""><div class="ace_cursor ace_hidden" style="left: 46px; top: 20px; width: 7px; height: 20px;"></div></div></div></div><div style="height: auto; width: auto; top: -100px; left: -100px; visibility: hidden; position: fixed; overflow: visible; white-space: nowrap;">X</div><div class="ace_sb" style="width: 22px; height: 351px;"><div style="height: 40px;"></div></div></div>
          </div>
        </div>
      </div>
          
        </div>
      </div>
    </div>
  </div>
 

  

  <!-- templates -->
  <script id="ds-component-page" type="text/x-handlebars-template">
    <div{{pattr elementid "id"}}{{pattr elementclass "class"}}></div>
  </script>
  
  <script id="ds-component-container" type="text/x-handlebars-template">
    <div{{{pattr elementid "id"}}} class="container{{{ps elementclass}}}">
    </div>
  </script>
  
  <script id="ds-component-content" type="text/x-handlebars-template">
    <div{{pattr elementid "id"}}{{pattr elementclass "class"}}>
      {{{p content }}}
    </div>
  </script>
  
  <script id="ds-component-heading" type="text/x-handlebars-template">
    <h{{{p size}}}{{pattr elementid "id"}}{{pattr elementclass "class"}}>{{{p content}}}</h{{{p size}}}>
  </script>

  <script id="ds-component-pageheader" type="text/x-handlebars-template">
    <div class="page-header">
    </div>
  </script>
  
  <script id="ds-component-icon" type="text/x-handlebars-template">
    <i{{pattr elementid "id"}}{{pattr elementclass "class"}} class="{{p icon}}"></i>
  </script>
  <script id="ds-component-image" type="text/x-handlebars-template">
    <img{{pattr elementid "id"}}{{pattr elementclass "class"}} src="{{p src}}" style="{{pcss width "width"}}{{pcss height "height" }}" />
  </script>

  <script id="ds-component-alert" type="text/x-handlebars-template">
    <div class="alert{{{ps type}}}">
    </div>
  </script>
  
  <script id="ds-component-progressbar" type="text/x-handlebars-template">
    <div class="progress{{{ps type}}}{{{ps striped}}}{{{ps animated}}}">
      <div class="bar" style="width: {{p value}}%"></div>
    </div>
  </script>
  
  <script id="ds-component-hr" type="text/x-handlebars-template">
    <hr{{pattr elementid "id"}}{{pattr elementclass "class"}}>
  </script>
  
  <script id="ds-component-hero" type="text/x-handlebars-template">
   <div{{pattr elementid "id"}} class="hero-unit{{ps elementclass}}">
   </div>
  </script>
  <script id="ds-component-well" type="text/x-handlebars-template">
   <div class="well{{ps elementclass}}">
   </div>
  </script>
  <script id="ds-component-link" type="text/x-handlebars-template">
    <a{{pattr elementid "id"}}{{pattr elementclass "class"}} href="{{p href}}"{{{pattr target "target"}}}>{{{p content}}}</a>
  </script>
  <script id="ds-component-button" type="text/x-handlebars-template">
    <a{{pattr elementid "id"}} class="btn{{{ps type}}}{{{ps size}}}{{{ps disabled}}}{{ps elementclass}}" href="{{{p href}}}"{{{pattr target "target"}}}>{{{p content}}}</a>
  </script>
  <script id="ds-component-buttondropdown" type="text/x-handlebars-template">
    <div class="btn-group">
    </div>
  </script>
  <script id="ds-component-buttondropdowntoggle" type="text/x-handlebars-template">
    <a {{pattr elementid "id"}} class="btn dropdown-toggle{{{ps type}}}{{{ps size}}}{{{ps disabled}}}{{ps elementclass}}" data-toggle="dropdown" href="#">{{{p content}}} <span class="caret"></span></a>
  </script>
  <script id="ds-component-buttondropdownlist" type="text/x-handlebars-template">
  /*  <ul class="dropdown-menu">
    </ul>*/
  </script>
  <script id="ds-component-buttondropdownlistitem" type="text/x-handlebars-template">
    <li></li>
  </script>
  <script id="ds-component-buttondropdownlistitemdivider" type="text/x-handlebars-template">
    <li class="divider"></li>
  </script>

  
  <script id="ds-component-buttongroup" type="text/x-handlebars-template">
    <div class="btn-group{{ps elementclass}}">
    </div>
  </script>
  <script id="ds-component-buttontoolbar" type="text/x-handlebars-template">
    <div class="btn-toolbar{{ps elementclass}}">
    </div>
  </script>
  
  <script id="ds-component-tabs" type="text/x-handlebars-template">
    <ul class="nav nav-tabs{{ps elementclass}}">
    </ul>
  </script>

  <script id="ds-component-tabitem" type="text/x-handlebars-template">
    <li{{pattr active "class"}}></li>
  </script>

  <script id="ds-component-navbar" type="text/x-handlebars-template">
    <div class="navbar{{ps fixedmode}}{{ps type}}{{ps elementclass}}">
      <div class="navbar-inner">
        <div class="container">
        </div>
      </div>
    </div>
  </script>

  <script id="ds-component-navbarbrand" type="text/x-handlebars-template">
    <a class="brand" href="{{p href}}">{{{p content}}}</a>
  </script>
  
  <script id="ds-component-navbarlinks" type="text/x-handlebars-template">
    <ul class="nav{{ps alignment}}">
    </ul>
  </script>
  <script id="ds-component-navbarlinkitem" type="text/x-handlebars-template">
    <li{{pattr active "class"}}></li>
  </script>
  <script id="ds-component-navbarlinkdivider" type="text/x-handlebars-template">
    <li class="divider-vertical"></li>
  </script>
  
  <script id="ds-component-navlist" type="text/x-handlebars-template">
    <ul class="nav nav-list{{ps elementclass}}">
    </ul>
  </script>
  <script id="ds-component-navlistheader" type="text/x-handlebars-template">
    <li class="nav-header{{ps elementclass}}">{{p text}}<li>
  </script>
  <script id="ds-component-navlistitem" type="text/x-handlebars-template">
    <li class="{{{ps active}}}{{ps elementclass}}"></li>
  </script>

  <script id="ds-component-breadcrumbs" type="text/x-handlebars-template">
    <ul class="breadcrumb{{ps elementclass}}">
    </ul>
  </script>
  <script id="ds-component-breadcrumbitem" type="text/x-handlebars-template">
    <li class="{{{ps active}}}{{ps elementclass}}"></li>
  </script>
  <script id="ds-component-breadcrumbdivider" type="text/x-handlebars-template">
    <span class="divider">/</span>
  </script>
  
  <script id="ds-component-pagination" type="text/x-handlebars-template">
    <div class="pagination{{ps alignment}}{{ps elementclass}}">
      <ul>
      </ul>
    </div>
  </script>

  <script id="ds-component-paginationitem" type="text/x-handlebars-template">
    <li class="{{{ps active}}}{{ps elementclass}}"></li>
  </script>

  <!-- form stuff -->
  <script id="ds-component-form" type="text/x-handlebars-template">
  <form>
  </form>
  </script>

  <script id="ds-component-textinputgroup" type="text/x-handlebars-template">
  <div class="control-group{{ps elementclass}}">
  </div>
  </script>
  
  <script id="ds-component-selectinputgroup" type="text/x-handlebars-template">
  <div class="control-group{{ps elementclass}}">
  </div>
  </script>
  
  <script id="ds-component-textareainputgroup" type="text/x-handlebars-template">
  <div class="control-group{{ps elementclass}}">
  </div>
  </script>
  
  <script id="ds-component-fileinputgroup" type="text/x-handlebars-template">
  <div class="control-group{{ps elementclass}}">
  </div>
  </script>
  
  <script id="ds-component-inputlabel" type="text/x-handlebars-template">
  <label for="{{p for}}">{{{p content}}}</label>
  </script>

  <script id="ds-component-textinput" type="text/x-handlebars-template">
  <input name="{{p name}}" type="text" />
  </script>
  <script id="ds-component-selectinput" type="text/x-handlebars-template">
  <select name="{{p name}}"></select>
  </script>
  <script id="ds-component-selectoption" type="text/x-handlebars-template">
  <option value="{{p value}}">{{p label}}</option>
  </script>
  <script id="ds-component-fileinput" type="text/x-handlebars-template">
  <input name="{{p name}}" type="file" />
  </script>
  <script id="ds-component-textarea" type="text/x-handlebars-template">
  <textarea name="{{p name}}"></textarea>
  </script>

  <script id="ds-component-table" type="text/x-handlebars-template">
  <table class="table{{ps elementclass}}">
  </table>
  </script>
  <script id="ds-component-tablerow" type="text/x-handlebars-template">
    <tr>
    </tr>
  </script>
  <script id="ds-component-tablecell" type="text/x-handlebars-template">
    <td>
    </td>
  </script>

  <script id="ds-component-gridrow" type="text/x-handlebars-template">
  <div class="row{{ps elementclass}}">
  </div>
  </script>
  
  <script id="ds-component-fluidgridrow" type="text/x-handlebars-template">
  <div class="row-fluid{{ps elementclass}}">
  </div>
  </script>

  <script id="ds-component-gridcol1" type="text/x-handlebars-template">
    <div class="span1{{ps elementclass}}">{{{p content}}}</div>
  </script>
  <script id="ds-component-gridcol2" type="text/x-handlebars-template">
    <div class="span2{{ps elementclass}}">{{{p content}}}</div>
  </script>
  <script id="ds-component-gridcol3" type="text/x-handlebars-template">
    <div class="span3{{ps elementclass}}">{{{p content}}}</div>
  </script>
  <script id="ds-component-gridcol4" type="text/x-handlebars-template">
    <div class="span4{{ps elementclass}}">{{{p content}}}</div>
  </script>
  <script id="ds-component-gridcol6" type="text/x-handlebars-template">
    <div class="span6{{ps elementclass}}">{{{p content}}}</div>
  </script>
  <script id="ds-component-gridcol8" type="text/x-handlebars-template">
    <div class="span8{{ps elementclass}}">{{{p content}}}</div>
  </script>
  <script id="ds-component-gridcol12" type="text/x-handlebars-template">
    <div class="span12{{ps elementclass}}">{{{p content}}}</div>
  </script>



  <!-- widget -->
  <script id="ds-widget-singletext" type="text/x-handlebars-template">
  <input type="text" value="{{text}}"/>
  </script>
  <script id="ds-widget-select" type="text/x-handlebars-template">
  <select>
  {{#each items}}
    <option value="{{value}}"{{#if selected}} selected{{/if}}>{{text}}</option>
  {{/each}}
  </select>
  </script>
  <script id="ds-widget-toggle" type="text/x-handlebars-template">
    <div class="switch" data-checkbox="yes" data-on="{{onText}}" data-off="{{offText}}" data-toggle="switch"></div>
  </script>
  <script id="ds-widget-button" type="text/x-handlerbars-template">
  <button>{{{text}}}</button>
  </script>



  <div class="modal hide" id="html-modal">
    <div class="modal-header">
      <button type="button" class="close" data-dismiss="modal">Ã—</button>
      <h3>HTML Export</h3>
    </div>
    <div class="modal-body">
      <div class="clearfix">
        <input type="checkbox" id="toggle-boilerplate"> Show Bootstrap boilerplate tags. Bootstrap won't work if you don't check this.
    </div>
      <div id="html-export-editor" class=" ace_editor ace-tm"><textarea id="exportArea" wrap="off" style="top: -2em; "></textarea><div class="ace_gutter ace_fade-fold-widgets"><div class="ace_layer ace_gutter-layer ace_folding-enabled"></div></div><div class="ace_scroller"><div class="ace_content"><div class="ace_layer ace_marker-layer"></div><div class="ace_print_margin_layer"><div class="ace_print_margin" style="left: 84px; visibility: hidden; "></div></div><div class="ace_layer ace_text-layer" style="padding: 0px 4px; "></div><div class="ace_layer ace_marker-layer"></div><div class="ace_layer ace_cursor-layer"><div class="ace_cursor ace_hidden"></div></div></div></div><div style="height: auto; width: auto; top: -100px; left: -100px; visibility: hidden; position: fixed; overflow: visible; white-space: nowrap; ">X</div><div class="ace_sb" style="width: 22px; "><div></div></div></div>
    </div>
    <div class="modal-footer">
      <a href="http://bobdylan.apphb.com" class="btn" data-dismiss="modal">Close</a>
    </div>
  </div>
  
  <div class="modal hide" id="alpha-modal">
    <div class="modal-header">
      <button type="button" class="close" data-dismiss="modal">Ã—</button>
      <h3>Welcome to Tempest!</h3>
    </div>
    <div class="modal-body">
      <p>
        </p><h4>Demo</h4>
        <h4>Using Tempest</h4>
        <p><b>This is a prototype. IT DOES NOT SAVE. Please export early and often.</b></p>
        To use this awesome little tool, drag components from the <b>Components</b> dialog onto the page. Drag new items on to container items to place them in the container. Some components, for example the Button Group, allow buttons to be added by dragging them on top of the group. Components can be reordered after placing by dragging. To edit the content of text/labels/buttons, double click on the component. Use the breadcrumbs that appear when a control is selected to select a parent control. Support for HTML tables using Bootstrap is quite experimental.
        Tempest is named after Bob Dylan's latest album. Since this is open source, feel free to name it something else. 
      <p></p>
      <p>
        There are a few useful shortcuts (âŒ˜ on Mac):
        </p><ul>
          <li><b>Ctrl+Z</b> - Undo</li>
          <li><b>Ctrl+Shift+Z</b> - Redo</li>
          <li><b>Ctrl+E</b> - Export the HTML for the document</li>
          <li><b>Ctrl+D</b> - Duplicate the currently selected control</li>
          <li><b>Ctrl+C</b> - Copy the currently selected control</li>
          <li><b>Ctrl+V</b> - Paste the last copied control into the currently selected container (some things can contain elements, use the breadcrumbs to find a container above a child)</li>
        </ul>
      <p></p>
      <p>
        
      </p>
    </div>
    <div class="modal-footer">
      <a href="http://bobdylan.apphb.com" class="btn" data-dismiss="modal">Close</a>
    </div>
  </div>
  
  
  <script id="view-snippet-project-entry" type="text/x-handlebars-template">
  <tr class="name" data-projectid="{{unique_id}}">
    <td class="name">{{name}}</td>
    <td class="last_modified">{{date_string}}</td>
    <td class="buttons">
      
      <a href="#" class="btn" data-action="delete">Delete</a>
      <a href="#" class="btn" data-action="open">Open</a>
    </td>
  </tr>
  </script> 


  <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"></script>;

 

 <div class="modal hide" id="injectcode-modal" style="display: none;" aria-hidden="true">
     <div class="modal-header">
        <h3>Injection Point</h3>
        <div id="getplugins" title="CLICK HERE TO GET PLUGINS" class="pluginclass" style="height: 64px; width: 60px; no-repeat;float:right;border-style:outset;border-width: 5px;" >
        <img  src="../images/img/app/plugin.jpg" alt="Get plugins" height="30">
      </div><br><br>      
      <input type="text" id="searchJS" value="Search" title="Search">
      

     </div>
     <div id="plugineditor" class="modal-body flush relative">   
                                   
            <div class="plugcontainer">
                <input type="checkbox"  />
                <span>html5:5.0.0</span>
            </div>
            <div class="plugcontainer">
                <input type="checkbox" />
                <span>jasper:2.0.0</span>
            </div>
            <div class="plugcontainer">
                <input type="checkbox" />
                <span>spring-security-core:1.2.7.3</span>
            </div>
            <div class="plugcontainer">
                <input type="checkbox" />
                <span>spring-security-eventlog:0.2</span>
            </div>
            <div class="plugcontainer">
                <input type="checkbox" />
                <span>spring-security-facebook:0.13</span>
            </div>
            <div class="plugcontainer">
                <input type="checkbox" />
                <span>spring-security-ui:0.2</span>
            </div>
            <div class="plugcontainer">
                <input type="checkbox" />
                <span>database-migration:1.3.2</span>
            </div>
            <div class="plugcontainer">
                <input type="checkbox" />
                <span>database-session:1.1.2</span>
            </div>
            <div class="plugcontainer">
                <input type="checkbox" />
                <span>jdbc-pool:1.0.9.3</span>
            </div>
            <div class="plugcontainer">
                <input type="checkbox" />
                <span>mongodb:1.2.0</span>
            </div>
            <div class="plugcontainer">
                <input type="checkbox" />
                <span>excel-import:1.0.0</span>
            </div>
            <div class="plugcontainer">
                <input type="checkbox" />
                <span>pdf:0.6</span>
            </div>
            <div class="plugcontainer">
                <input type="checkbox" />
                <span>pdf-viewer:0.1</span>
            </div>
            <div class="plugcontainer">
                <input type="checkbox" />
                <span>scorm:0.2</span>
            </div>
            <div class="plugcontainer">
                <input type="checkbox" />
                <span>gorm-hbase:0.2.4</span>
            </div>
            <div class="plugcontainer">
                <input type="checkbox" />
                <span>google-chart:0.5.2</span>
            </div>
            <div class="plugcontainer">
                <input type="checkbox" />
                <span>facebook-connect:0.2</span>
            </div>
            <div class="plugcontainer">
                <input type="checkbox" />
                <span>facebook-graph:0.14</span>
            </div>
            <div class="plugcontainer">
                <input type="checkbox" />
                <span>facebook-sdk:0.4.8</span>
            </div>
            <div class="plugcontainer">
                <input type="checkbox" />
                <span>shiro:1.1.4</span>
            </div>
            <div class="plugcontainer">
                <input type="checkbox" />
                <span>email-confirmation:2.0.8</span>
            </div>
            <div class="plugcontainer">
                <input type="checkbox" />
                <span>browser-detection:0.4.3</span>
            </div>
            <div class="plugcontainer">
                <input type="checkbox" />
                <span>flash-player:1.4</span>
            </div>
            <div class="plugcontainer">
                <input type="checkbox" />
                <span>jasmine:1.1</span>
            </div>
            <div class="plugcontainer">
                <input type="checkbox" />
                <span>paypal:0.6.8</span>
            </div>
             <div class="plugcontainer">
                <input type="checkbox" />
                <span>codenarc:0.18.1</span>
            </div>
             <div class="plugcontainer">
                <input type="checkbox" />
                <span>code-coverage:1.2.5</span>
            </div>
             <div class="plugcontainer">
                <input type="checkbox" />
                <span>paypal:0.6.8</span>
            </div>
             <div class="plugcontainer">
                <input type="checkbox" />
                <span>ember:0.9.8.1</span>
            </div>        

      </div> 
                           
     <div id="codeeditor" class="modal-body flush relative">   
                 
                  
            <div class="container">
                <input type="checkbox"  />   
                <span>gmap3.js</span>             
                <span>https://raw.github.com/jbdemonte/gmap3/master/gmap3.js</span>
            </div>
            <div class="container">
                <input type="checkbox" />
                <span>accounting.js</span>  
                <span>https://raw.github.com/josscrowcroft/accounting.js/master/accounting.js</span>
            </div>
            <div class="container">
                <input type="checkbox" />
                <span>analytics.js</span>
                <span>https://raw.github.com/segmentio/analytics.js/master/analytics.js</span>
            </div>
            <div class="container">
                <input type="checkbox" />
                <span>bootstrap-wysihtml5.js</span>
                <span>https://raw.github.com/jhollingworth/bootstrap-wysihtml5/master/src/bootstrap-wysihtml5.js</span>
            </div>
             <div class="container">
                <input type="checkbox"  />
                <span>cal-heatmap.js</span>
                <span>https://raw.github.com/kamisama/cal-heatmap/master/cal-heatmap.js</span>
            </div>
            <div class="container">
                <input type="checkbox"  />
                <span>bootstrap-colorpicker.js</span>
                <span>https://raw.github.com/aaronsnoswell/angular-bootstrap-colorpicker/master/js/bootstrap-colorpicker.js</span>
            </div>
            <div class="container">
                <input type="checkbox"  />
                <span>d3.js</span>
                <span>https://raw.github.com/mbostock/d3/master/d3.js</span>
            </div>
            <div class="container">
                <input type="checkbox"  />
                <span>email.js</span>
                <span>https://raw.github.com/eleith/emailjs/master/email.js</span>
            </div>
            <div class="container">
                <input type="checkbox"  />
                <span>debug.js</span>
                <span>https://raw.github.com/visionmedia/debug/master/debug.js</span>
            </div>
            <div class="container">
                <input type="checkbox"  />
                <span>expanding.js</span>
                <span>https://raw.github.com/bgrins/ExpandingTextareas/master/expanding.js</span>
            </div>
            <div class="container">
                <input type="checkbox"  />
                <span>eyes.js</span>
                <span>https://raw.github.com/cloudhead/eyes.js/master/lib/eyes.js</span>
            </div>
            <div class="container">
                <input type="checkbox"  />
                <span>finance.js</span>
                <span>https://raw.github.com/trentrichardson/FinanceJs/master/finance.js</span>
            </div>
            <div class="container">
                <input type="checkbox"  />
                <span>soundmanager2.js</span>
                <span>https://raw.github.com/joevennix/SoundManager2-JS-waveform-Meter/master/soundmanager2/script/soundmanager2.js</span>
            </div>
            <div class="container">
                <input type="checkbox"  />
                <span>jqxbuttons.js</span>
                <span>https://raw.github.com/yfeitosa/jqwidgets/master/jqwidgets/jqwidgets-ver2.1/jqwidgets/jqxbuttons.js</span>
            </div>
            <div class="container">
                <input type="checkbox"  />
                <span>jqxcalendar.js</span>
                <span>https://raw.github.com/yfeitosa/jqwidgets/master/jqwidgets/jqwidgets-ver2.1/jqwidgets/jqxcalendar.js</span>
            </div>
            <div class="container">
                <input type="checkbox"  />
                <span>jqxchart.js</span>
                <span>https://raw.github.com/yfeitosa/jqwidgets/master/jqwidgets/jqwidgets-ver2.1/jqwidgets/jqxchart.js</span>
            </div>
            <div class="container">
                <input type="checkbox"  />
                <span>jqxcheckbox.js</span>
                <span>https://raw.github.com/yfeitosa/jqwidgets/master/jqwidgets/jqwidgets-ver2.1/jqwidgets/jqxcheckbox.js</span>
            </div>
            <div class="container">
                <input type="checkbox"  />
                <span>jqxcore.js</span>
                <span>https://raw.github.com/yfeitosa/jqwidgets/master/jqwidgets/jqwidgets-ver2.1/jqwidgets/jqxcore.js</span>
            </div>
            <div class="container">
                <input type="checkbox"  />
                <span>jqxcalendar.js</span>
                <span>https://raw.github.com/yfeitosa/jqwidgets/master/jqwidgets/jqwidgets-ver2.1/jqwidgets/jqxcalendar.js</span>
            </div>
            <div class="container">
                <input type="checkbox"  />
                <span>jqxvalidatar.js</span>
                <span>https://raw.github.com/yfeitosa/jqwidgets/master/jqwidgets/jqwidgets-ver2.1/jqwidgets/jqxvalidatar.js</span>
            </div>
            <div class="container">
                <input type="checkbox"  />
                <span>jqxvalidatar.js</span>
                <span>https://raw.github.com/yfeitosa/jqwidgets/master/jqwidgets/jqwidgets-ver2.1/jqwidgets/jqxvalidatar.js</span>
            </div>
            <div class="container">
                <input type="checkbox"  />
                <span>jqxtree.js</span>
                <span>https://raw.github.com/yfeitosa/jqwidgets/master/jqwidgets/jqwidgets-ver2.1/jqwidgets/jqxtree.js</span>
            </div>
            <div class="container">
                <input type="checkbox"  />
                <span>jqxtooltip.js</span>
                <span>https://raw.github.com/yfeitosa/jqwidgets/master/jqwidgets/jqwidgets-ver2.1/jqwidgets/jqxtooltip.js</span>
            </div>
            <div class="container">
                <input type="checkbox"  />
                <span>jqxtabs.js</span>
                <span>https://raw.github.com/yfeitosa/jqwidgets/master/jqwidgets/jqwidgets-ver2.1/jqwidgets/jqxtabs.js</span>
            </div>
            <div class="container">
                <input type="checkbox"  />
                <span>jqxwitchbutton.js</span>
                <span>https://raw.github.com/yfeitosa/jqwidgets/master/jqwidgets/jqwidgets-ver2.1/jqwidgets/jqxwitchbutton.js</span>
            </div>
            <div class="container">
                <input type="checkbox"  />
                <span>jqxsplitter.js</span>
                <span>https://raw.github.com/yfeitosa/jqwidgets/master/jqwidgets/jqwidgets-ver2.1/jqwidgets/jqxsplitter.js</span>
            </div>
            <div class="container">
                <input type="checkbox"  />
                <span>jqxslider.js</span>
                <span>https://raw.github.com/yfeitosa/jqwidgets/master/jqwidgets/jqwidgets-ver2.1/jqwidgets/jqxslider.js</span>
            </div>
            <div class="container">
                <input type="checkbox"  />
                <span>jqxscrollbar.js</span>
                <span>https://raw.github.com/yfeitosa/jqwidgets/master/jqwidgets/jqwidgets-ver2.1/jqwidgets/jqxscrollbar.js</span>
            </div>
             <div class="container">
                <input type="checkbox"  />
                <span>jqxrating.js</span>
                <span>https://raw.github.com/yfeitosa/jqwidgets/master/jqwidgets/jqwidgets-ver2.1/jqwidgets/jqxrating.js</span>
            </div>
            <div class="container">
                <input type="checkbox"  />
                <span>jqxradiobutton.js</span>
                <span>https://raw.github.com/yfeitosa/jqwidgets/master/jqwidgets/jqwidgets-ver2.1/jqwidgets/jqxradiobutton.js</span>
            </div>
            <div class="container">
                <input type="checkbox"  />
                <span>jqxprogressbar.js</span>
                <span>https://raw.github.com/yfeitosa/jqwidgets/master/jqwidgets/jqwidgets-ver2.1/jqwidgets/jqxprogressbar.js</span>
            </div>
            <div class="container">
                <input type="checkbox"  />
                <span>jqxpopup.js</span>
                <span>https://raw.github.com/yfeitosa/jqwidgets/master/jqwidgets/jqwidgets-ver2.1/jqwidgets/jqxpopup.js</span>
            </div>
            <div class="container">
                <input type="checkbox"  />
                <span>jqxpanel.js</span>
                <span>https://raw.github.com/yfeitosa/jqwidgets/master/jqwidgets/jqwidgets-ver2.1/jqwidgets/jqxpanel.js</span>
            </div>
            <div class="container">
                <input type="checkbox"  />
                <span>jqxnumberinput.js</span>
                <span>https://raw.github.com/yfeitosa/jqwidgets/master/jqwidgets/jqwidgets-ver2.1/jqwidgets/jqxnumberinput.js</span>
            </div>
            <div class="container">
                <input type="checkbox"  />
                <span>jqxnavigationbar.js</span>
                <span>https://raw.github.com/yfeitosa/jqwidgets/master/jqwidgets/jqwidgets-ver2.1/jqwidgets/jqxnavigationbar.js</span>
            </div>
            <div class="container">
                <input type="checkbox"  />
                <span>jqxmenu.js</span>
                <span>https://raw.github.com/yfeitosa/jqwidgets/master/jqwidgets/jqwidgets-ver2.1/jqwidgets/jqxmenu.js</span>
            </div>
            <div class="container">
                <input type="checkbox"  />
                <span>jqxmaskedinput.js</span>
                <span>https://raw.github.com/yfeitosa/jqwidgets/master/jqwidgets/jqwidgets-ver2.1/jqwidgets/jqxmaskedinput.js</span>
            </div>
            <div class="container">
                <input type="checkbox"  />
                <span>qxlistbox.js</span>
                <span>https://raw.github.com/yfeitosa/jqwidgets/master/jqwidgets/jqwidgets-ver2.1/jqwidgets/jqxlistbox.js</span>
            </div>
            <div class="container">
                <input type="checkbox"  />
                <span>jqxgrid.sort.js</span>
                <span>https://raw.github.com/yfeitosa/jqwidgets/master/jqwidgets/jqwidgets-ver2.1/jqwidgets/jqxgrid.sort.js</span>
            </div>
            <div class="container">
                <input type="checkbox"  />
                <span>jqxselection.js</span>
                <span>https://raw.github.com/yfeitosa/jqwidgets/master/jqwidgets/jqwidgets-ver2.1/jqwidgets/jqxselection.js</span>
            </div>
            <div class="container">
                <input type="checkbox"  />
                <span>jqxpager.js</span>
                <span>https://raw.github.com/yfeitosa/jqwidgets/master/jqwidgets/jqwidgets-ver2.1/jqwidgets/jqxpager.js</span>
            </div>
            <div class="container">
                <input type="checkbox"  />
                <span>jqxgrid.js</span>
                <span>https://raw.github.com/yfeitosa/jqwidgets/master/jqwidgets/jqwidgets-ver2.1/jqwidgets/jqxgrid.js</span>
            </div>
            <div class="container">
                <input type="checkbox"  />
                <span>jqxgrid.selection.js</span>
                <span>https://raw.github.com/yfeitosa/jqwidgets/master/jqwidgets/jqwidgets-ver2.1/jqwidgets/jqxgrid.selection.js</span>
            </div>
            <div class="container">
                <input type="checkbox"  />
                <span>jqxgrid.edit.js</span>
                <span>https://raw.github.com/yfeitosa/jqwidgets/master/jqwidgets/jqwidgets-ver2.1/jqwidgets/jqxgrid.edit.js</span>
            </div>
            <div class="container">
                <input type="checkbox"  />
                <span>jqxgrid.columnresize.js</span>
                <span>https://raw.github.com/yfeitosa/jqwidgets/master/jqwidgets/jqwidgets-ver2.1/jqwidgets/jqxgrid.columnresize.js</span>
            </div>
            <div class="container">
                <input type="checkbox"  />
                <span>jqxcalendar.js</span>
                <span>https://raw.github.com/yfeitosa/jqwidgets/master/jqwidgets/jqwidgets-ver2.1/jqwidgets/jqxcalendar.js</span>
            </div>
            <div class="container">
                <input type="checkbox"  />
                <span>jqxexpander.js</span>
                <span>https://raw.github.com/yfeitosa/jqwidgets/master/jqwidgets/jqwidgets-ver2.1/jqwidgets/jqxexpander.js</span>
            </div>
            <div class="container">
                <input type="checkbox"  />
                <span>jqxdropdownbutton.js</span>
                <span>https://raw.github.com/yfeitosa/jqwidgets/master/jqwidgets/jqwidgets-ver2.1/jqwidgets/jqxdropdownbutton.js</span>
            </div>
            <div class="container">
                <input type="checkbox"  />
                <span>jqxdragdrop.js</span>
                <span>https://raw.github.com/yfeitosa/jqwidgets/master/jqwidgets/jqwidgets-ver2.1/jqwidgets/jqxdragdrop.js</span>
            </div>
            <div class="container">
                <input type="checkbox"  />
                <span>jqxdockpanel.js</span>
                <span>https://raw.github.com/yfeitosa/jqwidgets/master/jqwidgets/jqwidgets-ver2.1/jqwidgets/jqxdockpanel.js</span>
            </div>
            <div class="container">
                <input type="checkbox"  />
                <span>jqxdocking.js</span>
                <span>https://raw.github.com/yfeitosa/jqwidgets/master/jqwidgets/jqwidgets-ver2.1/jqwidgets/jqxdocking.js</span>
            </div>
            <div class="container">
                <input type="checkbox"  />
                <span>jqxdatetimeinput.js</span>
                <span>https://raw.github.com/yfeitosa/jqwidgets/master/jqwidgets/jqwidgets-ver2.1/jqwidgets/jqxdatetimeinput.js</span>
            </div>
            <div class="container">
                <input type="checkbox"  />
                <span>jqxdata.js</span>
                <span>https://raw.github.com/yfeitosa/jqwidgets/master/jqwidgets/jqwidgets-ver2.1/jqwidgets/jqxdata.js</span>
            </div>
            <div class="container">
                <input type="checkbox"  />
                <span>jqxcore.js</span>
                <span>https://raw.github.com/yfeitosa/jqwidgets/master/jqwidgets/jqwidgets-ver2.1/jqwidgets/jqxcore.js</span>
            </div>
            <div class="container">
                <input type="checkbox"  />
                <span>jqxcombobox.js</span>
                <span>https://raw.github.com/yfeitosa/jqwidgets/master/jqwidgets/jqwidgets-ver2.1/widgets/jqxcombobox.js</span>
            </div>
          
           
      </div> 

      <div id="injectjscode" class="modal-body flush relative">   
    
         <textarea  id="code" name="code" >  </textarea>
      
      </div>
      <div id="jsName" class="modal-body relative">
           
         <input type="text" id="jsFileName"  title="Enter URL of JS file here...">

      </div>    
     <div class="modal-footer">
          <a href="#" class="btn pull-left" data-dismiss="modal" style="">Cancel</a> 
          <a href="#" class="btn btn-success" data-action="injectionPoint"><div class="green-icon check"></div> Submit</a>             
          <a href="#" id="selectjsbutton" class="btn btn-success" data-action=""><div class="green-icon check"></div> Select JS Files</a>
          <a href="#" id="urlbutton" class="btn btn-success" data-action=""><div class="green-icon check"></div> Enter URL</a>
          <a href="#" id="injectcodebutton" class="btn btn-success" data-action=""><div class="green-icon check"></div> Inject Your Code Here</a>       
    </div>
  </div>

 
   <style>
   #injectcode-modal {
    color: black;
    border: 1px solid gray;
    padding: 30px;
    display: block;
    position: absolute;
    top: 300px;
    height: 1500px;
  }
  #codeeditor > .container > h3{
    font-size: 12px;
  }
  
   </style>


  <div class="modal hide" id="projects-modal" style="display: none;" aria-hidden="true">
    <div class="modal-header">
      <h3>Screens</h3>
    </div>
    <div class="modal-body flush relative">
      <table class="flat" id="projects-list">
        <thead>
          <tr>
            <th class="name">NAME</th>
            
            <th></th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
      
      <div id="projects-list-empty" style="display: none">You have no projects yet, start one below</div>
      
    </div>
    <div class="modal-footer">
      <a class="btn pull-left" href="#" data-dismiss="modal" style="display: none;">Close</a>
      
      <a class="btn btn-success" href="#" data-action="new-project"><div class="green-icon plus"></div> New Screen</a>
      
    </div>
  </div>
  
 
  
  <div class="modal hide" id="new-project-modal" style="display: none;" aria-hidden="true">
    <div class="modal-header">
      <h3><div class="logo-red"></div> Start a new screen</h3>
    </div>
    <div class="modal-body relative">
      <form>
        <label>Name</label>
        <input type="text" name="name">
        <!--  <label>Choose a starting template for your new screen:</label>-->
        <div class="btn-group template-selection" data-toggle="buttons-radio">
          <a data-template="none" class="active template-none"> <div class="image"></div> </a>         
        </div>
      </form>
    </div>
    <div class="modal-footer">
      <a href="#" class="btn pull-left" data-dismiss="modal" style="">Cancel</a>
      
      <a href="#" class="btn btn-success create" data-action="create"><div class="green-icon check"></div> Create</a>
    </div>
  </div>
  
  
 
  <div class="modal hide" id="createNewProject" style="display: none;" aria-hidden="true">
    <div class="modal-header">
      <h3><div class="logo-red"></div> Start a new Project</h3>
    </div>
    <div class="modal-body relative">
      <form>
        <label>Name</label>
        <input type="text" name="name">        
        <div class="btn-group template-selection" data-toggle="buttons-radio">
          <a data-template="none" class="active template-none"> <div class="image"></div> </a>         
        </div>
      </form>
    </div>
    <div class="modal-footer">              
      <a href="#"  class="btn btn-success create" data-action="createNewProject"><div class="green-icon check"></div>Create</a>
    </div>
  </div>
  
  
 
  <div class="modal hide" id="billing-promo-modal">
    <form action="/beta/subscribe" method="POST" id="payment-form">
    <div style="display:none"><input type="hidden" name="csrfmiddlewaretoken" value="ofyl9KGMevAyP1cRAxATvcScWDnYGUFr"></div>
    <div class="modal-body">
      <!--
      <div id="plan-toggle" class="btn-group" data-toggle="buttons-radio">
        <a class="btn active" data-plan="jetstrap-beta-monthly">Monthly ($10/mo)</a>
        <a class="btn" data-plan="jetstrap-beta-yearly">Yearly ($8.33/mo)</a>
      </div>
      -->
      <div class="clearfix">
        <div class="left plan-info">
          <div class="text-center price">
            
           
            <span class="red">BILLED YEARLY, OR $14 EACH MONTH</span>
          </div>
          <ul class="checkmarks proxima">
            <li>100 Screens</li>
            <li>Unlimited HTML Exporting</li>
            <li>Unlimited Saving &amp; Loading</li>
            <li>Email Support</li>
          </ul>
        </div>
        <div class="left card-info">
          <div>
            <div class="clearfix">
              <span style="font-size: 10px; color: #111;">Powered by</span> 
              <div class="payment-errors errorlist"></div>
              <div class="fg left">
                <label>Full Name on Card</label>
                <input type="text" size="20" autocomplete="off" class="card-name">
              </div>
              <div class="fg left">
                <label>Card Number</label>
                <input type="text" size="20" autocomplete="off" class="card-number">
              </div>
              <div class="fg left margin-left">
                <label>CVC</label>
                <input type="text" size="4" autocomplete="off" class="card-cvc">
              </div>
            </div>
            <div class="fg">
              <label>Expiration (MM/YYYY)</label>
              <input type="text" size="2" class="card-expiry-month">
              <span> / </span>
              <input type="text" size="4" class="card-expiry-year">
            </div>
            <div class="fg">
              <label>Plan Choice</label>
              <select name="plan">
                <option value="jetstrap-beta-yearly">Yearly - $120/year</option>
                <option value="jetstrap-beta-monthly">Monthly - $14/month</option>
              </select>
            </div>
            <div class="fg">
              <a href="#" id="coupon-code">Enter promo code</a>
              <div id="coupon-entry" class="hidden">
                <input type="text" name="coupon" placeholder="Promo code" style="width: 97px">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <a class="btn pull-left" data-dismiss="modal">Cancel</a>
      <button type="submit" class="btn btn-success submit-button"><div class="green-icon lock"></div>Pay</button>
    </div>
    </form>
  </div>
  
  
  <div class="modal hide" id="billing-modal">
    <form action="/beta/subscribe" method="POST" id="payment-form">
    <div class="modal-header">
      <button type="button" class="close" data-dismiss="modal">×</button>
      <h3>Billing</h3>
    </div>
    <div class="modal-body">
        <div style="display:none"><input type="hidden" name="csrfmiddlewaretoken" value="ofyl9KGMevAyP1cRAxATvcScWDnYGUFr"></div>
      
      
      <h4>
        100 screens. Unlimited saving and exporting.
      </h4>
      
      <div id="plan-toggle" class="btn-group" data-toggle="buttons-radio">
        <a class="btn active" data-plan="jetstrap-beta-monthly">Monthly ($10/mo)</a>
        <a class="btn" data-plan="jetstrap-beta-yearly">Yearly ($8.33/mo)</a>
      </div>
      <div class="clearfix">
        <div class="card-info">
          <div class="clearfix">
            <div class="fg left">
              <label>Card Number</label>
              <input type="text" size="20" autocomplete="off" class="card-number">
            </div>
            <div class="fg left margin-left">
              <label>CVC</label>
              <input type="text" size="4" autocomplete="off" class="card-cvc">
            </div>
          </div>
          <div class="fg">
            <label>Expiration (MM/YYYY)</label>
            <input type="text" size="2" class="card-expiry-month">
            <span> / </span>
            <input type="text" size="4" class="card-expiry-year">
          </div>
        </div>
      </div>
      <div class="fg">
        <a href="#" id="coupon-code">Enter promo code</a>
        <div id="coupon-entry" class="hidden">
          <input type="text" name="coupon" placeholder="Promo code" style="width: 97px">
        </div>
      </div>
      <div class="fg">
        <b>Total:</b> <span id="plan-total">$10.00</span>
      </div>
      <div class="payment-errors errorlist"></div>
      
    </div>
    <div class="modal-footer">
      <a class="btn pull-left" data-dismiss="modal">Close</a>
    </div>
    </form>
  </div>
  
  
  <div class="modal hide" id="projects-modal">
    <div class="modal-header">
      <h3>Referral a friend</h3>
    </div>
    <div class="modal-body">
      Refer a friend. For every friend that signs up and becomes a paying customer, youll both get a month free of Jetstrap!
      <p>
        
      </p>
    </div>
    <div class="modal-footer">
      <a href="#" class="btn" data-dismiss="modal" style="display: inline-block;">Close</a>
    </div>
  </div>
  
 
  
  
  
  <div id="minimize-components" class="ds-button transparent" style="display: none">Components</div>
  
 

  <div class="jqueryui">
  <span class="ui-dialog-title" id="ui-dialog-title-components">Components</span>
  <a href="#" class="ui-dialog-titlebar-close ui-corner-all" role="button">  <span class="ui-icon ui-icon-closethick">close</span></a>
  </div>  
  <div class="pane ui-dialog-content ui-widget-content" id="components" style="display: block; width: 270px; min-height: 0px; height: 349px; " scrolltop="0" scrollleft="0">  
         
          <li><h3>Buttons   </h3> 
                 
            <ul class="clearfix">                             
              <li data-type="button" class="ui-draggable">Button</li>
              <li data-type="buttongroup" class="ui-draggable">Button Group</li>
              <li data-type="buttontoolbar" class="ui-draggable">Button Toolbar</li>                                
            </ul>  
                                   
          </li>          
          <li><h3>Containers   </h3> 
                
            <ul class="clearfix">            
              <li data-type="container" class="ui-draggable">Main Container</li>
              <li data-type="content" class="ui-draggable">Content</li>
              <li data-type="hero" class="ui-draggable">Hero Unit</li>
              <li data-type="alert" class="ui-draggable">Alert</li>
              <li data-type="well" class="ui-draggable">Well</li>            
            </ul>
                        
          </li>
       
          <li><h3>Navigation</h3>
            <ul class="clearfix">
              <div class="clearfix">
                <li data-type="navbar" class="ui-draggable">Navbar</li>
                <li data-type="navbarbrand" class="ui-draggable">Navbar Brand</li>
                <li data-type="navbarlinks" class="ui-draggable">Navbar Links</li>
                <li data-type="navbarlinkitem" class="ui-draggable">Navbar Link Item</li>
                <li data-type="navbarlinkdivider" class="end ui-draggable">Navbar Link Divider</li>
              </div>

              <div class="clearfix">
                <li data-type="navlist" class="ui-draggable">Nav List</li>
                <li data-type="navlistheader" class="ui-draggable">Nav List Header</li>
                <li data-type="navlistitem" class="end ui-draggable"><Nav List Item</li>
              </div>

              <div class="clearfix">
                <li data-type="tabs" class="start ui-draggable">Tabs</li>
                <li data-type="tabitem" class="end ui-draggable">Tab item</li>
              </div>

              <div class="clearfix">
                <li data-type="breadcrumbs" class="start ui-draggable">Breadcrumbs</li>
                <li data-type="breadcrumbitem" class="ui-draggable">Breadcrumb Item</li>
                <li data-type="breadcrumbdivider" class="end ui-draggable">Breadcrumb Divider</li>
              </div>

              <div class="clearfix">
                <li data-type="pagination" class="start ui-draggable">Pagination</li>
                <li data-type="paginationitem" class="end ui-draggable">Pagination Item</li>
              </div>
            </ul>
          </li>
          <li><h3>Forms</h3>
            <ul class="clearfix">
              <li data-type="form" class="ui-draggable">Form</li>
              <li data-type="textinputgroup" class="ui-draggable">Text Input</li>
              <li data-type="selectinputgroup" class="ui-draggable">Select Input</li>
              <li data-type="fileinputgroup" class="ui-draggable">File Input</li>
              <li data-type="textareainputgroup" class="ui-draggable">Textarea</li>
            </ul>
          </li>
          <li><h3>Scaffolding</h3>
            <ul class="clearfix">
              <li data-type="gridrow" class="ui-draggable">Grid Row</li>
              <li data-type="fluidgridrow" class="ui-draggable">Fluid Grid Row</li>
              <li data-type="gridcol1" class="ui-draggable">span-1</li>
              <li data-type="gridcol2" class="ui-draggable">span-2</li>
              <li data-type="gridcol3" class="ui-draggable">span-3</li>
              <li data-type="gridcol4" class="ui-draggable">span-4</li>
              <li data-type="gridcol6" class="ui-draggable">span-6</li>
              <li data-type="gridcol8" class="ui-draggable">span-8</li>
              <li data-type="gridcol12" class="ui-draggable">span-12</li>
            </ul>
          </li>
          <li><h3>Typography/Formatting</h3>
            <ul class="clearfix">
              <li data-type="heading" class="ui-draggable">Heading</li>
              <li data-type="pageheader" class="ui-draggable">Page Heading</li>
              <li data-type="image" class="ui-draggable">Image</li>
              <li data-type="icon" class="ui-draggable">Icon</li>
            </ul>
          </li>
          <li><h3>Tables</h3>
            <ul class="clearfix">
              <li data-type="table" class="ui-draggable">Table</li>
              <li data-type="tablerow" class="ui-draggable">Table Row</li>
              <li data-type="tablecell" class="ui-draggable">Table Cell</li>
            </ul>
          </li>
          <li><h3>Misc</h3>
            <ul class="clearfix">
              <li data-type="progressbar" class="ui-draggable">Progress Bar</li>
              <li data-type="hr" class="ui-draggable">Horizontal Rule</li>
            </ul>
          </li>
       
      </div>

      <div class="ui-resizable-handle ui-resizable-n" style="z-index: 1000; "></div><div class="ui-resizable-handle ui-resizable-e" style="z-index: 1000; "></div><div class="ui-resizable-handle ui-resizable-s" style="z-index: 1000; "></div><div class="ui-resizable-handle ui-resizable-w" style="z-index: 1000; "></div><div class="ui-resizable-handle ui-resizable-se ui-icon ui-icon-gripsmall-diagonal-se ui-icon-grip-diagonal-se" style="z-index: 1000; "></div><div class="ui-resizable-handle ui-resizable-sw" style="z-index: 1000; "></div><div class="ui-resizable-handle ui-resizable-ne" style="z-index: 1000; "></div><div class="ui-resizable-handle ui-resizable-nw" style="z-index: 1000; "></div></div><div style="display: none; z-index: 1000; outline: 0px; position: relative; " class="ui-dialog ui-widget ui-widget-content ui-corner-all ui-draggable ui-resizable" tabindex="-1" role="dialog" aria-labelledby="ui-dialog-title-properties"><div class="ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix"><span class="ui-dialog-title" id="ui-dialog-title-properties">Properties</span><a href="#" class="ui-dialog-titlebar-close ui-corner-all" role="button"><span class="ui-icon ui-icon-closethick">close</span></a></div><div class="pane ui-dialog-content ui-widget-content" id="properties" style="display: block; width: 250px; ">
      </div><div class="ui-resizable-handle ui-resizable-n" style="z-index: 1000; "></div><div class="ui-resizable-handle ui-resizable-e" style="z-index: 1000; "></div><div class="ui-resizable-handle ui-resizable-s" style="z-index: 1000; "></div><div class="ui-resizable-handle ui-resizable-w" style="z-index: 1000; "></div><div class="ui-resizable-handle ui-resizable-se ui-icon ui-icon-gripsmall-diagonal-se ui-icon-grip-diagonal-se" style="z-index: 1000; "></div><div class="ui-resizable-handle ui-resizable-sw" style="z-index: 1000; "></div><div class="ui-resizable-handle ui-resizable-ne" style="z-index: 1000; "></div><div class="ui-resizable-handle ui-resizable-nw" style="z-index: 1000; "></div></div></div>

      <div id="preview_div"></div>

  <g:javascript src="jquery.js" />
  <g:javascript src="jquery-ui.js" />
  <script>window.jQuery || document.write('<script src="js/libs/jquery-1.7.2.js"><\/script>')</script>

  <!-- libraries -->
  <g:javascript src="underscore-min.js" />
   <g:javascript src="backbone-min.js" />
   
   <g:javascript src="etch.js" />
   <g:javascript src="ace.js" />
   <g:javascript src="mode-javascript.js" />
   <g:javascript src="mode-css.js" />
   <g:javascript src="mode-html.js" />
   <g:javascript src="bootstrap.js" />
   <!--<g:javascript src="jquery-ui-1.8.22.custom.min.js" />-->
   <g:javascript src="handlebars-1.0.0.beta.6.js" />
   <g:javascript src="Markdown.Converter.js" />
   <g:javascript src="keymaster.js" />
   <g:javascript src="beautify.js" />
   <g:javascript src="beautify-html.js" />
  
  <g:javascript src="extras.js" />
  <g:javascript src="builder.js" />

  <g:javascript src="codemirror.js" />
  <g:javascript src="matchbrackets.js" />
  <g:javascript src="continuecomment.js" />
  <g:javascript src="javascript.js" />
  <g:javascript src="collapserange.js" />
  <g:javascript src="closebrackets.js" />


  <script>
    
 
    
     function getNewProjectId( )    /*stores project id of new project created*/
    {           
        var newIdTOSendBack = [];
        $.ajax({
             type: "POST",
             url: "/rapper/PageDetails/getnewprojectid",               
             async:false
         }).done(function(data) {               
              $("#hiddenProjectId").val(data.proIdFromController);
              $("#hiddenPageId").val(data.pageIdFromController[0]);                              
              newIdTOSendBack[0]= data.proIdFromController;     
              newIdTOSendBack[1]= data.pageIdFromController;                             
         });
         return newIdTOSendBack;            
    }
           
    function loadPageFromDB(pageId)     /*load single page from database to frame*/
    {                         
        var dataTOSend; 
            $.ajax({
             type: "GET",
             url: "/rapper/PageDetails/loadPage",  
             data: {pageId:pageId},
             async: false        
         }).done(function(data) { 
            $("#hiddenPageId").val(pageId);                                                
            dataTOSend = data.keyValue.toString();              
         });    
         return dataTOSend; 
    }
  
  
    function getPageNamesFromDB()   /*get all pages related to perticular project and display them for opening or deleting them*/
    {                    
        var count = 0;
        var projectId = $("#hiddenProjectId").val();
        var projectTemplate = Handlebars.compile($("#view-snippet-project-entry").html());      
         $.ajax({
             type: "GET",
             url: "/rapper/PageDetails/getPages",  
             data: {projectId : projectId},         
         }).done(function(data) { 
                 $("#projects-list tbody").empty();  
                 if(data.pageNames){
                        jQuery.each(data.pageNames,function(index,value){
                             var temp = projectTemplate({unique_id : data.pageIds[index] , name : value }); 
                             if(value){                
                                $("#projects-list tbody").append(temp);  
                             }               
                        });
                }     
         });         
    }
    
    
    
    function sendDataTOQuickController( pageId , pageName,  pageTree , pageHtml)    /*save page details into database*/
    {                 
      var newIdTOSendBack;
      var newPageId;                  
      if(pageId == null)
      {
       newPageId = "";
      }
      else
      {
        newPageId = $("#hiddenPageId").val();
      }           
              
      var projectId = $("#hiddenProjectId").val();
        $.ajax({
             type: "POST",
             url: "/rapper/PageDetails/savePages",
             data: { projectId : projectId , pageId : newPageId , name : pageName, tree: pageTree , html: pageHtml  },
             async:false
         }).done(function(data) {                     
              $("#hiddenPageId").val(data);
              newIdTOSendBack = $("#hiddenPageId").val();                        
         });
          if(newIdTOSendBack == "")
          {                                         
                    $.ajax({
                         type: "POST",
                         url: "/rapper/PageDetails/getnewpageid",   
                         data: { projectId : projectId } ,                     
                         async:false
                     }).done(function(data) {                                    
                        $("#hiddenPageId").val(data.idFromController);
                        newIdTOSendBack = $("#hiddenPageId").val();
                     });          
            }   
        return newIdTOSendBack;
    }
  
  function getAllPagesForUrl()  /*get all pages related to perticular project from database for linking purpose*/
  {
        var projectId = $("#hiddenProjectId").val();
        var allPages = [];
        var allIds = [];
        $.ajax({
             type: "POST",
             url: "/rapper/PageDetails/getPages",
             data: { projectId : projectId },
             async:false
         }).done(function(data) {                                              
             allPages = data.pageNames;                       
         });                   
       return allPages;
  }
  

function exportPages( fullHtml )    /*export current page in the form of gsp to the current project folder*/
{
    getPageName();                
    var pageName = $("#hiddenPageName").val();
                  
    $.ajax({
             type: "POST",
             url: "/rapper/PageDetails/exportPage",
             data: { fullHtml : fullHtml , pageName : pageName},
             async : false
           }).done(function(data) {                                                                                             
           });
}         

function getPageName()      /*Get page name from given pageid*/
{
    var pageId =  $("#hiddenPageId").val();
      $.ajax({
             type: "GET",
             url: "/rapper/PageDetails/loadPage",  
             data: {pageId : pageId},
             async: false        
         }).done(function(data) { 
            $("#hiddenPageName").val(data.pageName); 
          
         });    
}   


function getPageIdForPreview(pageName)  /*Get all ids of pages related to current project from database*/
{
    var projectId = $("#hiddenProjectId").val();
    var dataTOSend;
    $.ajax({
             type: "GET",
             url: "/rapper/PageDetails/getPages",
             data: { projectId : projectId},
             async : false
           }).done(function(data) {                            
                    jQuery.each(data.pageNames,function(index,value){                             
                        if(pageName == value)
                        {                                        
                            dataTOSend = data.pageIds[index];                                          
                        }
                    });                                                                                            
            });
           return dataTOSend;
}

function deletePageFromDB(pageId)   /*Delete page from database by providing pageid*/
{
    var projectId = $("#hiddenProjectId").val();   
    
    
    $.ajax({
             type: "GET",
             url: "/rapper/PageDetails/deletepages",
             data: { pageId: pageId },
             async : false
           }).done(function(data) {                            
                                                                                               
            });
}



function warFileCreation()  /*Create gsp pages and .war file of the current application and provide option for download that war file*/
{

    var allPages = [];
    allPages = getAllPagesForUrl();

    $.ajax({
             type: "POST",
             url: "/rapper/PageDetails/createControllerActions",  
             data: {actionNames : JSON.stringify(allPages) },
             async: false         
         }).done(function(data) {                            
                   alert('done');                                                                                       
         });

     /* jQuery.each(allPages,function(index,value){
          $.ajax({
             type: "POST",
             url: "/rapper/PageDetails/createControllerActions",  
             data: {actionNames : value },
             async: false         
         }).done(function(data) {                            
                   alert('done');                                                                                       
         });

        });*/

    $.ajaxSetup({async:true});
    $.ajax({
             type: "POST",
             url: "/rapper/PageDetails/createWarFile",                
             async : false
           }).done(function(data) {                            
                   alert('done`');                                                                                       
            });
    $.ajaxSetup({async:false});       
    window.location.href="/rapper/pageDetails/downloadwarfile";
}
  </script>
 

<div id="effect" class="ui-widget-content ui-corner-all">
    <h3 class="ui-widget-header ui-corner-all">Show</h3>
    <p>
      Etiam libero neque, luctus a, eleifend nec, semper at, lorem. Sed pede. Nulla lorem metus, adipiscing ut, luctus sed, hendrerit vitae, mi.
    </p>
  </div>


  <script>
  function labelforText()
  {
          $('#jsFileName').each(function(){

            this.value = $(this).attr('title');            

            $(this).focus(function(){
                if(this.value == $(this).attr('title')) {
                    this.value = '';                    
                }
            });

            $(this).blur(function(){
                if(this.value == '') {
                    this.value = $(this).attr('title');                    
                }
            });
        });   
        $('#searchJS').each(function(){

            this.value = $(this).attr('title');            

            $(this).focus(function(){
                if(this.value == $(this).attr('title')) {
                    this.value = '';                    
                }
            });

            $(this).blur(function(){
                if(this.value == '') {
                    this.value = $(this).attr('title');  
                     $("#codeeditor .container").show();
                     $("#plugineditor .plugcontainer").show();                 
                }
            });
        });               

         
}
  </script>


  <script>
   
    $(document).ready(function() {
        
      labelforText();  
      $("#buildui").hide();    
      $("#components").accordion({heightStyle: "content"});    
      $("#jsName,#injectjscode,#selectjsbutton,#plugineditor").hide();
      $("#searchJS").keyup(function() {
          var textValue = $(this).val();          
          $("#codeeditor :checkbox").each(function() {
                        var jsfiletext =  $(this).closest(".container").find("span").text();                                        
                        if (jsfiletext.indexOf(textValue) !=-1) {
                             $("#codeeditor .container").hide();                          
                            $(this).closest(".container").show(); 
                        }
          })
          $("#plugineditor :checkbox").each(function() {
                        var jsfiletext =  $(this).closest(".plugcontainer").find("span").text();                
                        if(jsfiletext.indexOf(textValue) !=-1) {                             
                            $("#plugineditor .plugcontainer").hide();                          
                            $(this).closest(".plugcontainer").show();                                             
                        }
          })
        });
      $("#urlbutton").click(function(){
            $("#injectjscode,#codeeditor,#searchJS,#urlbutton,#plugineditor").hide();
            $("#jsName,#injectcodebutton,#selectjsbutton").show();                    
      });
      $("#injectcodebutton").click(function(){
            $("#jsName,#codeeditor,#searchJS,#injectcodebutton,#plugineditor").hide();
            $("#injectjscode,#urlbutton,#selectjsbutton").show();
      }); 
      $("#selectjsbutton").click(function(){
            $("#jsName,#injectjscode,#searchJS,#selectjsbutton,#plugineditor").hide();
            $("#codeeditor,#urlbutton,#injectcodebutton,#searchJS").show();
      });   
      $("#getplugins").click(function(){
          $("#injectjscode,#codeeditor,#jsName").hide();
          $("#plugineditor,#injectcodebutton,#selectjsbutton,#urlbutton").show();  
      });
      $( "#getplugins" ).tooltip({
          show: {
            effect: "slideDown",
            delay: 250
          }
       });
     
    
      $("#codeeditor > .container > input").each(function() {
              $(this).closest(".container").find("span:odd").hide();
           
         });


    });
 </script>
    
</body>
    </html>