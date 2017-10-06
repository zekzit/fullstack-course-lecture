# Afternoon Session - October 6, 2017
## Outline
* CI/CD
  * Continuous Integration
    * Travis CI
    * Coveralls
  * Continuous Delivery
    * Google Cloud Platform

## Lecture Notes
### Travis CI (CI Part)
* ถ้าโปรเจคอยู่ในโฟลเดอร์ย่อย ๆ ใน GitHub เราอาจจะเขียน Makefile เพื่อสั่งรัน Command แยกตามโฟลเดอร์ได้ (แต่ใช้ได้บน Linux+Mac เท่านั้น บน Windows ต้องดูก่อน)
* travis-ci CI Server
  * travis-ci.org เป็น Project ที่ใช้ฟรี
  * travis-ci.com เป็น Project ที่เสียตังค์
* ตอนใช้ travis-ci แล้ว พยายามอย่า push ลง master ให้ไป dev ที่ branch อื่นก่อนแล้วค่อยทำ pull-request กลับเข้ามาใน master เมื่อพัฒนาเสร็จแล้ว
* Travis CI สามารถสร้าง Badge ออกมาว่า Build สำเร็จหรือไม่สำเร็จยังไงได้ด้วย โดยสามารถส่งออกมาได้หลายชนิด เช่น Markdown หรือไฟล์รูป เป็นต้น (คล้าย ๆ ที่เห็นในหน้า GitHub หลาย ๆ โปรเจค)
* ถ้าจะให้รองรับ travis-ci เราจะต้องสร้างไฟล์ .travis.yml เพื่อบอกว่าโปรเจคเราเขียนด้วยภาษาอะไร แล้ว build ยังไง ใช้ script ไหน build
  * ถ้ามีโฟลเดอร์ย่อยก็อย่าลืมทำสคริป์ build ไปดึง dependencies มาให้ถึงโฟลเดอร์ข้างในด้วย

### Coveralls (CI Part)
* เอาไว้ทำ report ว่าการ test ของเรา cover ขนาดไหน โดยเอาค่าจาก nyc มา process แล้วสร้างเป็น badge เพื่อบอกสถานะของการ test ว่า coverage แค่ไหน

### Build Image + Deploy with GCP (CD Part)
* Docker เวลา Build ต้องใส่เลข version ด้วย
* Google Cloud Platform
  * เมื่อทุกครั้งที่เราอัพเข้า git เราสามารถสั่ง GCP ได้ว่าให้ build โปรเจคของเรา โดยเราสามารถใช้ Dockerfile หรือ ไฟล์ cloudbuild.yaml เพื่อสร้าง docker image ได้
  * เราสามารถเอา Image นั้นมารันบน GCP เพื่อเป็นการ Deploy ได้เลย หลังจากที่เรา Build แล้ว Test เสร็จ


### เกร็ดความรู้
* การ Deploy โปรแกรม เราอาจจะมี Branch หลาย ๆ Branch เพื่อจุดประสงค์ต่าง ๆ เช่น
  * master branch จะเป็น branch หลักที่ใช้ในการพัฒนาโปรแกรม และโค้ดใน branch นี้จะไหลไปเรื่อย ๆ ตามการพัฒนาโปรแกรม โค้ดตรงนี้ที่จะปล่อยสู่ production จะถูกส่งไปที่ testing branch ก่อน
  * testing branch เป็น branch ที่ถูก checkout ออกมาเพื่อทำการทดสอบโปรแกรม และรันเทสต์โดยเฉพาะ เมื่อ test ผ่านแล้วจึงจะถูกส่งไปที่ staging branch
  * staging branch เป็น branch ของโปรแกรมที่ถูกทดสอบเรียบร้อยแล้ว และนำมาทดลองใช้งานโดยผู้ใช้งานบางส่วน และเมื่อผ่านแล้วจะถูกรันออกมาเป็น production branch
  * production branch เป็น branch ที่ถูกใช้งานจริงหลังผ่านการทดสอบทั้งหมดแล้ว
  * โดยในบางที่อาจจะมี branch มากกว่าหรือน้อยกว่านี้ ตามวัตถุประสงค์การใช้งาน
* เมื่อเราใช้ CI เราสามารถติดตามสถานะของโปรเจคได้ว่าขณะนี้ Project สามารถ Test และ Build ผ่านหรือไม่ ถ้า Test ผ่านแล้ว โปรเจคมีการเทสต์ที่ Code Coverage กี่ %
  * การแสดงจะแสดงเป็น Badge ได้ที่หน้าโปรเจค โดย CI จะสร้างภาพออกมาเองว่า build ผ่านไหม หรือมี code coverage กี่ % (เช่นเดียวกับในหน้า README.md ของ Project นี้)
* Cyclomatic complexity เอาไว้ตรวจดูความซับซ้อน ถ้ายิ่ง Complex มาก ยิ่งดูแลรักษายาก (Test ยาก) ควรจะเขียนให้ง่ายขึ้น หรือไม่ก็แยกฟังก์ชันให้ซับซ้อนน้อยลง
  * ติดตั้ง ``npm install complexity-report -g``
  * รัน ``cr <ชื่อไฟล์>``