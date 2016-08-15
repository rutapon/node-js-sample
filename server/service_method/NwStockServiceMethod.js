/// <reference path="../../lib/NwLib.js" />
/// <reference path="../../lib/underscore/underscore.js" />
/// <reference path="../NwConn/NwDbConnection.js" />
/// <reference path="../NwServiceProcess.js" />


(function (context, undefined) {
    //#region requre

    if (typeof module !== "undefined") {
        NwLib = require('../../lib/NwLib.js');
        _ = require('../../lib/underscore/underscore.js');
        Class = NwLib.Nwjsface.Class;
        NwDbConnection = require('../NwConn/NwDbConnection.js');
        NwServiceProcess = require('../NwServiceProcess.js');

    } else {

    }
    //#endregion

    var databases = {};

    var getDb = function (stockName) {
        return databases[stockName];
    }

    //var NwDatabaseServiceMethod = {
    //    count: function (data, callback) {

    //        if (callback) {        
    //            callback(426);
    //        }
    //    },

    //getAllDatabaseName: function (data, cb) {
    //    if (cb) { cb(_.keys(databases)) };
    //},

    //findeStartWith: function (data, cb) {

    //    var dbName = 'main';//data.stockName;
    //    var findWord = data.findWord;
    //    var limit = data.limit ? data.limit : 20;
    //    //var stock = new NwDbConnection(__dirname + '/../Database/stock/stock1.s3db'); //getDb(stockName);
    //    var stock = getDb(stockName);
    //    stock.findStartWith(productTableName, { code: findWord, name: findWord }, limit, function (result) {
    //        if (cb) { cb(result) }
    //    });

    //},

    //findeSupplyLog: function (data, cb) {

    //    var dbName = 'main';//data.stockName;
    //    //delete data.stockName;
    //    console.log('findeSupplyLog', data);
    //    //var product_id = data.product_id;{ product_id: product_id }
    //    var db = getDb(stockName);

    //    if (data.limit) {
    //        db.findLimit(supplyLogTableName, data, data.limit, function (result) {
    //            if (cb) { cb(result) }
    //        });
    //    } else {
    //        db.find(supplyLogTableName, data, function (result) {
    //            if (cb) { cb(result) }
    //        });
    //    }
    //}

    //};

    var NwDatabaseServiceMethodClass =  Class({

        constructor: function (dbPath) {
            this.dbPath = dbPath;
        },

        count: function (data, callback) {
            if (callback) callback(426);
        },
        searchStartWith: function (data, cb) {

        },
        searchStartWith_limit: function (data, cb) {

        },
        searchContain: function (data, cb) {

        },
        searchContain_limit: function (data, cb) {

        },
        searchWhere: function (data, cb) {

        },
        findWord: function (data, cb) {

        }
    });


    if (typeof module !== "undefined" && module.exports) {                       // NodeJS/CommonJS
        module.exports = new NwDatabaseServiceMethodClass();
    } else {

        context.NwDatabaseServiceMethod = new NwDatabaseServiceMethodClass();
    }

})(this);