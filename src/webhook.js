process.env.LOG_LEVEL = process.env.LOG_LEVEL || 'info';

const somnus = require('somnus').default;

const universalRestHandler = (req, res, next) => {

  // `req.params` has all we need, but unfortunately also carries with it the `*`
  // prop as a side-effect of using the wildcard listener. As this service is
  // supposed to only spit out what gets sent by the hook, it's better to drop
  // this information from the final output (but still logs it somehow)
  const path = req.params['*'];
  delete req.params['*'];

  console.log('\n', (new Date()).toLocaleString(), path);
  console.log(req.params);

  return res.send(+process.env.EXPECTED_SUCCESS_STATUS_CODE || 200);
}

somnus.start({
  routeConfig: {
    'get *': universalRestHandler,
    'post *': universalRestHandler,
    'put *': universalRestHandler,
    'del *': universalRestHandler
  }
});

module.exports = somnus;
