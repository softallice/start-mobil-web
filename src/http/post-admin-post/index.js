// const arc = require('@architect/functions')
const data = require('@begin/data')

const posts = [
  {
    table: 'posts',
    key: 'this-is-a-test-testing',
    title: 'This is a test! TESTING',
    description: 'This is a test description',
    body: '### This is Markdown'
  },
  {
    table: 'posts',
    key: 'welcome-to-the-jungle',
    title: 'Welcome to the Jungle!!!!',
    description: 'This is a test description',
    body: '### This is Markdown'
  },
  {
    table: 'posts',
    key: 'blah-blah-blah',
    title: 'Blah Blah Blah',
    description: 'This is a test description',
    body: '### This is Markdown'
  }
]
exports.handler = async function post (req) {
  const post = await data.set(posts)

  return {
    statusCode: 200,
    body: JSON.stringify(post)
  }
}
