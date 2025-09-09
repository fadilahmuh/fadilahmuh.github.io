<template>
    <StickyStackBlock :maxHeight="100">
        <template v-slot:card>
            <div class="h-full rounded-2xl flex bg-background">
                <div class="w-1/2 p-16 flex gap-2 justify-center flex-col">
                    <Icon name="ri:magic-line" class="w-8 h-8" />

                    <h1 class="font-medium text-4xl text-center">
                        Full-Stack Web Developer
                    </h1>
                    <h2 class="font-light text-center text-2xl">Freelance</h2>
                </div>
                <div class="w-1/2 p-16 flex gap-2 justify-center flex-col">
                    <Icon name="ri:magic-line" class="w-8 h-8" />

                    <p
                        class="line-clamp-5 text-secondary-foreground text-center text-xl"
                    >
                        Consulted with clients to design custom web solutions.
                        Built CMS applications using Laravel, integrated secure
                        payment systems, and developed RESTful APIs. Optimized
                        performance, deployed apps on cloud services, and
                        ensured smooth functionality.
                    </p>
                </div>
            </div>
        </template>
    </StickyStackBlock>
    <StickyStackBlock :maxHeight="100">
        <template v-slot:card>
            <div class="h-full rounded-2xl flex bg-background">
                <div class="w-1/2 p-16 flex gap-2 justify-center flex-col">
                    <Icon name="ri:magic-line" class="w-8 h-8" />
                    <p
                        class="line-clamp-5 text-secondary-foreground text-center text-xl"
                    >
                        Performed manual and automated testing to ensure
                        software quality. Identified, analyzed, and documented
                        defects while maintaining test cases based on functional
                        specifications.
                    </p>
                </div>
                <div class="w-1/2 p-16 flex gap-2 justify-center flex-col">
                    <Icon name="ri:magic-line" class="w-8 h-8" />
                    <h1 class="font-medium text-4xl text-center">
                        Quality Assurance
                    </h1>
                    <h2 class="font-light text-center text-2xl">
                        PT. Ihsan Solusi Informatika (2024)
                    </h2>
                </div>
            </div>
        </template>
    </StickyStackBlock>
    <StickyStackBlock :maxHeight="100">
        <template v-slot:card>
            <div class="h-full rounded-2xl flex bg-background">
                <div class="w-1/2 p-16 flex gap-2 justify-center flex-col">
                    <Icon name="ri:magic-line" class="w-8 h-8" />

                    <h1 class="font-medium text-4xl text-center">
                        Full-Stack Web Developer & DevOps Engineer
                    </h1>
                    <h2 class="font-light text-center text-2xl">
                        In House Developer National Institute of Technology
                        (2022-present)
                    </h2>
                </div>
                <div class="w-1/2 p-16 flex gap-2 justify-center flex-col">
                    <Icon name="ri:magic-line" class="w-8 h-8" />

                    <p
                        class="line-clamp-5 text-secondary-foreground text-center text-xl"
                    >
                        Handles the full lifecycle of web projects—from
                        architecture and development to deployment and
                        infrastructure management—ensuring reliability and
                        efficiency across platforms.
                    </p>
                </div>
            </div>
        </template>
    </StickyStackBlock>
</template>

<script lang="ts" setup>
import StickyStackBlock from "@/components/stunning/StickyStackBlock.vue";
</script>
