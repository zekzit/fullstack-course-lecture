# Morning Session - October 5, 2017
## Outline
* Reverse Proxy + Load Balance with nginx
[Document](http://tinyurl.com/nodeoak) 

## Lecture notes 
### nginx
* เกิดมาจากโปรแกรมเมอร์ชาวรัสเซีย ทำงานกับ apache แล้วมีปัญหาเรื่องรับ concurrent 10k (C10K) ไม่ได้ เลยต้องสร้างโปรแกรมใหม่

### เกร็ดเล็กเกร็ดน้อย
* Content Delivery Network (CDN) เป็นโครงข่ายที่ใช้ในการส่ง Static Content ไปที่เครื่องลูกข่าย โดย CDN มักมี Internal Network ที่กระจาย Content ออกไปทั่วโลก และเมื่อมีการร้องขอจากเครื่องลูกข่าย ตัว Content จะถูกส่งไปจากเครื่อง Server ที่ใกล้กับ Client มากที่สุด (มักจะมีค่า Ping ไม่มากกว่า 50ms)
* การทำ Cache ในระดับต่าง ๆ

```
แผนผังการเชื่อมต่อระหว่าง Client จนถึง Database

Database <-> Application Server <-> Reverse Proxy (nginx) <-> ISP <-> Browser
```

  * [Database <-> Application Server] In-Memory Database เช่น memcache หรือ redis สามารถนำมาใช้เป็น cache ระหว่าง Web Application ของเราและ Database ได้ โดยจะใช้ in-memory database นี้ในการเก็บข้อมูลที่ถูกใช้บ่อย ๆ และจะต้องผ่านการ join อย่างหนักหน่วงจาก db จริง
  * [Application Server <-> Reverse Proxy, ISP, Browser] สามารถเพิ่ม Header เพื่อบอกได้ว่าเป็น Public หรือ Private ได้ (จำชื่อ Field ไม่ได้) โดยเหล่า Proxy หรือ Browser จะทำการ Cache ข้อมูลนี้ไว้เสมอ
  * [Reverse Proxy] ถ้าเราควบคุมได้ 
    * เราควรเปิด Option ให้ Reverse Proxy ของเราทำตัวเป็น Proxy เก็บ Static Content ด้วย
    * ควรเปิด module gzip เพื่อลดขนาดข้อมูลที่จะถูกส่งออกไปผ่านทาง network
    * ในบางกรณี เราสามารถเปิด sticky session เพื่อให้ session ถูกเก็บอยู่ที่ตัว reverse proxy ได้