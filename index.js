var express = require('express')
var app = express();


app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))


var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://newww:123456@ds161505.mlab.com:61505/nwdict';

var col = null;
MongoClient.connect(url, function (err, db) {
    // Create a collection we want to drop later
    col = db.collection('nwDic');

    col.ensureIndex({ esearch: 1 }, function (err, indexName) {
        // If there was an error, err is not null
        if (err)
            alert(err);

        console.log(indexName);
    });


    // Insert a bunch of documents
    col.find({}).count(function (err, num) {
        console.log(num);
    });
    //var reg = new RegExp('^' + 'test', 'i');
    //var query = { esearch: { $regex: reg } };

    //var whereFn = function () {
    //    return reg.test(this.esearch);
    //};
    //var query = {
    //    $where: whereFn
    //};

});


app.get('/', function (request, response) {
    response.send('Hello World!')
})

app.get('/test', function (request, response) {
    var reg = new RegExp('^' + 'cat', 'i');
    //console.log(reg);
    var query = { esearch: { $regex: reg } };

    col.find(query).sort({ esearch: 1 }).limit(3).
        toArray(function (err, docs) {
            //console.log(docs);
            response.send(JSON.stringify(docs))
        });
})

app.listen(app.get('port'), function () {
    console.log("Node app is running at localhost:" + app.get('port'))
})