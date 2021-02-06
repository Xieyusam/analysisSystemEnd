const {
    mysql
} = require('../../database/mysql')
const Product = require('../../model/product')
const Uuid = require('../../utils/uuid')

class ProductService {

    static async newMoreProduct({
        ctx,
        recordId
    }) {
        let newproductInfo = {}
        newproductInfo = ctx.request.body.products
        const productArry = newproductInfo.map(element => {
            const product = new Product(element)
            product.id = new Uuid().uuid
            product.recordId = recordId
            product.createdDate = new Date()
            return product.getData().product
        });
        // console.log(productArry)
        const result = await mysql('product').insert(productArry)
        console.log(result)
        return result[0] === 0 ? {
            result: true
        } : {
            result: false
        }
    }

    //获取所有产品的信息
    static async getAllProduct() {
        const result = await mysql('product').select().orderBy('trans_date', 'desc')
        const ProductInfo = []
        result.forEach((Info) => {
            //   delete userInfo.password
            ProductInfo.push(Info)
        })
        return ProductInfo
    }

    // 根据记录删除产品的信息
    static async delByRecord({id}) {
        const result = await mysql('product')
            .where({
                record_id: id
            })
            .del()

        return result
    }

        // 根据记录删除产品的信息
        static async delProduct({id}) {
            const result = await mysql('product')
                .where({
                     id
                })
                .del()
    
            return result === 1
        }
}

module.exports = ProductService