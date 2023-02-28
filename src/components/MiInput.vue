<script setup lang="ts">
defineProps({
  isDisabled: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: String,
    default: ""
  }
})

defineEmits(['update:modelValue'])
</script>

<template>
  <input @input="(value) => $emit('update:modelValue', value.target.value)" :value="modelValue" :disabled="isDisabled" class="border py-1.5 px-2.5 rounded-md">
</template>