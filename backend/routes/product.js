import express from 'express';
import { list, read, create, update, remove, productById, productByCategory } from '../controllers/product'
import { categoryById } from '../controllers/category';

const router = express.Router();

//Danh sách sản phẩm
router.get('/products', list);
//Danh sách sản phẩm theo danh mục
router.get('/products/categories/:categoryId', productByCategory);
//Chi tiết sản phẩm
router.get('/products/:productId', read);
//Thêm mới sản phẩm 
router.post('/products', create);
//Cập nhật sản phẩm
router.put('/products/:productId', update);
//Xoá sản phẩm
router.delete('/products/:productId', remove);
//Lấy param
router.param('categoryId', categoryById);
router.param('productId', productById);


module.exports = router;
