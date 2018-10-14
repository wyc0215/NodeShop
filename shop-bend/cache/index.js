const redis = require("redis");
const config = require("../config");

class Redis {
    constructor(){
        this.client = redis.createClient(config.dev.redis.port,config.dev.redis.host);
        this.client.on("error", function (err) {
            console.log("redis 连接失败：" + err);
        });
    }
    /**
     * 设置缓存值
     * @param {*string} key 名称
     * @param {*string} value 数值
     */
    Set(key, value) {
        this.client.set(key, JSON.stringify(value), redis.print)
    }

    /**
     * 获取缓存数值
     * @param {*string} key 名称
     */
    Get(key) {
       return new Promise((resolve,reject) =>{
            this.client.expire(key, config.dev.redis.timeout);
            this.client.get(key, function(error,result){
                if(error) reject(error)
                resolve(JSON.parse(result))
            })
       })
    }
}

module.exports = new Redis()