const { mysql } = require('../../database/mysql')
const Staff = require('../../model/staff')
const Uuid = require('../../utils/uuid')

class StaffService {

    static async newMoreStaff({ ctx,recordId }) {
        let newStaffInfo = {}
        newStaffInfo = ctx.request.body.staffs
        const staffArry = newStaffInfo.map(element => {
            const staff = new Staff(element)
            staff.id = new Uuid().uuid
            staff.recordId = recordId
            staff.createdDate = new Date()
            return staff.getData().staff
        });
        // console.log(staffArry)
        const result = await mysql('staff').insert(staffArry)
        console.log(result)
        return result[0] === 0 ? { result: true } : { result: false }
    }
    //获取所有员工的信息
    static async getAllStaff() {
        const result = await mysql('staff').select().orderBy('initday', 'desc')
        const StaffInfo = []
        result.forEach((Info) => {
            //   delete userInfo.password
            StaffInfo.push(Info)
        })
        return StaffInfo
    }

    // 根据记录删除员工的信息
    static async delByRecord({id}) {
        const result = await mysql('staff')
            .where({
                record_id: id
            })
            .del()

        return result
    }

        // 根据记录删除员工的信息
        static async delStaff({id}) {
            const result = await mysql('staff')
                .where({
                    id
                })
                .del()
    
            return result === 1
        }
}

module.exports = StaffService