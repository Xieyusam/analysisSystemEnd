const Router = require('koa-router')
// 引入路由模块
const user = require('../controller/user')
const staff = require('../controller/staff')
const product = require('../controller/product')
const customer = require('../controller/customer')
const record = require('../controller/record')




// 首页路由
const index = new Router()

// TODO: 用户相关路由
const UserRouter = new Router()
UserRouter.get('/user/:id', user.getUserById)
UserRouter.post('/user/register', user.newUser)
UserRouter.post('/login', user.login)
UserRouter.put('/user/:id', user.setUser)
UserRouter.get('/user/del/:id', user.delUser)
UserRouter.get('/AllUser', user.getAllUser)
UserRouter.post('/delMoreUser', user.delMoreUser)
UserRouter.post('/resetPassword', user.resetPassword)
UserRouter.post('/newPassword', user.newPassword)

// TODO: 人事相关路由
const StaffRouter = new Router()
StaffRouter.post('/staff/newMore', staff.newMoreStaff)
StaffRouter.get('/staff/all', staff.allStaff)
StaffRouter.get('/staff/del/:id', staff.delStaff)


// TODO: 产品相关路由
const ProductRouter = new Router()
ProductRouter.post('/product/newMore', product.newMoreProduct)
ProductRouter.get('/product/all', product.allProduct)
ProductRouter.get('/product/del/:id', product.delProduct)


// TODO: 客户相关路由
const CustomerRouter = new Router()
CustomerRouter.post('/customer/newMore', customer.newMoreCustomer)
CustomerRouter.get('/customer/all', customer.allCustomer)
CustomerRouter.get('/customer/del/:id', customer.delCustomer)


// TODO: 记录的相关路由
const RecordRouter = new Router()
RecordRouter.get('/record/all', record.allrecord)
RecordRouter.post('/record/del', record.delRecord)


module.exports = {
    index, UserRouter,StaffRouter,CustomerRouter,ProductRouter,RecordRouter
}