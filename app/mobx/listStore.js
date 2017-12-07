import { observable } from 'mobx';

let index = 0;

class ObservableListStore {
  @observable list = [];

  addListItem = (item) => {
    this.list.push({
      name: item,
      items: [],
      index,
    });
    index++;
  };
  
  removeListItem = (item) => {
    list.splice(item.index, 1)
  };

  addItem = (item, name) => {
    this.list.forEach((l) => {
      l.items.push(name)
    });
  };
};

const observableListStore = new ObservableListStore();
export default observableListStore;
