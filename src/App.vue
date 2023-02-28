<script setup lang="ts">
import {ref} from "vue";
import MiButton from "./components/MiButton.vue";
import MiInput from "./components/MiInput.vue";
import MiModal from "./components/MiModal.vue";

const text = ref('');
const showModal = ref(false);
</script>

<template>
  <div class="flex items-center justify-center h-screen w-screen">
    <div class="flex flex-col border-4 w-52 rounded-md">
      <mi-modal v-if="showModal" >
        <div class="flex flex-col">
          <span data-cy="textModal">{{text}}</span>
          <mi-button data-cy="miButtonModal" class="items-end" title="Close" @on-click="()=> showModal = false" />
        </div>
      </mi-modal>
      <mi-input v-model="text" />
      <mi-button title="Submit" @on-click="() => showModal = true" />
    </div>
  </div>
</template>

