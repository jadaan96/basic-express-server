'use strict';

module.exports = (error, req, res, next) => {
  res.status(500).json({
    code: 500,
    query: req.query,
    mesasge: `SERVER ERROR: ${error.message}`
  })
}