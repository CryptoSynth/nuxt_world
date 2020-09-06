import EventService from '@/services/EventService'

export const state = () => ({
  events: [],
  event: {},
})

export const mutations = {
  SET_EVENTS: (state, events) => (state.events = events),
  SET_EVENT: (state, event) => (state.event = event),
}

export const actions = {
  async fetchEvents({ commit }) {
    const events = await EventService.getEvents()
    commit('SET_EVENTS', events.data)
  },

  async fetchEvent({ commit }, id) {
    const event = await EventService.getEvent(id)
    commit('SET_EVENT', event.data)
  },
}
