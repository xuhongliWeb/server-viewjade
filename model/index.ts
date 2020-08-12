/**
 * 连接mySql 并创建表
 */

 import mysql = require('mysql')

 const mysqlConfig = require('../config/mysql.config') // 引入配置 区分开发和生产环境

 const sql = mysql.createConnection(mysqlConfig) //创建

 sql.connect() 

//  require('./tables/images')(sql) // 传入sql 实列 创建表

export = sql

// 在server.js 引入