<template>
  <div>
    <h1>Events</h1>

    <EventCard
      v-for="(event, index) in events"
      :key="index"
      :event="event"
      :data-index="index"
    />
  </div>
</template>

<script>
import EventCard from '@/components/EventCard'
import { mapState } from 'vuex'

export default {
  head() {
    return {
      title: 'Event Listing',
    }
  },

  components: {
    EventCard,
  },

  async fetch({ store, error }) {
    try {
      await store.dispatch('events/fetchEvents')
    } catch {
      error({
        statusCode: 503,
        message: 'Unable to load page. Please try again.',
      })
    }
  },

  computed: {
    ...mapState({
      events: (state) => state.events.events,
    }),
  },
}
</script>

