const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');
const app = express();

app.use(bodyParser.json());
const port = 8000;

// เก็บ user
let users = []
let counter = 1

/* GET /users สำหรับ get users ทั้งหมด
POST /user สำหรับสร้าง user ใหม่บันทึกเข้าไป
PUT /user/:id สำหรับแก้ไข user รายคนที่ต้องการบันทึก
GET /user/:id สำหรับดึงข้อมูล user รายคน
PUT /user/:id สำหรับแก้ไข user รายคนที่ต้องการบันทึก
DELETE /user/:id สำหรับลบ user รายคนที่ต้องการลบ
*/
 const initMySQL = async () => {
  conn = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'webdb',
    port: 8830
  })
 }

/*app.get('/testdb-new', async (req, res) => {
  try {
    const results = await conn.query('SELECT - FROM users')
  res.json(results[0])
  } catch (error) {
    console.log('Erro fetching users:', error.message)
    res.status(500).json({error:'Error fetching users'})
})
})*/

// path = GET /users สำหรับ get users ทั้งหมด
app.get('/users', async(req, res) => {
  const results = await conn.query('SELECT * FROM users')
  res.json(results[0])
})

// path = POST /user สำหรับ create user ใหม่บันทึกเข้าไป
app.post('/users', async(req, res) => {
  let user = req.body;
  const results = await conn.query('INSERT INTO users SET ?', user)
  console.log('results', results)
  res.json({
    message: "User created",
    data: results[0]
  })
});

//path = PUT /user/:id
app.put('/user/:id', (req, res) => {
  let id = req.params.id;
  let updateUser = req.body

  //หา user จาก id ที่ส่งมา
  let selectedIndex = users.findIndex(user => user.id == id);

  //update user นั้น
  if (updateUser.firstname) {
    users[selectedIndex].firstname = updateUser.firstname || users[selectedIndex].firstname
  }
  if (updateUser.lastname) {
  users[selectedIndex].lastname = updateUser.lastname || users[selectedIndex].lastname
  }
  res.json({
    message : "User updated",
    data: {
      user: updateUser,
      indexUpdate: selectedIndex
    }
  });
}
);

//Path = DELETE /user/:id
app.delete('/user/:id', (req, res) => {
  let id = req.params.id

  //หา index ของ user ที่ต้องการลบ
  let selectedIndex = users.findIndex(user => user.id == id);
  
  users.splice(selectedIndex, 1);
  res.json({
    message : "Delete Completed",
    indexDelete : selectedIndex
  });
});

app.listen(port, async (req, res) => {
  await initMySQL()
  console.log('Server is running on port' + port);
})
