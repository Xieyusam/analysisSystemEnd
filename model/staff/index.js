class Staff {
    constructor({
      id,
      name,
      sex,
      birthday,
      home,
      department,
      salary,
      initday,
      overday,
      record_id:recordId,
      created_date: createdDate,
      updated_date: updatedDate
    }) {
      this.staff = {
        id: String,
        name:String,
        sex:Number,
        birthday:String,
        home:String,
        department:String,
        salary:Number,
        overday:String,
        initday:String,
        record_id:String,
        created_date: Number,
        updated_date: Number,
      }
      this.staff.id = id
      this.staff.name = name
      this.staff.sex = sex
      this.staff.birthday = birthday
      this.staff.home = home
      this.staff.department = department
      this.staff.initday = initday
      this.staff.overday = overday
      this.staff.salary = salary
      this.staff.record_id = recordId
      this.staff.created_date = createdDate
      this.staff.updated_date = updatedDate
    }
  
    getData() {
      const { staff } = this
      const staffWithNoNull = { ...this.staff }
  
      const properties = Object.getOwnPropertyNames(this.staff)
  
      properties.forEach((property) => {
        if (Reflect.get(this.staff, property) == null) {
          Reflect.deleteProperty(staffWithNoNull, property)
        }
      })
  
      return { staff, staffWithNoNull }
    }
  
    get id() {
      return this.staff.id === undefined ? null : this.staff.id
    }
  
    set id(value) {
      this.staff.id = value
    }
  
    get name() {
      return this.staff.name === undefined ? null : this.staff.name
    }
  
    set name(value) {
      this.staff.name = value
    }
  
    get sex() {
      return this.staff.sex === undefined ? null : this.staff.sex
    }
  
    set sex(value) {
      this.staff.sex = value
    }
  
    get birthday() {
      return this.staff.birthday === undefined ? null : this.staff.birthday
    }
  
    set birthday(value) {
      this.staff.birthday = value
    }

    get home() {
        return this.staff.home === undefined ? null : this.staff.home
      }
    
    set home(value) {
        this.staff.home = value
    }

    get department() {
        return this.staff.department === undefined ? null : this.staff.department
    }
    
    set department(value) {
        this.staff.department = value
    }

    get salary() {
        return this.staff.salary === undefined ? null : this.staff.salary
    }
    
    set salary(value) {
        this.staff.salary = value
    }

    get initday() {
      return this.staff.initday === undefined ? null : this.staff.initday
    }
  
    set initday(value) {
      this.staff.initday = value
    }

    get overday() {
      return this.staff.overday === undefined ? null : this.staff.overday
    }
  
    set overday(value) {
      this.staff.overday = value
    }

    get recordId() {
        return this.staff.record_id === undefined ? null : this.staff.record_id
    }
    
    set recordId(value) {
        this.staff.record_id = value
    }
    get createdDate() {
      return this.staff.created_date === undefined
        ? null
        : this.staff.created_date
    }
  
    set createdDate(value) {
      this.staff.created_date = value
    }
  
    get updatedDate() {
      return this.staff.updated_date === undefined
        ? null
        : this.staff.updated_date
    }
  
    set updatedDate(value) {
      this.staff.updated_date = value
    }
  }
  
  module.exports = Staff
  