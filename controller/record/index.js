const RecordService = require('../../service/record')
const ProductService = require('../../service/product')
const StaffService = require('../../service/staff')
const CustomerService = require('../../service/customer')
const Response = require('../../utils/response')

// 查看所有记录
async function allrecord(ctx) {
    const result = await RecordService.getAllRecord()
    const response = new Response()
    if(result){
        response.SUCCESS = 200
        response.DATA = {count:result.length ,records:result}
    }else{
        response.FAIL = 500
        response.DATA = '错误'
    }
    ctx.body = response.getData()
}

async function delRecord(ctx) {
    const id = ctx.request.body.recordId
    const type = ctx.request.body.type
    const result = await RecordService.delRecord({id:id})
    const response = new Response()
    // console.log(result)
    if(result) {
        let result1 = ''
        if(type == 0){
            result1 = await CustomerService.delByRecord({id:id})
            
        }
        if(type == 1){
            result1 = await ProductService.delByRecord({id:id})
        }
        if(type == 2){
            result1 = await StaffService.delByRecord({id:id})
        }
        response.SUCCESS = 200
        response.DATA = {del:result1}
    }else{
        response.FAIL = 500
        response.DATA = '错误'
    }
    ctx.body = response.getData()
}

module.exports = {
    allrecord,delRecord
}