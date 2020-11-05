import { Model, Collection } from 'js-abstract-model'
// import { MenuList1 } from './Menu1'

class MenuItem extends Model {
  constructor (data) {
    super(data, [
      { key: 'id' },
      {
        key: 'children',
        relatedModel: MenuList
      },
      { key: 'data' },
      { key: 'type' },
      { key: 'style' }
    ])
    // this.children = new MenuList(this.children)
  }

  isMegaMenu () {
    if (this.children.list.length > 0 && this.megaMenu === true) {
      return true
    } else {
      return false
    }
  }
}

class MenuList extends Collection {
  constructor (data) {
    super(data)
    this.itemsWithoutDepth = []
  }

  model () {
    return MenuItem
  }

  // Todo: fake data

  getLastId (list = this.list, biggestId = 0) {
    for (let i = 0; i < list.length; i++) {
      if (list[i].id > biggestId) {
        biggestId = list[i].id
      }
      const childBiggestId = this.getLastId(list[i].children.list, biggestId)
      if (childBiggestId > biggestId) {
        biggestId = childBiggestId
      }
    }
    return biggestId
  }

  // ToDo: clean the f code

  getMenuItem (menuItemId, list = this.list) {
    for (let i = 0; i < list.length; i++) {
      if (list[i].id === menuItemId) {
        return list[i]
      } else {
        const response = this.getMenuItem(menuItemId, list[i].children.list)
        if (response) {
          return response
        }
      }
    }
    return null
  }

  calcItemsWithoutDepth (list = this.list) {
    for (let i = 0; i < list.length; i++) {
      this.itemsWithoutDepth.push(list[i])
      this.calcItemsWithoutDepth(list[i].children.list)
    }
  }

  getItemsWithoutDepth () {
    if (this.itemsWithoutDepth.length !== 0) {
      return this.itemsWithoutDepth
    }
    this.calcItemsWithoutDepth()
    this.itemsWithoutDepth.reverse()
    return this.itemsWithoutDepth
  }

  getItemParent (id, list = this.list, parentId = 0) {
    for (let i = 0; i < list.length; i++) {
      if (list[i].id === id) {
        return this.getMenuItem(parentId)
      } else {
        const response = this.getItemParent(id, list[i].children.list, list[i].id)
        if (response) {
          return response
        }
      }
    }
    return null
  }
}

class Menu extends Collection {
  constructor (data) {
    super(data, [
      { key: 'id' },
      { key: 'position' },
      { key: 'title' },
      {
        key: 'children',
        relatedModel: MenuList
      }
    ])
  }
}

class MenuCollection extends Collection {
  model () {
    return Menu
  }
}

export { MenuItem, MenuList, Menu, MenuCollection }
