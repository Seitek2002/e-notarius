<template>
    <div>
        <div class="manual-block">
            <div @click="isActive = !isActive" :class="isActive ? 'manual-head active' : 'manual-head'">
                {{ item.title }}
                <MinusIcon v-if="isActive" />
                <PlusIcon v-else />
            </div>
            <div v-show="isActive" class="manual-wrapper">
                {{ item.text }}
            </div>
        </div>
    </div>
</template>

<script setup>
const isActive = ref(false)
import PlusIcon from '@/components/guest/Auth/Icons/PlusIcon.vue'
import MinusIcon from '@/components/guest/Auth/Icons/MinusIcon.vue'
import { ref } from "vue";
defineProps(["item"])

</script>

<style lang="scss">
.manual {
    &-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
        font-weight: 600;
        font-size: 16px;
        color: #24334B;
        padding: 15px;
        background: #fff;
        cursor: pointer;

        h2 {
            max-width: 850px;
        }

        &.active {
            background: #3F5984;
            color: #fff;
        }
    }

    &-wrapper {
        font-weight: 400;
        font-size: 14px;
        color: #24334B;
        background: #fff;
        line-height: 140%;
        padding: 20px 15px 25px;
    }
}
</style>