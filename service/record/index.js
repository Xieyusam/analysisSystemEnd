const {
    mysql
} = require('../../database/mysql')
const Record = require('../../model/record')

class RecordService {

    static async newRecord({
        ctx,
        recordId
    }) {
        // let newRecordInfo = {}
        let {
            recordCount,
            userId,
            type,
            userName
        } = ctx.request.body
        let newRecordInfo = {
            recordCount,
            userId,
            type,
            userName
        }
        console.log(newRecordInfo)
        let record = new Record(newRecordInfo)
        record.id = recordId
        // record.recordId = recordId
        record.createdDate = new Date()
        console.log(record)
        const result = await mysql('record').insert(record.getData().record)
        return result[0] === 0 ? {
            result: true
        } : {
            result: false
        }
    }

    //获取所有记录的信息
    static async getAllRecord() {
        const result = await mysql('record')
        // .outerJoin('user', 'record.user_id', '=', 'user.id')
        .select()
        .orderBy('record.created_date','desc')
        const RecordInfo = []
        result.forEach((userInfo) => {
            //   delete userInfo.password
            RecordInfo.push(userInfo)
        })
        return RecordInfo
    }

    // 删除一条记录
    static async delRecord({ id }) {
        const result = await mysql('record')
          .where({ id })
          .del()
          console.log(result)
        return result === 1
      }
}

module.exports = RecordService