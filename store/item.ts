import { IProduct } from '~/types/product.d.ts';
import { productsMap } from '~/products/productsMap.json';

interface State {
  itemList: IProduct[];
}

export const state: () => State = () => ({
  itemList: []
});

export const getters = {
  findItems: (state:State) => Object.values(state.itemList),
  findItemsByName: (state: State) => (prodName: string) => Object.values(state.itemList).filter(a => a.name === prodName)
};

export const mutations = {};

export const actions = {};
