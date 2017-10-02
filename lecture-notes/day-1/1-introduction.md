# Morning Session - October 2, 2017
## Outline
* **ES.Next** - Syntax
* **Git** - Fundamentals
* **Docker** - Installation & Fundamentals

## Lecture Notes
### Git

Merge บน Github จะไม่ค่อยใช้ แต่จะใช้ Pull Request แทน เพื่อการ Review code ก่อนการ Commit ได้

Rebase??

Stash เป็นการเก็บโค้ดที่ทำการแก้ไขตอนนี้เอาไว้ เพื่อนำมา Apply ใส่ Branch อื่นได้

Push คือการส่งโค้ดชุดที่อยู่ใน Local ขึ้นไปยัง Remote เช่นคำสั่ง ``git push -u origin master`` จะเป็นการ Push โค้ด Branch ชื่อ __master__ ขึ้นไปยัง Remote ที่ชื่อว่า __origin__ 

### Git Workflow

การแก้ไขโปรแกรมบางอย่าง เช่น หากเราต้องการสร้างฟีเจอร์ Login จากตัวโปรแกรมหลัก (master branch) เราสามารถใช้วิธีการแตก branch ด้วยคำสั่ง ``git checkout -b login`` เราก็จะได้ branch ใหม่ซึ่งทำไปเฉพาะเรื่องที่ระบุในชื่อ branch จากนั้นเมื่อเราแก้ไขส่วนนี้เสร็จแล้ว ให้เรา merge code ให้เข้ากับ master branch ได้

แต่ถ้าหากมีเครื่องมืออย่าง GitHub ซึ่งใช้ใน Open Source โปรเจคต่าง ๆ เราไม่สามารถที่จะ Merge code เองได้ เราจะต้องเปิด Pull Request เพื่อให้ Reviewer ใน Project มารีวิวโค้ดให้ก่อน เมื่อผ่านแล้วจึงจะสามารถนำโค้ดเข้าไปใน master branch ได้

### Docker

Docker เป็น Headless VM ที่สามารถดึง Image ของโปรแกรมต่าง ๆ มาใช้งานใน Environment ที่แยกออกจาก Host หลักได้ เหมาะสำหรับการ Build, Ship และ Deploy หรือใช้ในการ Dev ก็ได้

โปรแกรมที่รันบน Docker ไม่จำเป็นต้องติดตั้ง OS ก็ได้ ถ้าหากว่าไม่ได้ต้องการ Library อะไรที่อยู่บน OS ก็สามารถที่จะใช้ Library ที่ติดมากับ Docker ได้เลย

การดาวน์โหลด สามารถดาวน์โหลดตาม Platform ได้จาก [Docker Store - Windows Edition](https://store.docker.com/editions/community/docker-ce-desktop-windows) หลังจากลงแล้ว ตรวจสอบการติดตั้งได้จากคำสั่ง ``docker version`` จะออกมาประมาณนี้

```
Client:
 Version:      1.12.3
 API version:  1.24
 Go version:   go1.6.3
 Git commit:   6b644ec
 Built:        Wed Oct 26 23:26:11 2016
 OS/Arch:      windows/amd64
```

คำสั่งหลักจะมี ``build``, ``ship`` และ ``run`` โดยคำสั่ง Build ``docker build -t myapp:1.0`` จะหา ``Dockerfile`` และสร้าง Image ตามที่ระบุไว้ในไฟล์ดังกล่าว

ถ้าหากจะเรียก Image ที่มีอยู่แล้ว จาก Repository ต่าง ๆ ให้ใช้คำสั่ง ``docker pull`` เช่น ``docker pull gcr.io/google-containers/echoserver:1.6`` แต่ถ้าหากไม่ใส่ URL ข้างหน้า มันก็จะพยายามดึงจาก Central Repository ก่อน

การจะรัน ให้ใช้คำสั่ง ``docker run`` เช่น ``docker run myapp:1.0`` โดยการรันจะแสดง log ออกมาให้ดู แต่หากว่าอยากรันแบบ Daemon ให้รันโดยเพิ่ม -d เข้าไปด้วย