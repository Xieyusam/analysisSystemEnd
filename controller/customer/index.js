const CustomerService = require('../../service/customer')
const RecordService = require('../../service/record')
const Response = require('../../utils/response')
const Uuid = require('../../utils/uuid')


//批量添加新数据
async function newMoreCustomer(ctx) {
    const recordId = new Uuid().uuid
    const result = await CustomerService.newMoreCustomer({ ctx ,recordId })
    const response = new Response()
    if (result.result) {
        const result2 = await RecordService.newRecord({ ctx , recordId })
        if (result2.result) {
            response.SUCCESS = 200
            response.DATA = '插入成功'
        }else{
            response.FAIL = 500
            response.DATA = '错误'  
        }
    }else{
        response.FAIL = 500
        response.DATA = '错误'
    }
    ctx.body = response.getData()
}
async function allCustomer(ctx) {
    const result = await CustomerService.getAllCustomer()
    const response = new Response()
    if(result){
        response.SUCCESS = 200
        response.DATA = {count:result.length ,customers:result}
    }else{
        response.FAIL = 500
        response.DATA = '错误'
    }
    ctx.body = response.getData()
}

async function delCustomer(ctx) {
    const { id } = ctx.params
  
    const result = await CustomerService.delCustomer({ id })
  
    const response = new Response()
  
    if (result) {
      response.SUCCESS = 200
      response.DATA = '删除成功'
    } else {
      response.FAIL = 500
      response.DATA = '删除错误'
    }
    ctx.body = response.getData()
  }



module.exports = {
    newMoreCustomer,allCustomer,delCustomer
}