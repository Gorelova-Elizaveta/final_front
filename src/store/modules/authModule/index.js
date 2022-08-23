import { actions } from './actions'
import { getters } from './getters'
import { mutations } from './mutations'
import { state } from './state'

const userAuth = {
  state,
  mutations,
  getters,
  actions
}
export default userAuth