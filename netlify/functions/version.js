const { version } = require('../../package.json')

exports.handler = async () => {
  return {
    statusCode: 200,
    body: version,
  }
}