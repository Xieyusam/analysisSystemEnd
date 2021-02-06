const {
    mysql
} = require('../../database/mysql')
const Customer = require('../../model/customer')
const Uuid = require('../../utils/uuid')

class CustomerService {

    static async newMoreCustomer({
        ctx,
        recordId
    }) {
        let newcustomerInfo = {}
        newcustomerInfo = ctx.request.body.customers
        const customerArry = newcustomerInfo.map(element => {
            const customer = new Customer(element)
            customer.id = new Uuid().uuid
            customer.recordId = recordId
            customer.createdDate = new Date()
            return customer.getData().customer
        });
        // console.log(customerArry)
        const result = await mysql('customer').insert(customerArry)
        console.log(result)
        return result[0] === 0 ? {
            result: true
        } : {
            result: false
        }
    }

    //获取所有客户的信息
    static async getAllCustomer() {
        const result = await mysql('customer').select().orderBy('start_date', 'desc')
        const CustomerInfo = []
        result.forEach((Info) => {
            //   delete userInfo.password
            CustomerInfo.push(Info)
        })
        return CustomerInfo
    }

    // 根据记录删除客户
    static async delByRecord({
        id
    }) {
        const result = await mysql('customer')
            .where({
                record_id: id
            })
            .del()

        return result
    }
    // 根据记录删除客户
    static async delCustomer({
        id
    }) {
        const result = await mysql('customer')
            .where({
                id
            })
            .del()

        return result === 1
    }
}

module.exports = CustomerService