import { Model, Collection } from 'js-abstract-model'
import Gender from './Gender'

class User extends Model {
  constructor (user) {
    super(user, [
      {
        key: 'baseRoute',
        default: 'https://ads.alaatv.com/getAd?UUID=35b39d4b-517b-44bc-85c4-44f93242836f'
      },
      { key: 'id' },
      {
        key: 'first_name',
        value (itemVal, inputData) {
          if (typeof inputData.first_name !== 'undefined' && inputData.first_name !== null) {
            return inputData.first_name
          } else if (typeof inputData.firstName !== 'undefined' && inputData.firstName !== null) {
            return inputData.firstName
          } else {
            return null
          }
        }
      },
      {
        key: 'last_name',
        value (itemVal, inputData) {
          if (typeof inputData.last_name !== 'undefined' && inputData.last_name !== null) {
            return inputData.last_name
          } else if (typeof inputData.lastName !== 'undefined' && inputData.lastName !== null) {
            return inputData.lastName
          } else {
            return null
          }
        }
      },
      { key: 'full_name' },
      { key: 'mobile' },
      { key: 'phone' },
      {
        key: 'national_code',
        value (itemVal, inputData) {
          if (typeof inputData.national_code !== 'undefined' && inputData.national_code !== null) {
            return inputData.national_code
          } else if (typeof inputData.nationalCode !== 'undefined' && inputData.nationalCode !== null) {
            return inputData.nationalCode
          } else {
            return null
          }
        }
      },
      { key: 'email' },
      { key: 'province' },
      { key: 'city' },
      { key: 'school' },
      { key: 'address' },
      { key: 'role' },
      { key: 'photo' },
      { key: 'birthdate' },
      { key: 'postalCode' },
      { key: 'completion', default: 0 },
      { key: 'created_at' },
      { key: 'updated_at' },
      {
        key: 'gender',
        relatedModel: Gender
      }
    ])

    const that = this
    this.apiResource = {
      fields: [
        {
          key: 'url_key',
          value () {
            return 'user'
          }
        },
        { key: 'id' },
        {
          key: 'firstName',
          value () {
            return that.first_name
          }
        },
        {
          key: 'lastName',
          value () {
            return that.last_name
          }
        },
        { key: 'email' },
        { key: 'province' },
        { key: 'city' },
        { key: 'school' },
        { key: 'address' },
        { key: 'birthdate' },
        {
          key: 'gender_id',
          value () {
            return that.gender.id
          }
        }
      ]
    }

    this.setFullName()
  }

  setFullName () {
    if (this.first_name !== null && this.last_name !== null) {
      this.full_name = this.first_name + ' ' + this.last_name
    }
  }

  convertToValidValue (buffer) {
    const validatedKeys = []
    if (!this.major.isValid()) {
      validatedKeys.push('major')
    }
    if (!this.gender.isValid()) {
      validatedKeys.push('gender')
    }
    if (!this.hasValidNationalCode()) {
      validatedKeys.push('nationalCode')
    }
    if (!this.hasValidMobile()) {
      validatedKeys.push('mobile')
    }

    if (typeof buffer !== 'undefined' && buffer) {
      this.buffer()
      this.buffer([
        {
          key: 'major',
          value: this.major.convertToValidValue(true)
        },
        {
          key: 'educational_base',
          value: this.educational_base.convertToValidValue(true)
        },
        {
          key: 'grade',
          value: this.grade.convertToValidValue(true)
        },
        {
          key: 'gender',
          value: this.gender.convertToValidValue(true)
        },
        {
          key: 'nationalCode',
          value: this.convertNationalCodeToValidValue(true)
        },
        {
          key: 'mobile',
          value: this.convertMobileToValidValue(true)
        }
      ])
    } else {
      this.major.convertToValidValue()
      this.educational_base.convertToValidValue()
      this.grade.convertToValidValue()
      this.gender.convertToValidValue()
      this.convertNationalCodeToValidValue()
      this.convertMobileToValidValue()
    }

    return validatedKeys
  }

  hasValidData (...data) {
    for (let i = 0; typeof data[i] !== 'undefined'; i++) {
      switch (data[i]) {
        case 'major':
          if (this.hasValidMajor()) {
            return false
          }
          break
        case 'grade':
          if (this.hasValidGrade()) {
            return false
          }
          break
        case 'educational_base':
          if (this.hasValidEducationalBase()) {
            return false
          }
          break
        case 'gender':
          if (this.hasValidGender()) {
            return false
          }
          break
        case 'mobile':
          if (this.hasValidMobile()) {
            return false
          }
          break
        case 'postalCode':
          if (this.hasValidPostalCode()) {
            return false
          }
          break
        case 'nationalCode':
          if (this.hasValidNationalCode()) {
            return false
          }
          break
        default:
          return false
      }
    }
  }

  hasValidMajor () {
    return this.major.isValid()
  }

  hasValidGrade () {
    return this.grade.isValid()
  }

  hasValidEducationalBase () {
    return this.educational_base.isValid()
  }

  hasValidGender () {
    return this.gender.isValid()
  }

  hasValidMobile (input) {
    let mobile = this.mobile
    if (typeof input !== 'undefined') {
      mobile = input
    }
    const patt = /^09\d{9}$/g
    return patt.test(mobile)
  }

  hasValidPostalCode (input) {
    let postalCode = this.postalCode
    if (typeof input !== 'undefined') {
      postalCode = input
    }

    return (!isNaN(postalCode) && postalCode !== null && postalCode.length === 10)
  }

  hasValidNationalCode (input) {
    let nationalCode = this.nationalCode
    if (typeof input !== 'undefined') {
      nationalCode = input
    }
    if (!/^\d{10}$/.test(nationalCode)) { return false }

    const check = parseInt(nationalCode[9])
    let sum = 0
    for (let i = 0; i < 9; ++i) {
      sum += parseInt(nationalCode[i]) * (10 - i)
    }
    sum %= 11

    return (sum < 2 && check === sum) || (sum >= 2 && check + sum === 11)
  }

  convertMobileToValidValue (buffer) {
    let validData = this.mobile
    if (!this.hasValidMobile()) {
      if (this.mobile !== null && this.mobile.trim().length < 11) {
        validData = this.mobile.trim().padStart(11, '0')
        if (!this.hasValidMobile(validData)) {
          validData = null
        }
      } else {
        validData = null
      }
    }

    if (typeof buffer !== 'undefined' && buffer) {
      return validData
    } else {
      this.mobile = validData
    }
  }

  convertNationalCodeToValidValue (buffer) {
    let validData = this.nationalCode
    if (!this.hasValidNationalCode()) {
      if (this.nationalCode !== null && this.nationalCode.trim().length < 10) {
        validData = this.nationalCode.trim().padStart(10, '0')
        if (!this.hasValidNationalCode(validData)) {
          validData = null
        }
      } else {
        validData = null
      }
    }

    if (typeof buffer !== 'undefined' && buffer) {
      return validData
    } else {
      this.nationalCode = validData
    }
  }
}

class UserList extends Collection {
  model () {
    return User
  }
}

export { User, UserList }
