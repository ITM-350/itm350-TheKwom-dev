const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient, DeleteCommand, GetCommand,  PutCommand, ScanCommand } = require("@aws-sdk/lib-dynamodb");

// Instantiate a DynamoDB document client with the SDK
const client = new DynamoDBClient({region: 'us-west-2'});
const docClient = DynamoDBDocumentClient.from(client);
const scanCommand = new ScanCommand({
    TableName: "event",
  });

const getCommand = new GetCommand({TableName: 'event', Key: {id: null}});

const input = {
    "Key": {id: 1},
    "TableName": "event"
  };
  const deleteCommand = new DeleteCommand(input);

  const putCommand = new PutCommand({
    TableName: "event",
    Item: {
        title: 'Docker Workshop',
        detail: 'Linuxing in London ',
        date: '2017-11-21'
      },
  });

 module.exports = { docClient, getCommand, deleteCommand, putCommand, scanCommand };
