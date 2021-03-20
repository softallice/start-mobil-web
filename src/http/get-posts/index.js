const data = require('@begin/data')

exports.handler = async function posts (req) {
  const posts = await data.get({
    table: 'posts'
  })
  return {
    statusCode: 201,
    headers: {
      'content-type': 'application/json; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    body: JSON.stringify({
      posts
    })
  }
}
