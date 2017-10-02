# Afternoon Session - October 2, 2017
## Outline
* Authentication
    * Cookie-based
    * Token-based
    * Signature-based
---
## Authentication
### Cookie-based Authentication
* Browser เมื่อมีการ Implement ด้วยตัวเอง ให้ระวังประเด็นความปลอดภัย โดยใส่ Tag เหล่านี้เพื่อป้องกัน Key-Value ที่ใส่ใน Cookie ด้วย
    * Secure - จะส่งข้อมูลตัวนี้เมื่อเรียกผ่าน HTTP เท่านั้น
    * HTTP Only - ไม่อนุญาตให้ Javascript อ่านข้อมูลในฟิลด์นี้ได้
    * samesite - ถ้าคนละไซต์ จะไม่ส่งข้อมูลของ Cookie นี้ให้ (เฉพาะใน Chrome)
* เมื่อไหร่ที่มีการยกสิทธิ์ผู้ใช้ ให้เปลี่ยน Session ID ด้วย เพื่อความปลอดภัย ป้องกันการเอา Session ID ไปใช้ในเครื่องอื่นที่ไม่ได้ทำการยกสิทธิ์ด้วย (เรื่อง Session Fixation)
* ต้องระวังเรื่อง CORS โดยจะต้องดู Origin/Referer ด้วย ว่าเป็นการกด Request มาจาก Site เดียวกันหรือไม่
* การต่ออายุ Cookie ต้องเปลี่ยน ID ด้วย เพื่อความปลอดภัย
* การเก็บ Session ID ด้วย DB ที่เร็ว เช่น Redis, In-memory DB เราควรทำการ Hash Session ID เพื่อป้องกันการนำ Session ID ไป Login ได้ หากว่าถูก Hack ได้

### Token-based Authentication
* มีลักษณะคล้าย Cookie-Session คือมี Key และเก็บไว้ใน DB คือสะดวกตรงที่ไม่ติดกับ Client แบบเดียวกับ Cookie (ซึ่งใช้ดีกับพวก Microservices) แต่จะปลอดภัยน้อยกว่าแบบ Cookie คือถ้าโดนดัก Key ไปได้ ก็จะถูกเอาไปใช้ได้เลย

### Signature-based Authentication
* ส่วนใหญ่จะใช้ในการคุยกันของ Server ซึ่งจะเป็นการยืนยันตัวตนว่า Server นี้เป็น Server จริงรึเปล่า
* จะต้องมี Asymmetric Key (Public/Private Key) และคุยกันผ่าน Protocol เช่น JWT เพื่อเป็นกระบวนการยืนยันว่าส่งข้อมูลมาจาก Server จริง ๆ
* (รายละเอียดเยอะมาก สมควรหา Resource มาอ่านเพิ่มเติมสำหรับ Flow การ Authen ด้วย Signature based) (จดไม่ถูก)

---

## Microservices (TIPS + สะเก็ดความรู้)
* Client จะไม่มาเลือกคุยกับ Service เอง แต่จะมี API Gateway ซึ่งคอยควบคุมว่ามีสิทธิ์ที่จะเข้าถึง Service ไหม ซึ่งจะมีหน้าที่ประกอบ Data จาก Service ต่าง ๆ และคืนไปให้ Client ด้วย
* Kubernetes จะมี Load Balancer ให้ในตัว
* ปัญหาของ Microservice ที่รันในเครื่องเดียวกัน คือ การเปิด Connection ที่เกิน Limit เพราะแต่ละ Service ต้องคุยผ่าน HTTP
* gRPC เป็น Protocol ที่เหมาะสำหรับการคุยกันระหว่าง Microservice ซึ่ง based อยู่บน HTTP/2   
    * gRPC จะเปิด Connection แค่ 1 อัน แต่มีหลายท่อข้างใน แทนการเปิด HTTP ธรรมดาที่มี 1 ท่อต่อ 1 Connection
* ถ้าระบบไม่ซับซ้อนมาก ยังแนะนำ Monolith อยู่ เพราะ Microservices ดูแลยากเรื่องการคุยกันระหว่าง Service, เรื่องของ Transaction เป็นต้น
* การทำ Backend ควรจะทำ Stateless เพราะจะ Scale ง่าย