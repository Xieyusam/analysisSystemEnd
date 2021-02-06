const StaffService = require('../../service/staff')
const RecordService = require('../../service/record')
const Response = require('../../utils/response')
const Uuid = require('../../utils/uuid')


//批量添加新数据
async function newMoreStaff(ctx) {
    const recordId = new Uuid().uuid
    const result = await StaffService.newMoreStaff({ ctx ,recordId })
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

async function allStaff(ctx) {
    const result = await StaffService.getAllStaff()
    const response = new Response()
    if(result){
        response.SUCCESS = 200
        response.DATA = {count:result.length ,staffs:result}
    }else{
        response.FAIL = 500
        response.DATA = '错误'
    }
    ctx.body = response.getData()
}

async function delStaff(ctx) {
    const { id } = ctx.params
  
    const result = await StaffService.delStaff({ id })
  
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
    newMoreStaff,allStaff,delStaff
}