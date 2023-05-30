# Chowchow Online Rental

## Preparation

We strict to use yarn for this project. So if you haven't installed yarn, you can follow this [link](https://www.hostinger.com/tutorials/how-to-install-yarn). If you do not sure that having yarn yet or not, you can check by the code below.

```bash
yarn --version
```

### Clone repository

```bash
git clone https://github.com/Querians/chowchow-rental
```

### Installation

Install all packages.

```bash
yarn install
```

## Usage

### Develop All Front-end Page

```bash
yarn dev
```

### Develop Only Customer Page (Store)

You can access customer page is in path '**[apps/frontend](apps/frontend)**'.

```bash
yarn dev:frontend
```

### Develop Only Staff Page (Admin)

You can access staff page is in path '**[apps/admin](apps/admin)**'.

```bash
yarn dev:admin
```

## Create UI Components

1. Create file {component_name}.jsx in [packages/shared/ui/components](packages/shared/ui/components)
2. Export Component in [packages/shared/ui/index.js](packages/shared/ui/index.js)
3. Import to use in pages

## Front-End UI Packages & Framework

- [Next.js](https://nextjs.org/docs/getting-started)
- [Tailwind CSS](https://tailwindcss.com/docs/installation)
- [Flowbite](https://flowbite.com/docs/forms/input-field/)
- [Flowbite-React](https://flowbite-react.com/)
- [React Icons](https://react-icons.github.io/react-icons)
- [Jōtai](https://jotai.org)
  - [tutorial](https://egghead.io/courses/manage-application-state-with-jotai-atoms-2c3a29f0)

## Format Code

Please always format before commit code.

```bash
yarn lint
yarn format
```

## Recommend Extension for VScode

- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Prisma](https://marketplace.visualstudio.com/items?itemName=Prisma.prisma)
- [colorize](https://marketplace.visualstudio.com/items?itemName=kamikillerto.vscode-colorize)
- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
- [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)


## การทดลองใช้งานเบื้องต้น
เนื่องจากเว็บไซต์นี้ มีการกำหนดสิทธิการเข้าถึงหน้าเว็บด้วย user role ที่แตกต่างกันไป ดังนั้น เพื่อความสะดวกในการทดลองระบบทั้งหมด <br>ทีมผู้พัฒนาได้เพิ่ม user role ที่มีชื่อว่า developer (DEV) เพื่อให้สามารถเข้าถึง form และ page ต่าง ๆ ได้ทั้งหมด
<br>
ซึ่ง staff(DEV) สามารถ login ผ่านหน้า staff login ได้ด้วย
- Staff ID : 133e0aea-bf4f-4daf-9ca4-2fef0aa32471
- Password : 123<br>
และ สำหรับ role customer
- Email : a@a.a
- Password : *ABCdef123

## Complex Form
เป็นฟอร์มกรอกข้อมูลที่ทำให้เกิดการเปลี่ยนแปลงข้อมูลตั้งแต่ 2 ตารางเป็นต้นไป

### 1. Order Management: All Order Receiving
เป็นตารางที่จะทำการแสดงสถานะ order เพื่อให้พนักงานสามารถตรวจสอบข้อมูลของ order ได้ และนำไปสู่การเปลี่ยนแปลงข้อมูลที่เกี่ยวข้องกับการจัดการสินค้าโดยพนักงานผ่าน inventory(INV)
1. Update status เป็นการเปลี่ยนแปลงสถานะ order โดยตรง
2. Detail เป็นหน้าที่จะมีการแสดงจำนวนของ item ที่ต้องการเตรียมโดยสรุป และเมื่อกด update จะนำไปสู่ Form ที่พนักงานต้องกรอกเพื่อ Check-Out (ส่งออกสินค้าจากโกดังไปสู่ลูกค้า) ในฟอร์มที่ชื่อว่า **itemCheck-out** ซึ่งจะเป็นการไปเพิ่มข้อมูลแถวใหม่ใน Entity **Suborder** เปลี่ยนแปลงสถานะของ item ใน Entity **Item** และหากเป็นการ Check-In ให้กด update ในคอลัมน์ที่ชื่อว่า **CHECK IN** ที่จะนำไปสู่อีกหน้าเพื่อให้เลือกสถานะของ item (item status)เพื่อทำการเปลี่ยนแปลงสถานะของ item

### 2. Transport Update: CheckOut-CheckIn
ในฟอร์มนี้เมื่อมีการกรอก order ID และกดปุ่ม check-out จะมีการไป update ใน entity **OrderTransport** ในส่วนของ timego และเปลี่ยนแปลงสถานะของ order ที่ entity **Order**ให้เป็น "send in progress" และในส่วนของ check-in จะเป็นการ update ข้อมูลใน entity **OrderTransport** ในส่วนของ timeback

### 3. Logistic Management
มีการเปลี่ยนสถานะของ Order ID, Vehicle ID และมีการเพิ่มข้อมูลลงใน Transport Detail (Delivery)
 ได้แก่ Add transport เป็นฟอร์มสำหรับการ assign พนักงานและรถให้แต่ละ order ทำให้เกิดข้อมูลบรรทัดใหม่ใน entity **OrderTransport** และเกิดการเปลี่ยนแปลงสถานะของรถที่ entity **VehicleInfo**


### 4. Cart Page
หลังจากลูกค้าได้ทำการกรอกรายละเอียดการจัดส่งครบถ้วนแล้ว สามารถที่จะกรอกรหัสโปรโมชันได้และเมื่อ submit ในส่วนโปรโมชันจะทำการแสดงราคาสุทธิ และเมื่อกดปุ่มยืนยันการสั่งซื้อแล้วระบบจะทำการเพิ่มข้อมูลใหม่ใน entity **order และ invoice**

### 5. Billing Page
เมื่อมีการกรอกรายละเอียดการยืนยันข้อมูลการจ่ายเงินจากลูกค้า จะทำให้เกิดการเพิ่มข้อมูลบรรทัดใหม่ใน **billing** และจะเปลี่ยนสถานะเพื่อรอการยืนยันจ่ายเงินใน entity **order** เป็น"waiting for payment checking"

## Simple form
เป็นฟอร์มกรอกข้อมูลที่ทำให้เกิดการเปลี่ยนแปลงข้อมูล 1 ตาราง

### 1. Product Form Page
เป็นฟอร์มสำหรับการเพิ่มชนิดสินค้าลงในฐานข้อมูล ประกอบไปด้วย การกรอกชื่อชนิดสินค้าและข้อมูลทั่วไป จำพวก ข้อมูลขนาด และคำอธิบายลักษณะชนิดสินค้า เมื่อกดยืนยันการเพิ่มข้อมูลดังกล่าว ส่วนของ Product ID จะถูกสร้างขึ้นอัตโนมัติเฉพาะเจาะจงกับชนิดสินค้านั้นๆ

### 2. Category Form Page
เป็นฟอร์มสำหรับการเพิ่มประเภทของสินค้าลงไป ประกอบไปด้วย การกรอกชื่อของประเภท (Category Name) เมื่อกดยืนยันการเพิ่ม
Category ID จะถูกสร้างขึ้นอัตโนมัติ

### 3. Item Form Page
เป็นฟอร์มสำหรับการเพิ่มสินค้าโดยต้องทำการเลือกชนิดของสินค้าที่ต้องการเพิ่มและสถานที่จัดเก็บของสินค้านั่นๆ และในส่วนของ item ID จะถูกสร้างขึ้นอัตโนมัติ

### 4. PromotionCode Form Page
เป็นฟอร์มสำหรับการกรอกข้อมูลบนตารางโปรโมชั่นที่ใช้ลดราคาสินค้าได้ประกอบไปด้วย การกรอกข้อมูลอัตราส่วนลด ราคาขั้นต่ำ (Minimum Price) ที่ใช้ส่วนลดได้ส่วนลดสูงสุด(Maximum Discount)
และ ข้อมูลวันที่ที่โปรโมชั่นสามารถใช้งานได้(Start Date - End Date)

### 5. Invoice Form Page
เป็นฟอร์มสำหรับกรอกข้อมูลในการสร้างใบแจ้งชำระเพิ่มเติมเช่น เงินมัดจำ กรณีเกิดสินค้าชำรุด หรือส่งคืนเกินกำหนดเวลา เป็นต้น

### 6. PaymentMethod Form Page
เป็นฟอร์มสำหรับการเพิ่มประเภทการชำระเงิน ประกอบไปด้วย การกรอกรหัสของประเภทการชำระเงิน (Payment Method ID) และชื่อของประเภทการชำระเงิน (Payment Method Name)

### 7. PaymentType Form Page
เป็นฟอร์มสำหรับการเพิ่มรูปแบบการแบ่งชำระเงินช่วงต่าง ๆ ประกอบไปด้วย การกรอกรหัวของรูปแบบการแบ่งชำระเงิน (Payment Type ID), การกรอกชื่อของรูปแบบการแบ่งชำระเงิน (Payment Type Name), ดอกเบี้ยที่ต้องชำระเพิ่มในรูปแบบการชำระเงินต่าง ๆ (Interest) และจำนวนครั้งของรูปแบบการชำระเงิน (times)

### 8. VehicleType Form Page
เป็นฟอร์มสำหรับการเพิ่มรูปแบบของยานพาหนะประกอบไปด้วย การกรอกรหัสของยานพาหนะ (Vehicle Type ID) และชื่อของยานพาหนะ (Name)

### 9. CategoryProblem Form Page
เป็นฟอร์มสำหรับการเพิ่มรูปแบบของปัญหาที่ลูกค้าร้องเรียน ประกอบไปด้วย การกรอกรหัสของปัญหา (Category Problem ID), การกรอกชื่อของปัญหา (Category Name) และ ตำแหน่งที่รับผิดชอบปัญหา (Position Name)

## Analysis Reports
เป็นตารางการวิเคราะห์ข้อมูลที่มีเพื่อหาความสัมพันธ์กัน

### 1. Inventory analysis: Current Stock Summary
เป็นตารางที่ใช้วิเคราะห์ปริมาณของสินค้าในสถานะต่าง ๆ โดยจะ **แบ่งตาม Product Name** และอ้างอิงข้อมูลจาก Item Status ID จากข้อมูล Item Management สามารถแบ่งสถานะเป็น Available, Not Available และ Out of Order

### 2. Order Analysis: Order Descriptive
เป็นตารางที่ใช้วิเคราะห์พฤติกรรมการสั่งเช่าสินค้าของลูกค้า โดยจะ **แบ่งตาม Order ID** และอ้างอิงข้อมูลจาก Cart Page ของฝั่งลูกค้า แล้วนำไปคำนวณหาจำนวนตะกร้า (Total Cart), ช่วงระยะเวลาการเช่าที่ได้จากผลต่างของวันรับ-คืนสินค้า(Period from Send to Return(days)) และจำนวนใบแจ้งหนี้ (Invoice Count)

### 3. Promotion: Promotion overall
เป็นตารางที่ใช้วิเคราะห์ปริมาณของโค้ดลดราคาที่ถูกใช้ไปโดย **แบ่งตาม Promotion Code** และอ้างอิงข้อมูลจาก Cart Page มาใช้คำนวณวันที่โค้ดถูกใช้ไป และแบ่งเป็นไตรมาสในแต่ละปี

### 4. Finance: Finance analysis
เป็นตารางที่ใช้วิเคราะห์จำนวนเงินที่ลูกค้าใช้ไปในแต่ละ ช่องทางการชำระเงิน โดย **แบ่งตาม Customer ID** และอ้างอิงจากข้อมูลใน Cart Page ที่มีหน้าที่ทำการเลือก ช่องทางการชำระเงิน แล้วแยกประเภทออกมาวิเคราะห์

### 5. Logistic: Logistic analysis
ตารางการวิเคราะห์การขนส่ง เช่น
5.1. ตารางที่ใช้วิเคราะห์และนับจำนวนการใช้งานของยานพาหนะแต่ละชนิด โดย **แบ่งตาม Vehicle Name** อ้างอิงข้อมูลจาก Vehicle Type และ Transport Update เพื่อนำข้อมูลวันเวลาและชนิดของยานพาหนะไปใช้ในการนับและแบ่งเป็นไตรมาสในแต่ละปี
5.2. ตารางที่ใช้วิเคราะห์จำนวนครั้งที่คนขับขับได้ในแต่ละปี โดย **แบ่งตาม Deliverer Name** อ้างอิงข้อมูลจาก Transport Update แล้วนำข้อมูลที่ของวันเวลาที่ deliverer ทำการ update สถานะ Order ID มาใช้ในการแบ่งตามปี

### 6. Issue: Issue analysis
เป็นตารางที่ใช้วิเคราะห์ปริมาณของปัญหาแต่ละประเภทแล้วพนักงานได้แก้ไขเรียบร้อยแล้ว โดย **แบ่งตาม Staff ID** อ้างอิงข้อมูลจาก Issue ของลูกค้า, Issue ของพนักงานและ Category Problem แล้วนำข้อมูลของชนิดของปัญหาและพนักงานระดับต่าง ๆ มาหาวิเคราะห์ตามประเภทของปัญหา

## More Information
### สามารถดูข้อมูลเพิ่มเติมได้ที่

[CHOW_CHOW_online_rental](https://github.com/Querians/chowchow-rental)

## Our Team

| FirstName | LastName         | ID          |
| --------- | ---------------- | ----------- |
| Kanyaluck | Chimchome        | 64070501003 |
| Boonyarit | Samran           | 64070501028 |
| Warisara  | Patib            | 64070501044 |
| Chanidapa | Chanama          | 64070501090 |
| Nontawat  | Kunlayawuttipong | 64070501093 |
