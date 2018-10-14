/**
 * mysql 数据库连接&操作的基础类
 */
const mysql = require('mysql');
const config = require("../config")
class DB {
    constructor () {
        // 创建数据库链接
        this.db = mysql.createConnection(config.dev.mysql);
        // 链接数据库
        this.db.connect();
    }

    /**
     * 执行数据库操作
     * sql<string>: 数据库语句
     * par<array>: sql语句的参数
     */
    query(sql,par = []){
        var status;
        return new Promise( (resolve,reject) => {
            this.db.query(sql,par, function (error, results, fields) {
     
                if (error) reject(error)
                results.length == 0 ? resolve({
                    status: config.dev.api.error,
                    data: "没有数据..."
                }) : resolve({
                    status: config.dev.api.success,
                    data: results
                });
            });
        })
    }
}


module.exports = new DB()