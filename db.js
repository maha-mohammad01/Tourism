// const hostname = '127.0.0.1';
// const port = 3000;

// const { Pool } = require('pg');
// const express = require('express');
// const bodyParser = require('body-parser'); // تأكد من تثبيت هذه المكتبة

// const pool = new Pool({
//   user: 'postgres',
//   password: '123',
//   host: 'localhost',
//   port: 5432,
//   database: 'Tourism'
// });

// const app = express();

// app.use(bodyParser.urlencoded({ extended: true })); // استخدم body-parser

// // عرض نموذج الإضافة
// app.get('/insertusers', (req, res) => {
//   res.sendFile(__dirname + '/users.html');
// });


// app.post('/adduser', async (req, res) => {
//   try {
//     const { user_name, email, password } = req.body;

//     // تحقق من وجود البريد الإلكتروني في القاعدة بالفعل
//     const checkEmailQuery = 'SELECT * FROM public.users WHERE email = $1';
//     const emailCheckResult = await pool.query(checkEmailQuery, [email]);

//     if (emailCheckResult.rows.length > 0) {
//       // إذا وجدت سجلات تحمل نفس البريد الإلكتروني، فقم برفض الطلب
//       res.status(400).json({ error: 'البريد الإلكتروني موجود بالفعل' });
//     } else {
//       // إذا لم يتم العثور على أي سجلات بنفس البريد الإلكتروني، قم بإجراء عملية الإدخال
//       const insertQuery = `
//         INSERT INTO public.users (user_name, email, password)
//         VALUES ($1, $2, $3)
//         RETURNING *;
//       `;
//       const values = [user_name, email, password];
//       const result = await pool.query(insertQuery, values);
//       res.status(201).json({ message: 'تمت إضافة المستخدم بنجاح', newUser: result.rows[0] });
//     }
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });
// // توجيه لصفحة البداية
// app.get('/', async (req, res) => {
//   try {
//     const result = await pool.query('SELECT * FROM users');
//     res.json(result.rows);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Internal Server Error');
//   }
// });





// // إنشاء مسار لصفحة تسجيل الدخول
// app.get('/login', (req, res) => {
//   res.sendFile(__dirname + '/login.html');
// });

// // معالجة البيانات المرسلة من نموذج تسجيل الدخول
// app.post('/login', async (req, res) => {
//   try {
//       const { email, password } = req.body;

//       // قم بالتحقق من البريد الإلكتروني وكلمة المرور في قاعدة البيانات
//       const loginQuery = 'SELECT * FROM public.users WHERE email = $1 AND password = $2';
//       const loginResult = await pool.query(loginQuery, [email, password]);

//       if (loginResult.rows.length > 0) {
//           // إذا تم العثور على سجل يتطابق مع البريد وكلمة المرور، يتم إعتبار المستخدم مسجل دخوله بنجاح
//           res.status(200).json({ message: 'تم تسجيل الدخول بنجاح' });
//       } else {
//           // إذا لم يتم العثور على سجل متطابق، يتم رفض تسجيل الدخول وإرسال رسالة خطأ
//           res.status(401).json({ error: 'فشل تسجيل الدخول. تأكد من صحة البريد وكلمة المرور.' });
//       }
//   } catch (err) {
//       console.error(err);
//       res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// // app.get('/addblog', (req, res) => {
// //   res.sendFile(__dirname + '/blogs.html');
// // });
// // // add blpgs//
// // app.use(bodyParser.urlencoded({ extended: true }));
// // app.get('/blog', async (req, res) => {
// //   try {
// //     const { title, descriptions, img_url, author_id } = req.body;
// //     app.use(bodyParser.urlencoded({ extended: true }));
// //     // تنفيذ استعلام SQL لإدخال البيانات في جدول Blogs
// //     const insertBlogQuery = `
// //       INSERT INTO blogs (title, descriptions, img_url, author_id)
// //       VALUES ($1, $2, $3, $4)
// //       RETURNING *;
// //     `;

// //     const values = [title, descriptions, img_url, author_id];
// //     const result = await pool.query(insertBlogQuery, values);

// //     res.status(201).json({ message: 'تمت إضافة المدونة بنجاح', newBlog: result.rows[0] });
// //   } catch (err) {
// //     console.error(err);
// //     res.status(500).json({ error: 'Internal Server Error' });
// //   }
// // });

// // app.get('/blog', (req, res) => {
// //   res.sendFile(__dirname + '/blogs.html');
// // });

// // إضافة مدونة جديدة
// app.post('/blog', async (req, res) => {
//   try {
//     const { title, descriptions, img_url, author_id } = req.body;
    
