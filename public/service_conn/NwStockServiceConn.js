/// <reference path="../../lib/socket.io-1.0.6.js" />
/// <reference path="../../Lib/step/step.js" />
/// <reference path="../lib/async/async.js" />
/// <reference path="../../NwLib/NwLib.js" />


/// <reference path="../NwConn/NwConn.js" />



(function (context, undefined) {
    //#region requre

    if (typeof module !== "undefined") {

        NwLib = require('../NwLib/NwLib.js');
        Class = NwLib.Nwjsface.Class;

        //NwDataMsgObj = require('../NwUtil/NwDataMsgObj.js');

        ////http = require('http');

        //NwConn = require('../NwConn/NwConn.js');

        //_ = require('../Lib/underscore/underscore.js');

    } else {

    }

    //#endregion
    var NwStockServiceConn = Class(function () {

        return {
            //$singleton: true,
            wsClient: {},

            constructor: function (wsClient) {
                this.wsClient = wsClient;
            },

            count: function (cb) {
                this.wsClient.callService('count', {}, cb);
            },

            searchStartWith: function (stockName, cb) {
                this.wsClient.callService('searchStartWith', { stockName: stockName }, cb);
            },

            searchStartWith_limit: function (stockName, findWord, limit, cb) {
                this.wsClient.callService('searchStartWith_limit', { stockName: stockName, findWord: findWord, limit: limit }, cb);
            },
            searchContain: function (stockName, insertObj, cb) {
                insertObj.stockName = stockName;
                this.wsClient.callService('searchContain', insertObj, cb);
            },
            searchContain_limit: function (stockName, updateObj, cb) {
                updateObj.stockName = stockName;
                this.wsClient.callService('searchContain_limit', updateObj, cb);
            },
            searchWhere: function (stockName, code, cb) {
                this.wsClient.callService('searchWhere', { stockName: stockName, code: code }, cb);
            },
            findWord: function (dataObj, cb) {
                this.wsClient.callService('findWord', dataObj, cb);
            }
          
        };
    });

    if (typeof module !== "undefined" && module.exports) {                       // NodeJS/CommonJS
        module.exports = NwStockServiceConn;
    } else {

        context.NwStockServiceConn = NwStockServiceConn;
    }

})(this);
