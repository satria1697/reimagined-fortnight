<template>
  <div class="fixed w-screen h-screen bg-gray-200 bg-opacity-40 top-0 left-0">
    <div class="grid place-items-center h-full w-full">
      <div class="border-black border rounded-md h-48 w-48 bg-white">
        <slot />
      </div>
    </div>
  </div>
</template>