<script setup lang="ts">
import {PropType} from 'vue'
type ButtonType = 'primary' | 'secondary'

const props = defineProps(
    {
      title: {
        type: String,
        default: "",
      },
      isDisabled: {
        type: Boolean,
        default: false
      },
      buttonType: {
        type: String as PropType<ButtonType>,
        default: 'primary',
      },
      dataCy: {
        type: String,
        default: "miButton"
      }
    }
)

defineEmits(['on-click'])

const buttonClass = (): String => {
  let bClass = "border rounded-md py-1.5 px-2.5 cursor-pointer disabled:bg-gray-700"
  if (props.buttonType == "primary") {
    bClass += " bg-black text-white";
  }
  if (props.buttonType == "secondary") {
    bClass += " bg-red-800 text-black";
  }
  return bClass;
}
</script>

<template>
  <button
    :class="buttonClass()"
    :disabled="isDisabled"
    @click="$emit('on-click')"
    :data-cy="dataCy"
  >
    <span>{{ title }}</span>
  </button>
</template>