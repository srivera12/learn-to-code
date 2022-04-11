const doWorkPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('This is the result.');
    reject('This is an error.');
    reject('extra data');
  }, 2000);
});

doWorkPromise
  .then((result) => {
    console.log('Success: ', result);
  })
  .catch((error) => {
    console.log('Error: ', error);
  });
