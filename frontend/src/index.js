import 'owl.carousel';
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import {
    parseRequestUrl,
    $$,
    onLoadCartNumber,
    productSearch,
    isAuthenticated
} from "./utils";
import authAPI from './api/auth';
import ProductPage from "./pages/product";
import ProductDetailPage from "./pages/product-detail";
import CategoryPage from "./pages/category"
import ProductAddPage from './pages/ProductAddPage';
import ProductManagerPage from './pages/ProductManagerPage';
import ProductEditPage from './pages/ProductEditPage';
import ContactPage from './pages/contact';
import CategoryAddPage from './pages/CategoryAddPage';
import CategoryManagerPage from './pages/CategoryManagerPage';
import CategoryEditPage from './pages/CategoryEditPage';
import UserManagerPage from './pages/UserManagerPage';
import SignupPage from './pages/signup';
import SigninPage from './pages/signin';
import UserAddPage from './pages/UserAddPage';
import UserEditPage from './pages/UserEditPage';
import Error404Page from './pages/Error404Page';
import ShopCartPage from './pages/ShopCart';
import ProductSearchPage from './pages/productSearch';
import OrderPage from './pages/orderPage';
import OrderManagerPage from './pages/OrderManagerPage';
import OrderEditPage from './pages/OrderEditPage';
import OrderDetailPageAdmin from './pages/OrderDetailPageAdmin';
import orderDetail from './component/orderDetail';
import OrderDetailPage from './pages/orderDetailPage';
import PermissionPage from './pages/PermissionPage';
import toast from 'toast-me';

let routes;
async function checkPermission() {
    if (isAuthenticated() !== false) {
        const { data: user } = await authAPI.read(isAuthenticated()._id)
        // console.log(user);
        if(user.permission !== 0 ){
            routes = {
                '/': ProductPage,
                '/home': HomePage,
                '/about': AboutPage,
                '/contact': ContactPage,
                '/product': ProductPage,
                '/product/:id': ProductDetailPage,
                '/category/:id': CategoryPage,
                '/shopcart': ShopCartPage,
                '/orderdetail/:id': OrderDetailPage,
                '/search/:id': ProductSearchPage,
                '/order': OrderPage,
                '/signup': SignupPage,
                '/signin': SigninPage,
                //admin
                '/addproduct': ProductAddPage,
                '/listproduct': ProductManagerPage,
                '/editproduct/:id': ProductEditPage,
                '/addcategory': CategoryAddPage,
                '/listcategory': CategoryManagerPage,
                '/editcategory/:id': CategoryEditPage,
                '/listuser': UserManagerPage,
                '/adduser': UserAddPage,
                '/edituser/:id': UserEditPage,
                '/error404': Error404Page,
                '/listorder': OrderManagerPage,
                '/editorder/:id': OrderEditPage,
                '/orderdetailadmin/:id': OrderDetailPageAdmin,
            }
        } else {
            routes = {
                '/': ProductPage,
                '/home': HomePage,
                '/about': AboutPage,
                '/contact': ContactPage,
                '/product': ProductPage,
                '/product/:id': ProductDetailPage,
                '/category/:id': CategoryPage,
                '/shopcart': ShopCartPage,
                '/orderdetail/:id': OrderDetailPage,
                '/search/:id': ProductSearchPage,
                '/order': OrderPage,
                '/signup': SignupPage,
                '/signin': SigninPage,
                //admin
                '/addproduct': HomePage,
                '/listproduct': HomePage,
                '/editproduct/:id': HomePage,
                '/addcategory': HomePage,
                '/listcategory': HomePage,
                '/editcategory/:id': HomePage,
                '/listuser': HomePage,
                '/adduser': HomePage,
                '/edituser/:id': HomePage,
                '/error404': HomePage,
                '/listorder': HomePage,
                '/editorder/:id': HomePage,
                '/orderdetailadmin/:id': HomePage,
            }
        }
    } else {
        routes = {
            '/': ProductPage,
            '/home': HomePage,
            '/about': AboutPage,
            '/contact': ContactPage,
            '/product': ProductPage,
            '/product/:id': ProductDetailPage,
            '/category/:id': CategoryPage,
            '/shopcart': ShopCartPage,
            '/orderdetail/:id': OrderDetailPage,
            '/search/:id': ProductSearchPage,
            '/order': OrderPage,
            '/signup': SignupPage,
            '/signin': SigninPage,
            //admin
            '/addproduct': HomePage,
            '/listproduct': HomePage,
            '/editproduct/:id': HomePage,
            '/addcategory': HomePage,
            '/listcategory': HomePage,
            '/editcategory/:id': HomePage,
            '/listuser': HomePage,
            '/adduser': HomePage,
            '/edituser/:id': HomePage,
            '/error404': HomePage,
            '/listorder': HomePage,
            '/editorder/:id': HomePage,
            '/orderdetailadmin/:id': HomePage,
        }
    }
}
// const routes = {
//     '/': ProductPage,
//     '/home': HomePage,
//     '/about': AboutPage,
//     '/contact': ContactPage,
//     '/product': ProductPage,
//     '/product/:id': ProductDetailPage,
//     '/category/:id': CategoryPage,
//     '/addproduct': ProductAddPage,
//     '/listproduct': ProductManagerPage,
//     '/editproduct/:id': ProductEditPage,
//     '/addcategory': CategoryAddPage,
//     '/listcategory': CategoryManagerPage,
//     '/editcategory/:id': CategoryEditPage,
//     '/listuser': UserManagerPage,
//     '/adduser': UserAddPage,
//     '/edituser/:id': UserEditPage,
//     '/signup': SignupPage,
//     '/signin': SigninPage,
//     '/error404': Error404Page,
//     '/shopcart': ShopCartPage,
//     '/search/:id': ProductSearchPage,
//     '/order': OrderPage,
//     '/listorder': OrderManagerPage,
//     '/editorder/:id': OrderEditPage,
//     '/orderdetailadmin/:id': OrderDetailPageAdmin,
//     '/orderdetail/:id': OrderDetailPage,
// }

const router = async () => {
    const { resource, id } = parseRequestUrl();
    await checkPermission();
    const parseUrl = (resource ? `/${resource}` : '/') + (id ? `/:id` : '');
    console.log('parseUrl -----' + parseUrl);
    const page = routes[parseUrl] ? routes[parseUrl] : Error404Page;
    // console.log(routes[parseUrl].render());
    document.querySelector('#content').innerHTML = await page.render();

    if (page.afterRender) {
        await page.afterRender();
    }

    await $('.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true
    });
    onLoadCartNumber();
}

window.addEventListener("DOMContentLoaded", router);
window.addEventListener("hashchange", router);