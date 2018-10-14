const config = {
    dev: {
        port: 3000,
        ipAddress: "http://127.0.0.1",
        api: {
            success: 200, //网络请求成功
            error: 404,  // 网络请求失败
            CodeError: 500 // 服务器内部错误或者异常
        },
        rsa: {
            privateKey: "../config/rsa_private_key.pem",
            publicKey:"../config/rsa_public_key.pem",
        },
        mysql: {
            host     : 'localhost',
            user     : 'root',
            password : 'root',
            database : 'shop'
        },
        redis: {
            host: "127.0.0.1",
            port: "6379",
            timeout: 60
        },
        sql: {
            shop: {
                index: "select * from shop_commodity ORDER BY id DESC limit ?,?",
                info: "select * from shop_commodity where id = ?"
            },
            order: {

            },
            user: {

            },
            cart: {

            }
        }
    }
}

module.exports = config