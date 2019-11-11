import axios from './../server/axios';

export const state = () => ({
  isApp: false,
  token: '',
  categorys: [],
  categoryActive: 0,
  goodsData: {}
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
  }
}

export const actions = {

}
