'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',  
  BASE_API: '"https://easy-mock.com/mock/59f93a8df2f27b7b0aebc7e0/vue-admin"',
})
