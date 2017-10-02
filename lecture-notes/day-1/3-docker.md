# Afternoon Session - October 2, 2017
## Outline
* Docker
    * Create simple web with Node+ExpressJS
    * Create Dockerfile
    * Push to Docker Hub
* Kubernetes
* ไฟล์ประกอบ codes/sample-web-for-docker
## Lecture Notes
### Create simple web with Node+ExpressJS
* npm init
* npm i express --save
* สร้างไฟล์ index.js

```
const express = require('express')
const app = express()

app.get('/', function(req,res) {
    res.send('Welcome to WEB that will be dock by docker!<p> <a href="/health">Health Check</a>')
})

app.get('/health', function(req,res) {
    res.send('OK')
})

console.log('Server running on localhost:8080')
app.listen(8080)
```
* รันด้วยคำสั่ง ``node index.js`` และโปรแกรมจะรันขึ้นมา สามารถเข้าถึงได้ที่ http://localhost:8080/
* เตรียมสร้าง Docker Image

### Create Dockerfile
* สร้าง Dockerfile ใน Project

```
FROM node:8.6.0

ADD package.json /package.json
ADD index.js /index.js

RUN ["npm","install"]

CMD ["node","index.js"]
```
* สร้าง Image ด้วยคำสั่ง ``docker build -t web:1.0 .`` เพื่อสร้าง Docker Image ชื่อ web:1.0 ด้วย Dockerfile ที่โฟลเดอร์ปัจจุบัน

### Push to Docker Hub
* Login ไปยัง Docker Hub ``docker login``
* สั่ง Push Image ด้วยคำสั่ง ``docker push web:1.0``
* ให้เพื่อน Pull มาใช้ได้ด้วย ``docker pull <username>/web:1.0``
---
## Kubenetes

เป็น Cloud Service ที่ใช้ควบคุม Docker อีกทีหนึ่ง

---
## เกร็ดความรู้
* หากต้องการใช้ Private Repository จากผู้ให้บริการ
    * Docker Hub จะเก็บเงินตามจำนวน Repo
    * Google Cloud Platform จะเก็บเงินตามจำนวนขนาดของ Image File ที่เอามาใส่