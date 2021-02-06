const ProductService = require('../../service/product')
const RecordService = require('../../service/record')
const Response = require('../../utils/response')
const Uuid = require('../../utils/uuid')


//批量添加新数据
async function newMoreProduct(ctx) {
    const recordId = new Uuid().uuid
    const result = await ProductService.newMoreProduct({ ctx ,recordId })
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

async function allProduct(ctx) {
    const result = await ProductService.getAllProduct()
    const response = new Response()
    if(result){
        response.SUCCESS = 200
        response.DATA = {count:result.length ,products:result}
    }else{
        response.FAIL = 500
        response.DATA = '错误'
    }
    ctx.body = response.getData()
}

async function delProduct(ctx) {
    const { id } = ctx.params
  
    const result = await ProductService.delProduct({ id })
  
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
    newMoreProduct,allProduct,delProduct
}