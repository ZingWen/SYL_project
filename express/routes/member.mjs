import express from 'express';
const router = express.Router();
import db from './configs/db.js';
import { generateHash } from './db-helpers/password-hash';

router.post('/register', async function(req, res) {
    const { account, email } = req.body;
    let { password } = req.body;
    const level_point = 0; // 預設積分
    const shop_valid =0; // 預設賣場沒上架
    const created_at = new Date(); // 註冊時間
  
    try {
      password = await generateHash(password); // hash加密密碼
  
      const Query = `INSERT INTO your_table_name (account, password, email, level_point, created_at) VALUES (?, ?, ?, ?, ?)`;
      await db.execute(Query, [account, password, email, level_point, shop_valid, created_at]);
  
      res.status(201).send({ message: '會員註冊成功' });
      
    } catch (error) {
      res.status(500).send({ message: '註冊失敗' });
    }
  });


// 登入路由
router.post('/login', function (req, res) {
    // 登入邏輯...
});

// 登出路由
router.post('/logout', function (req, res) {
    // 登出邏輯...
});

export default router;
