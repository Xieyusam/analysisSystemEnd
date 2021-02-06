class Product {
    constructor({
        id,
        name,
        type,
        amount,
        cout,
        transDate,
        record_id:recordId,
        created_date: createdDate,
        updated_date: updatedDate
      }) {
        this.product = {
          id: String,
          name:String,
          type:String,
          amount:Number,
          cout:Number,
          trans_date:String,
          record_id:String,
          created_date: Number,
          updated_date: Number,
        }
        this.product.id = id
        this.product.type = type
        this.product.name = name
        this.product.amount = amount
        this.product.cout = cout
        this.product.trans_date = transDate
        this.product.record_id = recordId
        this.product.created_date = createdDate
        this.product.updated_date = updatedDate
      }

      getData() {
        const { product } = this
        const productWithNoNull = { ...this.product }
    
        const properties = Object.getOwnPropertyNames(this.product)
    
        properties.forEach((property) => {
          if (Reflect.get(this.product, property) == null) {
            Reflect.deleteProperty(productWithNoNull, property)
          }
        })
    
        return { product, productWithNoNull }
      }

      get id() {
        return this.product.id === undefined ? null : this.product.id
      }
    
      set id(value) {
        this.product.id = value
      }

      get name() {
        return this.product.name === undefined ? null : this.product.name
      }
    
      set name(value) {
        this.product.name = value
      }

      get type() {
        return this.product.type === undefined ? null : this.product.type
      }
    
      set type(value) {
        this.product.type = value
      }

      get amount() {
        return this.product.amount === undefined ? null : this.product.amount
      }
    
      set amount(value) {
        this.product.amount = value
      }
      
      get cout() {
        return this.product.cout === undefined ? null : this.product.cout
      }
    
      set cout(value) {
        this.product.cout = value
      }

      get transDate() {
        return this.product.trans_date === undefined ? null : this.product.trans_date
      }
    
      set transDate(value) {
        this.product.trans_date = value
      }

      get recordId() {
        return this.product.record_id === undefined ? null : this.product.record_id
      }
    
      set recordId(value) {
        this.product.record_id = value
      }

      get createdDate() {
        return this.product.created_date === undefined
          ? null
          : this.product.created_date
      }
    
      set createdDate(value) {
        this.product.created_date = value
      }
    
      get updatedDate() {
        return this.product.updated_date === undefined
          ? null
          : this.product.updated_date
      }
    
      set updatedDate(value) {
        this.product.updated_date = value
      }
}

module.exports = Product