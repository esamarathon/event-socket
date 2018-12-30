<template>
  <div class="layout-row">
    <div class="layout-column">
      <div class="layout-row event-type" v-for="eventType in eventTypes" :key="eventType.id">
        <div class="event-name"></div>
        <div class="event-run"></div>
      </div>
    </div>
    <div class="layout-column">

    </div>
  </div>
</template>

<script>
import doAThing from 'shared/basics';

export default {
  name: 'HelloWorld',
  data: () => ({
    messages: [{
      name: "UserUpdate",
      proto: "message UserUpdate { required string id = 0; optional string name = 1; }"
    }]
  }),
  methods: {
    doAThing() {

    },
  },
};
</script>
