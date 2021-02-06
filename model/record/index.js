class Record {
  constructor({
    id,
    recordCount,
    userId,
    type,
    userName,
    createdDate,
    updatedDate,
  }) {
    this.record = {
      id: String,
      record_count: Number,
      user_id: String,
      type: Number,
      user_name: String,
      created_date: Number,
      updated_date: Number,
    }
    this.record.id = id
    this.record.record_count = recordCount
    this.record.user_id = userId
    this.record.type = type
    this.record.user_name = userName
    this.record.created_date = createdDate
    this.record.updated_date = updatedDate
  }

  getData() {
    const {
      record
    } = this
    const recordWithNoNull = {
      ...this.record
    }

    const properties = Object.getOwnPropertyNames(this.record)

    properties.forEach((property) => {
      if (Reflect.get(this.record, property) == null) {
        Reflect.deleteProperty(recordWithNoNull, property)
      }
    })

    return {
      record,
      recordWithNoNull
    }
  }

  get id() {
    return this.record.id === undefined ? null : this.record.id
  }

  set id(value) {
    this.record.id = value
  }

  get recordCount() {
    return this.record.record_count === undefined ? null : this.record.record_count
  }

  set recordCount(value) {
    this.record.record_count = value
  }

  get type() {
    return this.record.type === undefined ? null : this.record.type
  }

  set recordCount(value) {
    this.record.type = value
  }
  get userId() {
    return this.record.user_id === undefined ? null : this.record.user_id
  }

  set userId(value) {
    this.record.user_id = value
  }

  get userName() {
    return this.record.user_name === undefined ? null : this.record.user_name
  }

  set userName(value) {
    this.record.user_name = value
  }

  get createdDate() {
    return this.record.created_date === undefined ?
      null :
      this.record.created_date
  }

  set createdDate(value) {
    this.record.created_date = value
  }

  get updatedDate() {
    return this.record.updated_date === undefined ?
      null :
      this.record.updated_date
  }

  set updatedDate(value) {
    this.record.updated_date = value
  }
}

module.exports = Record