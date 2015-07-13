module.exports = {
    load: function () {
    },

    unload: function () {
    },

    'asset-db-debugger:open': function (uuid) {
        Editor.Panel.open('asset-db-debugger.panel');
    },

    'asset-db-debugger:query-info': function ( reply ) {
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
