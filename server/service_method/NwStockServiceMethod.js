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

    //var databases = {};

    //var getDb = function (stockName) {
    //    return databases[stockName];
    //}

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

    var NwDatabaseServiceMethodClass = Class({

        constructor: function (dbPath) {
            this.dbPath = dbPath;
            this.colName = 'nwDic';

            this.dbConn = new NwDbConnection('mongodb://newww:123456@ds161505.mlab.com:61505/nwdict', function () {

            });

        },

        count: function (data, cb) {
            this.dbConn.count(this.colName, {}, function (result) {
                cb(result);
            });
        },
        searchStartWith: function (data, cb) {
            var limit = 25;
            var esearch = data.esearch;
            this.dbConn.findStartWith(this.colName, { esearch: esearch }, limit, function (docs) {
                var searchWordArray = _.pluck(docs, 'esearch');
                if (cb) cb(searchWordArray);
            });
        },
        searchStartWith_limit: function (data, cb) {
            var limit = data.limit;
            var esearch = data.esearch;
            this.dbConn.searchStartWith(this.colName, { esearch: esearch }, limit, function (docs) {
                var docs = _.pluck(docs, 'esearch');
                docs = _.sortBy(docs, function (esearch) {
                 
                    return esearch.toLowerCase();
                });
                if (cb) cb(docs);
            });
        },
        searchContain: function (data, cb) {

        },
        searchContain_limit: function (data, cb) {

        },
        searchWhere: function (data, cb) {

        },
        findWord: function (data, cb) {
            var esearch = data.esearch;
            this.dbConn.findOne(this.colName, { esearch: esearch }, cb);
        }
    });


    if (typeof module !== "undefined" && module.exports) {                       // NodeJS/CommonJS
        module.exports = new NwDatabaseServiceMethodClass();
    } else {

        context.NwDatabaseServiceMethod = new NwDatabaseServiceMethodClass();
    }

})(this);