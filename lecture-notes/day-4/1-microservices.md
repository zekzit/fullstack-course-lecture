# Morning Session - October 5, 2017
## Outline
* Microservices

## Design
* Auth
  * /token มี data ไว้ขอข้อมูลได้ดังนี้
```
// Request message  ขอ refreshToken
{
    "grantType": "password",
    "email": "....",
    "password": "....",
    "scope": "...."
}

// Request message  ขอ accessToken
{
    "grantType": "refreshToken",
    "refreshToken": "...."
}

// Response message
{
    "refreshToken": "....",
    "accessToken": "....",
    "expiresIn": 3600,
    "userId": "....",
    "tokenType": "bearer"
}
```

ตัว scope บอกว่าเข้าที่ไหนได้บ้าง เช่น ``user/edit``, ``user/view`` แต่ตัวอย่างนี้จะทำง่าย ๆ คือเช่น scope เป็น ``user`` หรือ ``admin``

refreshToken เอาไว้ใช้ขอ accessToken ซึ่ง refreshToken จะเอาไว้ใช้ขอ accessToken และ accessToken จะเอาไว้ใช้ดึงข้อมูล โดย accessToken จะมีระยะเวลาการมีอายุที่สั้นกว่า refreshToken

  * /revoke ใช้ในการถอน refreshToken

```
{
    refreshToken: "...."
}
```

* User
  * /users
    * เป็น path ที่เฉพาะ admin เข้ามาได้ (เช็คจาก token)
  * /users/:id
    * เป็น path ที่เฉพาะ user ที่ id ตรงกันเข้ามาได้

### เกร็ดความรู้
* Token ต่าง ๆ เมื่อส่งไปแล้ว ห้ามเอาไปแสดงที่ไหน ถ้าให้ดีก็ส่งแค่ครั้งเดียวก็พอ
* ถ้า Service ไม่อยากคุยกับ AuthService ให้ใช้ jwt มาคิดแทนเลย
* HMAC กับ RSA ต่างกัน Sign กับ Verify อันแรกจะใช้คีย์เดียวกัน อันหลังจะใช้คีย์สองชุดเป็น Private/Public Key
* [auth0/node-jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)
  * ตอน sign jwt
    * ฟิลด์ issuer บอกว่าใครเป็นคนส่ง
    * ฟิลด์ notBefore บอกว่า token นี้ห้ามใช้ก่อนเวลาไหน ปกติจะใส่เวลาปัจจุบัน เพื่อป้องกันเวลาเพี้ยน หรือใช้ผิด
    * ฟิลด์ audience บอกว่า token นี้ใช้กับใครเท่านั้น