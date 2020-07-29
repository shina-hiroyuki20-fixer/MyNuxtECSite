import { productsMap } from '~/products/productsMap.json';

export const state = () => ({
  itemList: productsMap
});

type IRootState = ReturnType<typeof state>;

export const getters = {
  findItemsByName: (state: IRootState) => (prodName: string) => {
    return Object.values(state.itemList).filter(a => a.prodName === prodName);
  }
};
