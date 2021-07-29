import productAPI from '../api/productAPI';

const showListProducts = {
    async render() {
        const { data: products } = await productAPI.list();
        const result = products.map(product => {
            return `<div class="group overflow-hidden shadow-md bg-white ">
                            <div class="bg-white overflow-hidden ">
                                <div class="py-2 transition duration-500 ease-in-out transform group-hover:scale-90">
                                    <a href="/#/product/${product._id}"><img class="mx-auto" src="${product.image}" alt="" width="80%"></a>
                                </div>
                                <a href="/#/product/${product._id}"><span class="text-center text-sm pt-1 group-hover:text-yellow-600 px-2">${product.name}</span></a>
                                <p class="text-red-500 text-lg font-bold py-1">${prices(Number(product.priceSale)).replace('VND', 'Đ')}<span class="text-gray-500 text-base ml-2 font-bold pt-1italic line-through">${prices(Number(product.price)).replace('VND', 'Đ')}</span></p>
                                <div class="transition duration-300 ease-in-out transform translate-y-24 group-hover:-translate-y-0" >
                                    <button class="bg-blue-500 text-white bg-black text-base font-bold rounded-md btn_addCart" 
                                            style="padding: 6px 50px;" data-id="${product._id}">
                                        THÊM GIỎ HÀNG
                                    </button>
                                </div>
                            </div>
                        </div>
                        `
        }).join('');
        return `
            ${ result};
        `
    }
}
export default showListProducts;