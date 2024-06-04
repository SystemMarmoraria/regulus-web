<template>
    <div>
        <v-app-bar color="secondary" :scroll-threshold="scroll" :elevation="10">
            <img src="images/logo-sirius.png" alt="sirius logo" width="10%">
            <v-spacer></v-spacer>
            <v-tabs class="text-primary" v-model="tab" density="comfortable">
                <v-tab :hide-slider="true" value="home">
                    <h4>Home</h4>
                </v-tab>
                <v-tab :hide-slider="true" value="about">
                    <h4>Sobre nós</h4>
                </v-tab>
                <v-tab :hide-slider="true" value="portfolio">
                    <h4>Produtos</h4>
                </v-tab>
                <v-tab :hide-slider="true" value="contact">
                    <h4>Contato</h4>
                </v-tab>
            </v-tabs>
        </v-app-bar>
        <v-parallax class="gradient" src="/images/home.png" style="height: 40em;margin-bottom: 1.5em;">
            <div class="d-flex flex-column fill-height justify-center align-center text-indigo-accent-1" ref="banner">
                <h1 class="text-h2 font-weight-thin mb-4">
                    Qualidade e excelência em cada detalhe.
                </h1>
            </div>
        </v-parallax>

        <h2>Uma empresa voltada ao consumidor</h2>

        <v-container fluid style="margin-top: 15px;">
            <v-row style="margin-bottom: 1.5em;">
                <v-col>
                    <v-card variant="tonal" style="padding: 15px;" class="text-h6 font-weight-regular" ref="mission">
                        A <strong class="text-secondary font-weight-bold">Sirius Marmoraria</strong> se destaca por sua
                        missão de transformar a experiência da obra com amor e excelência. Nossa prioridade é oferecer
                        atendimento perfeito desde o início até a entrega final. Valores como excelência em atendimento,
                        acabamento impecável e comprometimento com seu projeto são fundamentais para nós. <strong
                            class="text-secondary font-weight-bold">Conte conosco para tornar seu projeto em algo
                            extraordinário.</strong>
                        <v-container fluid>
                            <v-row>
                                <v-col>
                                    <v-card variant="plain" class="rounded-lg" ref="icon1">
                                        <v-img style="margin: 1em" class="bg-primary"
                                            src="images/icon-client-2.png"></v-img>
                                    </v-card>
                                </v-col>
                                <v-col>
                                    <v-card variant="plain" class="rounded-lg" ref="icon2">
                                        <v-img style="margin: 1em" class="bg-primary"
                                            src="images/icon-marmore-2.png"></v-img>
                                    </v-card>
                                </v-col>
                                <v-col>
                                    <v-card variant="plain" class="rounded-lg" ref="icon3">
                                        <v-img style="margin: 1em" class="bg-primary"
                                            src="images/icon-quality-2.png"></v-img>
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card>
                    <v-container>
                        <v-btn size="large" color="green" class="rounded-lg" append-icon="mdi-whatsapp"
                            ref="button">Venha fazer negócios conosco</v-btn>
                    </v-container>
                </v-col>
                <v-col>
                    <v-card variant="plain">
                        <v-img class="rounded-lg" src="images/pia.jpeg" ref="image"></v-img>
                    </v-card>
                </v-col>
            </v-row>

            <h2>Nossos principais produtos</h2>
            <v-row style="margin-top: 15px; margin-bottom: 1.5em" ref="products">
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

            <h2>Depoimento dos clientes</h2>
            <v-card variant="tonal" class="mt-4" ref="testimonials">
                <v-row class="mx-4">
                    <v-col cols="2" v-for="(review, index) in reviews" :key="index" class="cursor-pointer">
                        <v-dialog v-model="dialog">
                            <v-card class="my-4">
                            <v-card-title>
                                <v-avatar class="mr-3">
                                    <v-icon>mdi-account-circle</v-icon>
                                </v-avatar>
                                <span>{{ review.username }}</span>
                                <v-spacer></v-spacer>
                                <v-icon>mdi-close-circle-outline</v-icon>
                            </v-card-title>
                            <v-divider class="mb-4"></v-divider>
                            <v-card-subtitle class="text-body-1">
                                {{ review.comment }}
                            </v-card-subtitle>
                            <v-card-text>
                                <v-rating v-model="review.rating" background-color="transparent" color="amber"
                                    readonly></v-rating>
                            </v-card-text>
                            <v-card-actions class="d-flex justify-center">
                                <v-icon color="primary">mdi-thumb-up-outline</v-icon>
                                <span class="mx-2">{{ " " + review.likes }}</span>
                                <v-icon color="error">mdi-thumb-down-outline</v-icon>
                                <span>{{ " " + review.dislikes }}</span>
                            </v-card-actions>
                        </v-card>
                        </v-dialog>
                        <v-card class="my-4" @click="dialog = true">
                            <v-card-title>
                                <v-avatar class="mr-3">
                                    <v-icon>mdi-account-circle</v-icon>
                                </v-avatar>
                                <span>{{ review.username }}</span>
                            </v-card-title>
                            <v-divider class="mb-4"></v-divider>
                            <v-card-subtitle class="text-body-1">
                                {{ review.comment }}
                            </v-card-subtitle>
                            <v-card-text>
                                <v-rating v-model="review.rating" background-color="transparent" color="amber"
                                    readonly></v-rating>
                            </v-card-text>
                            <v-card-actions class="d-flex justify-center">
                                <v-icon color="primary">mdi-thumb-up-outline</v-icon>
                                <span class="mx-2">{{ " " + review.likes }}</span>
                                <v-icon color="error">mdi-thumb-down-outline</v-icon>
                                <span>{{ " " + review.dislikes }}</span>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-card>
        </v-container>
        <v-footer app color="secondary">
            <v-row>
                <v-col>
                    <h4>Sirius Marmoraria</h4>
                    <p><v-icon size="x-small" variant="text" icon="mdi-whatsapp"></v-icon>{{ " (19) 97600-4302" }}</p>
                    <p><v-icon size="x-small" variant="text" icon="mdi-phone"></v-icon>{{ " (19) 2519-3131" }}</p>
                </v-col>    
                <v-col>
                    <h4>Endereço</h4>

                    <p><v-icon size="small" icon="mdi-map-marker-outline"></v-icon>Avenida Benedito de Campos, 811 -
                        Jardim do Trevo, Campinas - SP
                        CEP:13.030-100</p>
                </v-col>
                <v-col>
                    <h4>Email</h4>
                    <p><v-icon size="small" icon="mdi-email-outline"></v-icon>{{ " siriusmarmoraria@yahoo.com" }}</p>
                </v-col>
                <v-col>
                    <h4>Redes Sociais</h4>
                    <v-icon color="blue-darken-4" class="cursor-pointer" size="x-large" icon="mdi-facebook"
                        start></v-icon>
                    <v-icon color="pink-accent-3" class="cursor-pointer" size="x-large" icon="mdi-instagram"
                        end></v-icon>
                </v-col>
            </v-row>
        </v-footer>
    </div>
