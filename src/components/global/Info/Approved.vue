<template>
  <div class="approved">
    <div
      v-if="isActive"
      class="approved__active"
    >
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="32"
          cy="32"
          r="32"
          fill="#1BAA75"
        />
        <path
          d="M25 32L30 37L40 27"
          stroke="#F6F6F6"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <div
      v-else
      class="approved__num"
    >
      {{ num }}
    </div>
  </div>
</template>

<script setup>
defineProps(['isActive', 'num'])
</script>

<style lang="scss">
.approved {
  position: absolute;
  left: -35px;
  top: 0;

  &__num {
    border: 2px solid #1baa75;
    width: 64px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 18px;
    color: #1baa75;
    border-radius: 100%;
    background: #fff;
  }
}
</style>
