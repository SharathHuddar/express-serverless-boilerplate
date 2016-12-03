var AWS = require('aws-sdk');



AWS.config.update({
  region: "ap-southeast-1"
});

var docClient = new AWS.DynamoDB.DocumentClient();

module.exports = {
  findUser: function (user) {

  },

  addUser: function (user) {
    var table = "usersExpressServerlessBoilerplate";
    var params = {
      TableName:table,
      Item:{
        "username": user.username,
        "hash": user.hash
      }
    };
    docClient.put(params);
  }
}
