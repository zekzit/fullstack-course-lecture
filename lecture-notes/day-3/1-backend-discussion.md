# Morning Session - October 4, 2017
## Outline
* Discussion on backend development session

## Lecture Notes
### Discussion on backend development session
* วิธีการเขียนแบบ Happy Path คือ จัดการอะไรก็ตามที่ไม่ Success ออกไป แล้วสุดท้ายคือ Logic ของโปรแกรมที่ Success [Happy Path](https://en.wikipedia.org/wiki/Happy_path)
* การ Handle error ใน JS ควรมีไฟล์แยกเพื่อประกาศตัวแปรหรือฟังก์ชันที่ Handle error ไปเลย เช่น

```
export const errorHandler = (req, res) {
    switch(err) {
        case invalidToken:
            res.status(401).json({ error:err })
        case ...
            ....
    }
}
```

แล้วเปลี่ยนโค้ดตรง ``catch(err)`` ให้มาเรียกฟังก์ชันนี้ เพื่อ Handle error แทน ลดการเขียนโค้ด Handle error ในจุดต่าง ๆ ของโปรแกรมซ้ำ ๆ กัน

* การใช้ Closure ในการสร้าง ID Generator ดูได้ที่ ``codes/workshop/id_generator.js``