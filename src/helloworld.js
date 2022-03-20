module.exports.handler = async (event, context, callback) => {
  //   callback(null, "helloWorld!!!");
  //callback(new Error("Error happened!"), "tests!");

  // by running the following command line sls invoke local -f helloworld -p src/event.json,
  // you can pass the event which means that you can reach event.json file"s content.
  callback(null, event);
};
