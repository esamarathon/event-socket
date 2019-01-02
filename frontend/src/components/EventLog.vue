<template>
  <div class="layout-row">
    <div class="layout-column">
      <div class="layout-row event-type" v-for="messageType in messages" :key="messageType.id">
        <div class="event-name">{{messageType.$meta.name}}</div>
        <div class="event-run">&rarr;</div>
      </div>
    </div>
    <div class="layout-column">

    </div>
  </div>
</template>

<script>
import { getMessageTypes } from '../api.js';

export default {
  name: 'EventLog',
  data: () => ({
    messages: null
  }),
  async created() {
    this.messages = await getMessageTypes();
    console.log("Message types:", this.messages);
  },
  methods: {
  },
};
</script>
