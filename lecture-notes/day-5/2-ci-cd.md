# Afternoon Session - October 6, 2017
## Outline
* CI/CD
  * Travis CI
  * Coveralls

## Lecture Notes
### Travis CI
* ถ้าโปรเจคอยู่ในโฟลเดอร์ย่อย ๆ ใน GitHub เราอาจจะเขียน Makefile เพื่อสั่งรัน Command แยกตามโฟลเดอร์ได้ (แต่ใช้ได้บน Linux+Mac เท่านั้น บน Windows ต้องดูก่อน)
* travis-ci CI Server
  * travis-ci.org เป็น Project ที่ใช้ฟรี
  * travis-ci.com เป็น Project ที่เสียตังค์
* ตอนใช้ travis-ci แล้ว พยายามอย่า push ลง master ให้ไป dev ที่ branch อื่นก่อนแล้วค่อยทำ pull-request กลับเข้ามาใน master เมื่อพัฒนาเสร็จแล้ว
* Travis CI สามารถสร้าง Badge ออกมาว่า Build สำเร็จหรือไม่สำเร็จยังไงได้ด้วย โดยสามารถส่งออกมาได้หลายชนิด เช่น Markdown หรือไฟล์รูป เป็นต้น (คล้าย ๆ ที่เห็นในหน้า GitHub หลาย ๆ โปรเจค)
* ถ้าจะให้รองรับ travis-ci เราจะต้องสร้างไฟล์ .travis.yml เพื่อบอกว่าโปรเจคเราเขียนด้วยภาษาอะไร แล้ว build ยังไง ใช้ script ไหน build
  * ถ้ามีโฟลเดอร์ย่อยก็อย่าลืมทำสคริป์ build ไปดึง dependencies มาให้ถึงโฟลเดอร์ข้างในด้วย

### Coveralls
* เอาไว้ทำ report ว่าการ test ของเรา cover ขนาดไหน โดยเอาค่าจาก nyc มา process แล้วสร้างเป็น badge เพื่อบอกสถานะของการ test ว่า coverage แค่ไหน