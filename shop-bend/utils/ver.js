const utils = require("./index")
const cache = require("../cache")
const config = require("../config")
module.exports = {
    /**
     * 路由拦截器，拦截路由验证是否有token参数，redis中是否已经有数据缓存
     */
    async Verification(req, res, next) {
        if(req.headers.hasOwnProperty("token")) {
            if(await cache.Get(req.url) == null){
                req.unparams = utils.decrypted(req.headers.token)
                next()
            }else {
                res.json({
                    status: config.dev.api.success,
                    cache: true,
                    data: await cache.Get(req.url)
                })
            }
        }else {
            res.json({
                status: config.dev.api.CodeError,
                data: "缺少必填参数，请求头token"
            })
        }
    }
}