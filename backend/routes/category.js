import express from 'express';
import { create, list, categoryById, read, update, remove } from '../controllers/category';

const router = express.Router();


//Danh sách danh mục
router.get('/categories', list);
//Chi tiết danh mục
router.get('/categories/:categoryId', read);
//Thêm mới danh mục
router.post('/categories', create);
//Cập nhật danh mục
router.put('/categories/:categoryId', update);
//Xoá danh mục
router.delete('/categories/:categoryId', remove);
//Lấy param
router.param('categoryId', categoryById);


module.exports = router;