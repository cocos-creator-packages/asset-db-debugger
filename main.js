'use strict';

module.exports = {
  load () {
  },

  unload () {
  },

  'asset-db-debugger:open' (event, uuid) {
    Editor.Panel.open('asset-db-debugger.panel');
  },

  'asset-db-debugger:query-info' ( event, reply ) {
    var results = [];
    for ( var p in Editor.assetdb._path2uuid ) {
      var url = Editor.assetdb._url(p);
      results.push({ url: url, uuid: Editor.assetdb._path2uuid[p] });
    }
    results.sort( function ( a, b ) {
      return a.url.localeCompare(b.url);
    });
    reply(results);
  },
};