</template>

<script>
import anime from 'animejs';

export default {
    data() {
        return {
            dialog: false,
            reviews: [
                {
                    id: 0,
                    username: 'Cesar R. Scanavez',
                    avatar: 'https://via.placeholder.com/100',
                    rating: 5,
                    comment: 'Nota 10, atendimento, entrega, prazo, qualidade, deu vintade de colocar marmore na casa toda assim!!!!!!!',
                    likes: 0,
                    dislikes: 0
                },
                {
                    id: 1,
                    username: 'Silvia Andrade',
                    avatar: 'https://via.placeholder.com/100',
                    rating: 5,
                    comment: 'Excelente! Desde o primeiro atendimento com a escolha da pedra, até a colocação! Super profissionais! Super indico! Ficou muito lindo!',
                    likes: 1,
                    dislikes: 0
                },
                {
                    id: 2,
                    username: 'Isadora Franco',
                    avatar: 'https://via.placeholder.com/100',
                    rating: 5,
                    comment: 'Serviço excelente. Desde o primeiro atendimento, com a funcionária Stefanie, até a entrega pelo rapaz que instalou. Priscila e André ajudaram muito nas adaptações do projeto, inclusive tendo ideias que melhoraram muito o projeto inicial, mudou a concepcao do espaço da cozinha e da area de serviço, e o trabalho ficou impecável. Acabamento excelente. Recomendo! Fiz orçamentos que eram um pouco mais baratos mas fechei com a Sirius por conta do atendimento e valeu muito a pena. Sou muito grata!',
                    likes: 2,
                    dislikes: 0
                },
                {
                    id: 3,
                    username: 'Priscilla Uzun Teixeira',
                    avatar: 'https://via.placeholder.com/100',
                    rating: 5,
                    comment: 'Fomos surpreendidos pela qualidade no atendimento, material e entrega. Nosso projeto ficou ótimo e a execução ainda melhor. Só podemos agradecer por tudo. Indicaremos sempre o trabalho de vocês.',
                    likes: 5,
                    dislikes: 0
                },
                {
                    id: 4,
                    username: 'Renata Barreiros',
                    avatar: 'https://via.placeholder.com/100',
                    rating: 5,
                    comment: 'Excelente atendimento, trabalho impecável e no prazo.',
                    likes: 3,
                    dislikes: 0
                },
                {
                    id: 5,
                    username: 'Rubens Lima',
                    avatar: 'https://via.placeholder.com/100',
                    rating: 5,
                    comment: 'É ok, poderia ser melhor.',
                    likes: 2,
                    dislikes: 0
                }
            ]
        };
    },
    mounted() {
        this.animateElementsOnLoad();
    },
    methods: {
        animateElementsOnLoad() {
            anime.timeline({
                easing: 'easeOutExpo',
                duration: 1000
            })
                .add({
                    targets: this.$refs.banner,
                    opacity: [0, 1],
                    translateY: [-50, 0]
                })
                .add({
                    targets: this.$refs.mission,
                    opacity: [0, 1],
                    translateY: [50, 0]
                }, '-=800')
                .add({
                    targets: [this.$refs.icon1, this.$refs.icon2, this.$refs.icon3],
                    opacity: [0, 1],
                    translateX: [-50, 0],
                    delay: anime.stagger(100)
                }, '-=500')
                .add({
                    targets: this.$refs.button,
                    opacity: [0, 1],
                    translateY: [50, 0]
                }, '-=500')
                .add({
                    targets: this.$refs.image,
                    opacity: [0, 1],
                    translateY: [50, 0]
                }, '-=500')
                .add({
                    targets: this.$refs.products,
                    opacity: [0, 1],
                    translateY: [50, 0]
                }, '-=500')
                .add({
                    targets: this.$refs.testimonials,
                    opacity: [0, 1],
                    translateY: [50, 0]
                }, '-=500');
        }
    }
};
</script>


<style></style>
