import { Model } from 'js-abstract-model'

class Gender extends Model {
  constructor (data) {
    super(data, [
      { key: 'id' },
      { key: 'name' }
    ])
  }

  allAvailableItems () {
    return [
      {
        id: 1,
        name: 'آقا',
        altNames: [
          'اقا',
          'مذکر',
          'پسر',
          'مرد',
          '1'
        ]
      },
      {
        id: 2,
        name: 'خانم',
        altNames: [
          'مونث',
          'دختر',
          'زن',
          '2'
        ]
      }
    ]
  }

  convertToValidValue (buffer) {
    if (typeof buffer !== 'undefined' && buffer) {
      return this.suggestedVal()
    } else {
      this.id = this.suggestedVal().id
      this.name = this.suggestedVal().name
    }
  }

  suggestedVal () {
    for (let i = 0; typeof this.allAvailableItems()[i] !== 'undefined'; i++) {
      const availableItem = this.allAvailableItems()[i]
      if (this.name !== null && this.name.includes(availableItem.name)) {
        return availableItem
      } else {
        for (let j = 0; typeof availableItem.altNames[j] !== 'undefined'; j++) {
          const altName = availableItem.altNames[j]
          if (this.name !== null && this.name.includes(altName)) {
            return availableItem
          }
        }
      }
    }

    return new Gender()
  }

  canBeValid () {
    return !!this.suggestedVal()
  }

  isValid () {
    for (let i = 0; typeof this.allAvailableItems()[i] !== 'undefined'; i++) {
      if (this.name === this.allAvailableItems()[i].name) {
        return true
      }
    }

    return false
  }
}
export default Gender
