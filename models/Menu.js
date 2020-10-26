import { Model, Collection } from 'js-abstract-model'
// import { MenuList1 } from './Menu1'

class MenuItem extends Model {
  constructor (data) {
    super(data, [
      { key: 'id' },
      { key: 'title' },
      { key: 'children' },
      // {
      //   key: 'children',
      //   relatedModel: MenuList1
      // },
      { key: 'url' },
      { key: 'megaMenu' },
      { key: 'style' }
    ])
    // this.children = new MenuList(this.children)
  }

  isMegaMenu () {
    if (this.children.length > 0 && this.megaMenu === true) {
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

  getMenuItem (menuItemId, list = this.list) {
    for (let i = 0; i < list.length; i++) {
      if (list[i].id === menuItemId) {
        return list[i]
      } else {
        const response = this.getMenuItem(menuItemId, list[i].children)
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
      this.calcItemsWithoutDepth(list[i].children)
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
        const response = this.getItemParent(id, list[i].children, list[i].id)
        if (response) {
          return response
        }
      }
    }
    return null
  }
}

export { MenuItem, MenuList }