//     const insertBlogQuery = `
//       INSERT INTO blogs (title, descriptions, img_url, author_id)
//       VALUES ($1, $2, $3, $4)
//       RETURNING *;
//     `;

//     const values = [title, descriptions, img_url, author_id];
//     const result = await pool.query(insertBlogQuery, values);

//     res.status(201).json({ message: 'تمت إضافة المدونة بنجاح', newBlog: result.rows[0] });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });


// app.listen(port, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });





const hostname = '127.0.0.1';
const port = 3000;

const { Pool } = require('pg');
const express = require('express');
const bodyParser = require('body-parser'); // تأكد من تثبيت هذه المكتبة

const pool = new Pool({
  user: 'postgres',
  password: '123',
  host: 'localhost',
  port: 5432,
  database: 'Tourism'
});

const app = express();

app.use(bodyParser.urlencoded({ extended: true })); // استخدم body-parser

// عرض نموذج الإضافة
app.get('/insertusers', (req, res) => {
  res.sendFile(__dirname + '/users.html');
});


app.post('/adduser', async (req, res) => {
  try {
    const { user_name, email, password } = req.body;

    // تحقق من وجود البريد الإلكتروني في القاعدة بالفعل
    const checkEmailQuery = 'SELECT * FROM public.users WHERE email = $1';
    const emailCheckResult = await pool.query(checkEmailQuery, [email]);

    if (emailCheckResult.rows.length > 0) {
      // إذا وجدت سجلات تحمل نفس البريد الإلكتروني، فقم برفض الطلب
      res.status(400).json({ error: 'Email already exists' });
    } else {
      // إذا لم يتم العثور على أي سجلات بنفس البريد الإلكتروني، قم بإجراء عملية الإدخال
      const insertQuery = `
        INSERT INTO public.users (user_name, email, password)
        VALUES ($1, $2, $3)
        RETURNING *;
      `;
      const values = [user_name, email, password];
      const result = await pool.query(insertQuery, values);
      res.status(201).json({ message: 'User added successfully', newUser: result.rows[0] });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
// توجيه لصفحة البداية
app.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});





// إنشاء مسار لصفحة تسجيل الدخول
app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/login.html');
});

// معالجة البيانات المرسلة من نموذج تسجيل الدخول
app.post('/login', async (req, res) => {
  try {
      const { email, password } = req.body;

      // قم بالتحقق من البريد الإلكتروني وكلمة المرور في قاعدة البيانات
      const loginQuery = 'SELECT * FROM public.users WHERE email = $1 AND password = $2';
      const loginResult = await pool.query(loginQuery, [email, password]);

      if (loginResult.rows.length > 0) {
          // إذا تم العثور على سجل يتطابق مع البريد وكلمة المرور، يتم إعتبار المستخدم مسجل دخوله بنجاح
          res.status(200).json({ message: 'You have been logged in successfully' });
      } else {
          // إذا لم يتم العثور على سجل متطابق، يتم رفض تسجيل الدخول وإرسال رسالة خطأ
          res.status(401).json({ error: 'login failed. Make sure your email and password are correct.' });
      }
  } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});

// app.get('/addblog', (req, res) => {
//   res.sendFile(__dirname + '/blogs.html');
// });
// // add blpgs//
// app.use(bodyParser.urlencoded({ extended: true }));
// app.get('/blog', async (req, res) => {
//   try {
//     const { title, descriptions, img_url, author_id } = req.body;
//     app.use(bodyParser.urlencoded({ extended: true }));
//     // تنفيذ استعلام SQL لإدخال البيانات في جدول Blogs
//     const insertBlogQuery = `
//       INSERT INTO blogs (title, descriptions, img_url, author_id)
//       VALUES ($1, $2, $3, $4)
//       RETURNING *;
//     `;

//     const values = [title, descriptions, img_url, author_id];
//     const result = await pool.query(insertBlogQuery, values);

//     res.status(201).json({ message: 'تمت إضافة المدونة بنجاح', newBlog: result.rows[0] });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });
app.get('/blog', (req, res) => {
  res.sendFile(__dirname + '/blogs.html');
});

// إضافة مدونة جديدة
app.post('/blog', async (req, res) => {
  try {
    const { title, descriptions, img_url, author_id } = req.body;
    
    const insertBlogQuery = `
      INSERT INTO blogs (title, descriptions, img_url, author_id)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `;

    const values = [title, descriptions, img_url, author_id];
    const result = await pool.query(insertBlogQuery, values);

    res.status(201).json({ message: '  Added successfully  ', newBlog: result.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});