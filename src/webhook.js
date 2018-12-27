const somnus =require('somnus').default;

somnus.start({
  routeConfig: {
    'get /': (req, res, next) => {
      somnus.logger.info({ requestParams: req.params });
      return res.send(+process.env.EXPECTED_SUCCESS_STATUS_CODE || 200);
    }
  }
});
