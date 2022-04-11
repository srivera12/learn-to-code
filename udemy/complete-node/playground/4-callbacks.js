const doWorkCallback = (callback) => {
  setTimeout(() => {
    callback('This is an error.');
    callback(undefined, 'This is the result.');
  }, 2000);
};

doWorkCallback((error, result) => {
  error ? console.log(error) : console.log(result);
});
