import config from '../config'
import NodeRSA from 'node-rsa'
class Lib {
  constructor () {
    this.rsa_private_key = config.rsa_private_key
  }

  /**
   * 前端 ：使用RSA的私钥进行加密  rsa_private_key
   */
  encrypt (text) {
    return (new NodeRSA(this.rsa_private_key)).encryptPrivate(text, 'base64')
  }

  /**
   * 前端 ： 使用私钥解密json数据给前端
  */
  privateDecrypted (text) {
    return (new NodeRSA(this.rsa_private_key)).decrypt(text, 'utf8')
  }
}

export default new Lib()
