
var x = ;
var url = 'http://mylogger.io/log';

function log(message){
    //send http request 
    console.log(message);
}

// making this public
module.exports.log = log;
// better not share the url
// module.export.Endpoint = url;