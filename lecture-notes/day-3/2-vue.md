# Morning Session - October 4, 2017
## Outline
* Vue.js

## Lecture Notes
### Vue.js ทั่วไป
* [Vue.js](https://vuejs.org) เป็น Reactive Programming
  * Imperative = การเขียนโปรแกรมแบบเดิม ค่าตัวแปรจะเปลี่ยนเมื่อมีการ Assign ค่า หากค่าตัวแปรอื่นที่ประกอบเป็นค่าตัวแปรหนึ่งขึ้นมามีการเปลี่ยนแปลง ค่าตัวแปรที่ถูกประกอบขึ้นก็จะไม่เปลี่ยนแปลง
  * Reactive = Data flow + Propagation of Change (รู้เมื่อค่ามีการเปลี่ยนแปลง)
* การทำ Reactive คือการครอบ Property ด้วยฟังก์ชัน Getter/Setter โดยเมื่อมีการเปลี่ยนแปลงค่า เราก็จะสามารถเขียนได้ว่าการเปลี่ยนแปลงของ Property นั้นให้ทำอะไรต่อได้ในฟังก์ชัน Setter
  * หากเราใช้ตัวแปรที่ไม่ได้ครอบไว้ มันก็จะไม่ Reactive (คือถ้าค่าเปลี่ยนแปลง ก็จะไม่มีอะไรเกิดขึ้น)
* ตัวช่วย สามารถลงได้ด้วยคำสั่ง ``npm install -g vue-cli``
  * สร้าง Project ใหม่ด้วยคำสั่ง เช่น ``vue init webpack timesheet-frontend``
  * การเลือกระหว่าง Runtime + Compiler กับ Runtime only; Runtime + Compiler เหมาะสำหรับ Dev แต่ของจริงควรใช้ Runtime อย่างเดียว

### Vue.js Component
* ถ้าใช้ VS Code มี Plugin ที่ชื่อว่า Vetur จะช่วยในการเขียนโค้ด Vue.js ให้เราได้
* บล็อก Template
  * ถ้าเราไม่รักการเขียน HTML เช่น อยากจะใช้ Jade (Pug) เราสามารถกำหนด attribute ในบล็อก template ได้ เช่น ``lang="jade"`` แต่ต้องไปลงตัว preprocessor พวกนั้นด้วย
  * v-if, v-show, v-else เอาไว้ซ่อน tag ตามเงื่อนไข
  * v-model เอาไว้ bind ค่าใน script.data กับ input ต่าง ๆ
  * {{ }} เป็น v-text ใช้แสดงค่าใน script.data เช่นเดียวกัน
  * v-on เอาไว้เรียก method เมื่อเกิด event
    * มี shorthand เป็น @ 
    * สามารถเอาไว้เรียก method ที่กำหนดไว้ใน script.methods ได้
    * ชื่อจะล้อตาม event ของ DOM เช่น onClick จะกลายเป็น v-on:click หรือ @click แทน
    * ถ้าอยากจะเรียก preventDefault ให้เติม .prevent ไว้ข้างหลัง เช่น @submit.prevent มันจะไม่รีเฟรชหน้า
  * [v-bind](https://vuejs.org/v2/api/#v-bind) เอาไว้ผูกค่ากับ JS
    * มี shorthand เป็น :
  * [v-for](https://vuejs.org/v2/api/#v-for) เอาไว้วนลูปแสดงค่า
* บล็อก Script
  * ใส่ Name จะใส่หรือไม่ใส่ก็ได้ แต่ว่าถ้าใส่จะช่วยในการ Debug โดยถ้าใช้กับ Inspector ของ Chrome มันจะมีชื่อพิมพ์ออกมาด้วย
  * data จะต้องใส่เป็น Pure function (อย่าทำเป็น Arrow function) โดยตัวแปรไหนที่จะใช้บนหน้าเว็บให้ประกาศที่นี่
  * methods เป็นฟังก์ชันไว้ใช้เรียกด้วย v-on
  * computed เป็นคล้าย ๆ data ที่ต้องการการคำนวณ เช่น เราต้องการอัพเดตค่าราคารวมเมื่อมีรายการ item ที่เปลี่ยนแปลง โดยจะเขียนเป็นฟังก์ชันที่ใช้ในการคำนวณค่านี้ ให้เราใช้ตัวแปรแบบนี้
    * ตัวแปรนี้จะอ่านค่าได้อย่างเดียว ไม่สามารถเขียนค่าได้ 
    * "เขียนเป็นฟังก์ชัน ใช้เป็นตัวแปร"
  * Lifecycle สามารถมีคำต่าง ๆ ตาม lifecyle ได้ เพื่อทำงานตาม lifecycle ที่เกิดขึ้น เช่น created, beforeUpdate, updated, ... เป็นต้น
* บล็อก Style
  * CSS Style ที่อยู่ใน Component จะมี attribute ``scope`` มันก็จะอยู่แค่ใน Component ไม่รั่วออกไปเป็น Global
  * ถ้าเราไม่รักการเขียน CSS เช่น อยากจะใช้ SCSS เราสามารถกำหนด attribute ในบล็อก style ได้ เช่น ``lang="scss"`` แต่ต้องไปลงตัว preprocessor พวกนั้นด้วย
* Mixin จะผสมโค้ดชุดนี้ลงไปใน component ที่ระบุไว้
* Filters ไว้ process ข้อมูลที่เราต้องการจะแสดง