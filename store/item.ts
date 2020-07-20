import { productsMap } from '~/products/productsMap.json';

export const state = () => ({
  itemList: productsMap
});

export const getters = {
  findItemsByName: state => (prodName: string) => {
    return Object.values(state.itemList).filter(a => a.prodName === prodName);
  }
};
