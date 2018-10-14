const redis = require("./index")

var par = {
    name: "lb",
    age: 18
}
redis.Set("/index",par)
