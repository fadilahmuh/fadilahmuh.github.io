<template>
    <section class="container sm:py-24 px-4 sm:px-8 max-w-screen-xl">
        <div
            class="relative flex flex-col justify-center items-center px-4 sm:px-8 pt-12"
        >
            <slot />
            <GridPattern
                :width="60"
                :height="60"
                :x="-1"
                :y="-1"
                class="[mask-image:radial-gradient(100%_100%_at_top_center,white,transparent)]"
            />
        </div>
    </section>
</template>

<script lang="ts" setup>
import GridPattern from "@/components/stunning/GridPattern.vue";
</script>

<style scoped></style>
