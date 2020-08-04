import { IProduct } from '~/types/product.d.ts';
import { productsMap } from '~/products/productsMap.json';

interface State {
  itemList: IProduct[];
}

export const state: () => State = () => ({
  itemList: []
});

type IRootState = ReturnType<typeof state>;

export const mutations = {};

export const actions = {};

export const getters = {
  findItemsByName: (state: IRootState) => (prodName: string) => {
    return Object.values(state.itemList).filter(a => a.name === prodName);
  }
};
