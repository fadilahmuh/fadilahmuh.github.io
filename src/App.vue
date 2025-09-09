<template>
    <main class="w-screen h-screen overflow-x-hidden">
        <HeroEmpty class="mx-auto">
            <div
                class="relative w-full flex flex-col sm:flex-row items-center sm:items-end"
            >
                <!-- Image Section -->
                <div class="relative sm:w-1/2 w-full">
                    <img
                        :src="imageSrc"
                        alt="Person"
                        class="max-h-[80vh] mx-auto relative z-[1]"
                    />
                    <div
                        class="absolute inset-x-0 bottom-0 h-1/2 w-full bg-gradient-to-t from-white dark:from-background z-[2]"
                    ></div>
                </div>

                <!-- Text Section -->
                <div
                    class="absolute sm:relative sm:w-1/2 w-full flex items-center justify-center bottom-10 sm:bottom-auto sm:my-auto z-[3]"
                >
                    <h1
                        class="text-4xl pb-4 text-center font-bold tracking-tight sm:text-6xl"
                    >
                        Hello, my name is
                        <span class="text-lime-500"> Fannie M Fadilah </span>
                        <br />
                        I'm
                        <TextReveal
                            :words="[
                                'Full Stack Developer',
                                'Frontend Developer',
                                'Backend Developer',
                                'QA Engineer',
                                'DevOps Engineer',
                            ]"
                            class="ml-2 text-neon"
                            :typeSpeed="75"
                        />
                    </h1>
                </div>
            </div>
        </HeroEmpty>
        <section class="md:px-28 px-4">
            <TechStack />
        </section>

        <section class="md:px-28 px-4">
            <div
                class="flex flex-wrap justify-center relative p-4 font-poppins"
            >
                <h1
                    class="font-poppins font-extrabold absolute top-0 left-0 text-7xl md:text-8xl -z-10 text-center w-full opacity-10"
                >
                    EXPERIENCE
                </h1>
                <h2 class="top-0 left-0 text-6xl text-center w-full">
                    My Experience
                </h2>
            </div>

            <Experience />
        </section>

        
        <section>
            <div
                class="flex flex-wrap justify-center relative p-4 font-poppins"
            >
                <h1
                    class="font-poppins font-extrabold absolute top-0 left-0 text-7xl md:text-8xl -z-10 text-center w-full opacity-10"
                >
                    Projects
                </h1>
                <h2 class="top-0 left-0 text-6xl text-center w-full">
                    My Projects
                </h2>
            </div>

            <div
                class="relative flex h-[100vh] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background py-20 md:shadow-xl"
            >
                <SkewedWrapper>
                    <template #content>
                        <div class="grid grid-cols-2 gap-2 p-20">
                            <Marquee
                                vertical
                                pauseOnHover
                                :repeat="4"
                                class="[--duration:10s]"
                            >
                                <template v-for="item in firstProjectRow">
                                    <figure
                                        class="relative w-100 cursor-pointer overflow-hidden rounded-xl border p-4 border-neutral-950/[.1] bg-neutral-950/[.01] hover:bg-neutral-950/[.05] dark:border-neutral-50/[.1] dark:bg-neutral-50/[.10] dark:hover:bg-neutral-50/[.15]"
                                    >
                                        <h1
                                            class="font-medium text-xl mb-3 text-center"
                                        >
                                            {{ item.name }}
                                        </h1>
                                        <div
                                            class="aspect-video rounded-[8px] relative overflow-hidden border-neutral-900/10 dark:border-white/10"
                                        >
                                            <img
                                                :src="item.img"
                                                class="my-0 rounded-lg group-hover/card:scale-[1.02] transition-all duration-200"
                                            />
                                        </div>
                                    </figure>
                                </template>
                            </Marquee>
                            <Marquee
                                reverse
                                vertical
                                pauseOnHover
                                :repeat="4"
                                class="[--duration:10s]"
                            >
                                <template v-for="item in firstProjectRow">
                                    <figure
                                        class="relative w-100 cursor-pointer overflow-hidden rounded-xl border p-4 border-neutral-950/[.1] bg-neutral-950/[.01] hover:bg-neutral-950/[.05] dark:border-neutral-50/[.1] dark:bg-neutral-50/[.10] dark:hover:bg-neutral-50/[.15]"
                                    >
                                        <h1
                                            class="font-medium text-xl mb-3 text-center"
                                        >
                                            {{ item.name }}
                                        </h1>
                                        <div
                                            class="aspect-video rounded-[8px] relative overflow-hidden border-neutral-900/10 dark:border-white/10"
                                        >
                                            <img
                                                :src="item.img"
                                                class="my-0 rounded-lg group-hover/card:scale-[1.02] transition-all duration-200"
                                            />
                                        </div>
                                    </figure>
                                </template>
                            </Marquee>
                        </div>
                    </template>
                </SkewedWrapper>
                <!-- <div
                    class="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"
                ></div>
                <div
                    class="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"
                ></div> -->
            </div>
        </section>
        <section></section>
    </main>
</template>

<script lang="ts" setup>
import ShimmerText from "@/components/stunning/ShimmerText.vue";
import Marquee from "@/components/stunning/Marquee.vue";
import SkewedWrapper from "@/components/stunning/SkewedWrapper.vue";
import TextReveal from "@/components/stunning/TextReveal.vue";
import HeroEmpty from "@/components/minimal/Hero-empty.vue";
import { Badge } from "@/components/ui/badge";
import TechStack from "@/components/TechStack.vue";
import Experience from "@/components/Experience.vue";

import imageSrc from "@/assets/bg_1.png";
// const imageSrc =
//     "https://raw.githubusercontent.com/fadilahmuh/fadilahmuh.github.io/refs/heads/master/images/bg_1.png";
const reviews = [
    {
        name: "Jack",
        username: "@jack",
        body: "I've never seen anything like this before. It's amazing. I love it.",
        img: "https://avatar.vercel.sh/jack",
    },
    {
        name: "Jill",
        username: "@jill",
        body: "I don't know what to say. I'm speechless. This is amazing.",
        img: "https://avatar.vercel.sh/jill",
    },
    {
        name: "John",
        username: "@john",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://avatar.vercel.sh/john",
    },
    {
        name: "Jane",
        username: "@jane",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://avatar.vercel.sh/jane",
    },
    {
        name: "Jenny",
        username: "@jenny",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://avatar.vercel.sh/jenny",
    },
    {
        name: "James",
        username: "@james",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://avatar.vercel.sh/james",
    },
];

const projects = [
    {
        name: "HongHandWood",
        img: "https://placehold.co/1920x1080.png",
    },
    {
        name: "Wardrobe MX",
        img: "https://placehold.co/1920x1080.png",
    },
    {
        name: "CoughVid-19",
        img: "https://placehold.co/1920x1080.png",
    },
    {
        name: "SIKEU",
        img: "https://placehold.co/1920x1080.png",
    },
    {
        name: "SIMKAMNAS",
        img: "https://placehold.co/1920x1080.png",
    },
    {
        name: "SIMBA",
        img: "https://placehold.co/1920x1080.png",
    },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const firstProjectRow = projects.slice(0, projects.length / 2);
const secondProjectRow = projects.slice(projects.length / 2);
</script>

<style scoped>
.text-behind {
    -webkit-text-stroke: 2px white;
}
</style>
