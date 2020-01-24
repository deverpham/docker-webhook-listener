module.exports = {
  client: {
    includes: ['./**/*.ts'],
    service: {
      name: 'hasura',
      url: 'http://localhost:8080/v1/graphql',
      // optional headers
      headers: {
        'x-hasura-admin-secret': 'Thinh123123@'
      }
    }
  }
}
