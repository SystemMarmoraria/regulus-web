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
        <v-divider inset></v-divider>
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
            <v-divider inset></v-divider>
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
            <v-divider inset></v-divider>
            <v-row>
                <v-col><v-card class="mx-auto" color="secondary" elevation="10" width="360">
                        <div class="d-flex justify-between">
                            <v-card-title class="flex-grow-1 flex-column align-start">
                                <div class="text-h5">
                                    Title -
                                </div>
                                <div class="text-h6 font-weight-thin">Name</div>
                                <div class="text-h6 font-weight-thin">Rating</div>
                            </v-card-title>
                        </div>
                        <v-divider></v-divider>
                        <v-rating v-model="rating" active-color="yellow-accent-4" color="white" size="18"
                            half-increments hover></v-rating>
                    </v-card></v-col>
                <v-col></v-col>
                <v-col></v-col>
                <v-col></v-col>
                <v-col></v-col>
                <v-col></v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {

}
</script>

<style></style>
