<template>
    <div>
        <v-parallax class="gradient" src="/images/home.png" style="height: 40em;margin-bottom: 1.5em;">
            <div class="d-flex flex-column fill-height justify-center align-center text-indigo-accent-4">
                <h1 class="text-h2 font-weight-thin mb-4">
                    Qualidade e excelência em cada detalhe.
                </h1>
            </div>
        </v-parallax>
        <h2>Uma empresa voltada ao consumidor</h2>
        <v-container fluid style="margin-top: 15px;">
            <v-row style="margin-bottom: 1.5em;"><v-col>
                    <v-card variant="tonal" style="padding: 15px;" class="text-h6 font-weight-regular"> A <strong
                            class="text-secondary font-weight-bold">Sirius
                            Marmoraria</strong> se destaca por sua missão de transformar a experiência da obra com
                        amor e
                        excelência. Nossa prioridade é oferecer atendimento perfeito desde o início até a entrega
                        final.
                        Valores
                        como excelência em atendimento, acabamento impecável e comprometimento com seu projeto são
                        fundamentais para
                        nós. <strong class="text-secondary font-weight-bold">Conte conosco para tornar seu projeto em
                            algo
                            extraordinário.</strong>
                        <v-container fluid>
                            <v-row>
                                <v-col>
                                    <v-card variant="plain" class="rounded-lg">
                                        <v-img style="margin: 1em" class="bg-primary"
                                            src="images/icon-client-2.png"></v-img>
                                    </v-card>
                                </v-col>
                                <v-col>
                                    <v-card variant="plain" class="rounded-lg">
                                        <v-img style="margin: 1em" class="bg-primary"
                                            src="images/icon-marmore-2.png"></v-img>
                                    </v-card>
                                </v-col>
                                <v-col>
                                    <v-card variant="plain" class="rounded-lg">
                                        <v-img style="margin: 1em" class="bg-primary"
                                            src="images/icon-quality-2.png"></v-img>
                                    </v-card>

                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card>
                    <v-container>
                        <v-btn size="large" color="green" class="rounded-lg" append-icon="mdi-whatsapp">Venha fazer
                            negócios conosco</v-btn>
                    </v-container>
                </v-col>
                <v-col>
                    <v-card variant="plain">
                        <v-img class="rounded-lg" src="images/pia.jpeg"></v-img>
                    </v-card>
                </v-col>
            </v-row>
            <h2>Nossos principais produtos</h2>
            <v-row style="margin-top: 15px; margin-bottom: 1.5em">
                <v-carousel class="rounded-lg" style="margin: 1em" show-arrows="hover" cycle>
                    <v-carousel-item color="secondary" v-for="i in 4" :key="i">
                        <div class="d-flex fill-height justify-center align-center">
                            <div class="text-h2">
                                Produto {{ i }}
                            </div>
                        </div>
                    </v-carousel-item>
                </v-carousel>
            </v-row>
            <h2>O que dizem sobre nós</h2>
            <v-card variant="tonal" class="mt-4">
            <v-row class="mx-4">
                <v-col cols="2" v-for="(review, index) in reviews" :key="index"><v-card class="my-4">
                        <v-card-title>
                            <v-avatar class="mr-3">
                                <img :src="review.avatar" alt="Avatar">
                            </v-avatar>
                            <span>{{ review.username }}</span>
                        </v-card-title>
                        <v-divider class="mb-4"></v-divider>
                        <v-card-subtitle class="text-body-1">
                            {{ review.comment }}
                        </v-card-subtitle>
                        <v-card-text><v-rating v-model="review.rating" background-color="transparent" color="amber"
                                readonly></v-rating></v-card-text>
                        <v-card-actions class="d-flex justify-center">
                            <v-icon color="primary">mdi-thumb-up-outline</v-icon>
                            <span class="mx-2">{{ " " + review.likes }}</span>
                            <v-icon color="error">mdi-thumb-down-outline</v-icon>
                            <span>{{ " " + review.dislikes }}</span>
                        </v-card-actions>
                    </v-card></v-col>
            </v-row>
            </v-card>
        </v-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            reviews: [
                {
                    username: 'John Doe',
                    avatar: 'https://via.placeholder.com/100',
                    rating: 4,
                    comment: 'Ótimo produto, estou muito satisfeito!',
                    likes: 10,
                    dislikes: 2
                },
                {
                    username: 'Jane Smith',
                    avatar: 'https://via.placeholder.com/100',
                    rating: 5,
                    comment: 'Adorei! Recomendo a todos.',
                    likes: 15,
                    dislikes: 0
                },
                {
                    username: 'Michael Johnson',
                    avatar: 'https://via.placeholder.com/100',
                    rating: 3,
                    comment: 'É ok, poderia ser melhor.',
                    likes: 5,
                    dislikes: 3
                },
                {
                    username: 'Michael Johnson',
                    avatar: 'https://via.placeholder.com/100',
                    rating: 3,
                    comment: 'É ok, poderia ser melhor.',
                    likes: 5,
                    dislikes: 3
                },
                {
                    username: 'Michael Johnson',
                    avatar: 'https://via.placeholder.com/100',
                    rating: 3,
                    comment: 'É ok, poderia ser melhor.',
                    likes: 5,
                    dislikes: 3
                },
                {
                    username: 'Michael Johnson',
                    avatar: 'https://via.placeholder.com/100',
                    rating: 3,
                    comment: 'É ok, poderia ser melhor.',
                    likes: 5,
                    dislikes: 3
                }
            ]
        }
    }
}
</script>

<style></style>
