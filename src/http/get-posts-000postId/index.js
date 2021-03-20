const arc = require('@architect/functions')
const data = require('@begin/data')

exports.handler = async function http (req) {
  const post = await data.get({
    table: 'posts',
    key: req.pathParameters.postId
  })
  return {
    statusCode: 201,
    headers: {
      'content-type': 'application/json; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    body: JSON.stringify({
      post
    })
  }
}