# Afternoon Session - October 6, 2017
## Outline
* Test with Mocha, Chai and more..
  * Unit Test
  * Integration Test

## Lecture Notes
### เกร็ดเล็กเกร็ดน้อย
* การทำ Unit Test และตัวอย่าง สามารถดูได้จากในสไลด์ agile-tdd.pptx ในโฟลเดอร์นี้
* การทำ Integration Test และการออกแบบ สามารถดูได้จากในสไลด์ agile-tdd.pptx ในโฟลเดอร์นี้
* Database Migration Tool จะเป็นตัวที่มีบทบาทในการทำ Test เป็นอย่างมาก เนื่องจากเราสามารถที่จะสร้างฐานข้อมูล (Migration) หรือใส่ข้อมูลเริ่มต้น (Seed) หรือย้อนกลับฐานข้อมูล (Rollback) ให้เป็นตอนเริ่มต้นได้ ในกรณีที่จะรันเทสต์ในแต่ละเคส
  * ในแต่ละ Platform ก็จะมี Database Migration Tool ของตัวเองอยู่
  * knex ไว้ทำ Database Migration บน Node.js
    * ``knex init`` เริ่มต้นทำ db migration บน project และสร้าง knexfile.js เพื่อเป็น config ซึ่งจะทำให้เราแบ่งเป็น dev, production หรือ test environment ได้ และทำให้ต่อคนละ db ไปเลย
* หลักการ TDD คือการทำ Test ก่อนที่จะเริ่มเขียนโค้ด โดยเมื่อเขียน Test เสร็จแล้ว เมื่อทำการรัน Test ตัว Test นั้นจะ Fail และเราต้องเขียนโปรแกรมเพื่อให้ Test cases ดังกล่าวที่ออกแบบขึ้น ไม่ Fail
* nyc ไว้วิเคราะห์ว่าตัว test นี้วิ่งผ่านโปรแกรมเรากี่บรรทัด
  * คำสั่งเช่น ``nyc mocha`` แล้วมันจะมีตารางสรุปให้ว่าวิ่งผ่านโปรแกรมเรากี่บรรทัด ถ้าหากว่า coverage code ประมาณ 90% ก็จะถือว่าครบถ้วน 