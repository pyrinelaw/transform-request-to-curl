## transform-request-to-curl

将请求装换为 curl 语句，transformRequestToCurl(method, url, data, headers)

### 使用示例

```javascript
const transformRequestToCurl = require('transform-request-to-curl');

transformRequestToCurl('get', 'http://www.a.com', {username: 'lucy', age: 18}, {cookie: 'token=ShbJEXXhcyhg98o32_Sccc' });

// 返回：curl 'http://www.a.com?username=lucy&age=18' -H 'cookie: token=ShbJEXXhcyhg98o32_Sccc'

transformRequestToCurl('post', 'http://www.a.com', {username: 'lucy', age: 18}, {cookie: 'token=ShbJEXXhcyhg98o32_Sccc' });

// 返回：curl -X 'POST' 'http://www.a.com' -d 'username=lucy&age=18' -H 'cookie: token=ShbJEXXhcyhg98o32_Sccc'

```

### 参数说明
ObjectWriteToFile(data, file);

参数     | 类型 | 是否必传 | 默认值 | 说明
-------- | --- | --- | --- | ---
method | String | 否 | get | 请求方法，get/post
url | String | 是 | undefined | 请求路径
data | Object or Array | 否 | undefined | 请求数据
headers | Object | 否 | undefined | 请求头