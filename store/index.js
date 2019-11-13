import axios from './../server/axios';

export const state = () => ({
  isApp: false,
  token: '',
  categorys: [],
  categoryActive: 0,
  goodsData: {},
  orderDatas: []
})

export const mutations = {
  isAppSet(state, data) {
    state.isApp = data
  },
  categorysSet(state, data) {
    state.categorys = data
  },
  categoryActiveSet(state, data) {
    state.categoryActive = data
  },
  goodsDataSet(state, data = {}) {
    state.goodsData = data
  },
  orderDatasSet(state, data) {
    state.orderDatas = data
  }
}

export const actions = {

}
