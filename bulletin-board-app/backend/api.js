const statusCodes = require('http').STATUS_CODES;
const httpConstants = require('http2').constants;
// Instantiate a DynamoDB document client with the SDK
const { docClient, getCommand, deleteCommand, putCommand, scanCommand } = require("./aws");

exports.events = function (req, res) {
  let id = req.query.id;
  if (id) {
    getCommand.input.Key.id = Number(id);
    docClient.send(getCommand).then(
        (data) => {
            res.send(data.Item);
        },
        (error) => {
            console.log(error);
            res.send(error);
        }
      );
  } else {
    
      docClient.send(scanCommand).then(
        (data) => {
            res.json(data.Items);
        },
        (error) => {
            console.log(error);
            res.send(error);
        }
      );
  }
};

exports.event = function (req, res) {
  let body = req.body;
  let id = req.params.eventId;
  if (id && req.method === httpConstants.HTTP2_METHOD_DELETE) {
    
    deleteCommand.input.Key.id = Number(id);
        docClient.send(deleteCommand).then(
            (data) => {
                res.send(data);
            },
            (error) => {
                console.log("delete error " + error);
                res.send(error);
            }
        );
  } else  if (req.method === httpConstants.HTTP2_METHOD_POST && body.title.trim()) {
    body.id = Date.now();
    // Create JSON object with parameters for DynamoDB and store in a variable
    let params = {
        TableName:'event',
        Item: body
    };
        // writes to DynamoDB table
        putCommand.input.Item = body;
        docClient.send(putCommand).then(
            (data) => {
                res.send(data);
            },
            (error) => {
                console.log("put error " + error);
                res.send(error);
            }
        );
  }
  };
