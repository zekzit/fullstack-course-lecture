# Afternoon Session - October 6, 2017
## Outline

## Lecture Notes
### เกร็ดเล็กเกร็ดน้อย
* knex ไว้ทำ Database Migration บน Node.js
  * ``knex init`` เริ่มต้นทำ db migration บน project และสร้าง knexfile.js เพื่อเป็น config ซึ่งจะทำให้เราแบ่งเป็น dev, production หรือ test environment ได้ และทำให้ต่อคนละ db ไปเลย
* nyc ไว้วิเคราะห์ว่าตัว test นี้วิ่งผ่านโปรแกรมเรากี่บรรทัด
  * คำสั่งเช่น ``nyc mocha`` แล้วมันจะมีตารางสรุปให้ว่าวิ่งผ่านโปรแกรมเรากี่บรรทัด ถ้าหากว่า coverage code ประมาณ 90% ก็จะถือว่าครบถ้วน 