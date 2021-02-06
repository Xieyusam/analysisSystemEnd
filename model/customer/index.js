class Customer {
    constructor({
        id,
        name,
        industry,
        registerYear,
        registerCapital,
        overDate,
        startDate,
        record_id: recordId,
        created_date: createdDate,
        updated_date: updatedDate,
    }) {
        this.customer = {
            id: String,
            name:String,
            industry: String,
            register_year: String,
            register_capital: Number,
            over_date: Number,
            start_date: Number,
            record_id: String,
            created_date: Number,
            updated_date: Number,
        }
        this.customer.id = id
        this.customer.name = name
        this.customer.industry = industry
        this.customer.register_year = registerYear
        this.customer.register_capital = registerCapital
        this.customer.over_date = overDate
        this.customer.start_date = startDate
        this.customer.record_id = recordId
        this.customer.created_date = createdDate
        this.customer.updated_date = updatedDate
    }

    getData() {
        const {
            customer
        } = this
        const customerWithNoNull = {
            ...this.customer
        }

        const properties = Object.getOwnPropertyNames(this.customer)

        properties.forEach((property) => {
            if (Reflect.get(this.customer, property) == null) {
                Reflect.deleteProperty(customerWithNoNull, property)
            }
        })

        return {
            customer,
            customerWithNoNull
        }
    }

    get id() {
        return this.customer.id === undefined ? null : this.customer.id
    }
    set id(value) {
        this.customer.id = value
    }
    
    get name() {
        return this.customer.name === undefined ? null : this.customer.name
    }
    set name(value) {
        this.customer.name = value
    }
    get industry() {
        return this.customer.industry === undefined ? null : this.customer.industry
    }
    set industry(value) {
        this.customer.industry = value
    }

    get registerYear() {
        return this.customer.register_year === undefined ? null : this.customer.register_year
    }
    set registerYear(value) {
        this.customer.register_year = value
    }

    get registerCapital() {
        return this.customer.register_capital === undefined ? null : this.customer.register_capital
    }
    set registerCapital(value) {
        this.customer.register_capital = value
    }

    get overDate() {
        return this.customer.over_date === undefined ? null : this.customer.over_date
    }
    set overDate(value) {
        this.customer.over_date = value
    }

    get startDate() {
        return this.customer.start_date === undefined ? null : this.customer.start_date
    }
    set startDate(value) {
        this.customer.start_date = value
    }

    get recordId() {
        return this.customer.record_id === undefined ? null : this.customer.record_id
    }
    set recordId(value) {
        this.customer.record_id = value
    }

    get createdDate() {
        return this.customer.created_date === undefined ?
            null :
            this.customer.created_date
    }

    set createdDate(value) {
        this.customer.created_date = value
    }

    get updatedDate() {
        return this.customer.updated_date === undefined ?
            null :
            this.customer.updated_date
    }

    set updatedDate(value) {
        this.customer.updated_date = value
    }
}
module.exports = Customer