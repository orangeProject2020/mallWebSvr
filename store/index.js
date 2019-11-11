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
    let categoryId = data.category_id || 0
    let limit = data.limit || 10
    if (!state.goodsData['category_' + categoryId]) {
      state.goodsData['category_' + categoryId] = {
        rows: [],
        count: 0,
        page: 1
      }
    }

    data.rows.forEach(item => {
      state.goodsData['category_' + categoryId].rows.push(item)
    })
    state.goodsData['category_' + categoryId].count = data.count
    if (limit > 0 && data.rows.length == limit) {
      state.goodsData['category_' + categoryId].page = data.page + 1
    }


  }
}

export const actions = {

}
