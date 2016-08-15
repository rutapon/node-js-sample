/// <reference path="NwLib/NwLib.js" />
/// <reference path="lib/jquery/jquery-2.1.1.js" />
/// <reference path="lib/backbone/backbone.js" />
/// <reference path="lib/underscore/underscore.js" />


(function () {
    var host = window.location.hostname;
    var port = window.location.port;
    var protocol = 'ws:';
    //var host = 'localhost';
    //var host = 'newww.dyndns.org';
    //alert(window.location.protocol + window.location.port);

    if (window.location.protocol == 'https:') {
        protocol = 'wss:';
        var wsClient = app.wsClient = new NwWsClient(protocol + '//' + host + ":" + port, { secure: true });
    } else {
        var wsClient = app.wsClient = new NwWsClient(protocol + '//' + host + ":" + port);
    }
    var stockMethod = app.stockMethod = new NwStockServiceConn(wsClient);
    wsClient.setOnConnectEventListener(function (socket) {
        var id = wsClient.getId();
        console.log('onConnect ' + id);
    });

    wsClient.setOnDisconnectEventListener(function myfunction() {

    });

 
})();
