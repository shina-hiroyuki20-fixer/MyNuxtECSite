import { IProduct } from '~/types/product.d.ts';
import { productsMap } from '~/products/productsMap.json';

interface State {
  itemList: IProduct[];
}

export const state: () => State = () => ({
  itemList: Object.values(productsMap)
});

export const getters = {
  findItems: (state:State): IProduct[] => Object.values(state.itemList),
  findItemsByName: (state: State) => (name: string) => Object.values(state.itemList).filter(a => a.name === name)
};

export const mutations = {};

export const actions = {};
