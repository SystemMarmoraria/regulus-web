<template>
    <div>
        <a id="Incio"></a>
        <v-app-bar color="secondary" :scroll-threshold="scroll" :elevation="10">
            <v-img src="images/logo-sirius.png" alt="sirius logo" max-width="150px" class="mr-4"></v-img>
            <v-spacer></v-spacer>
            <v-tabs class="text-primary" v-model="tab" density="comfortable">
                <v-tab v-scroll-to="'#Incio'" :hide-slider="true" value="home">
                    <h4 class="text-primary">Home</h4>
                </v-tab>
                <v-tab v-scroll-to="'#Sobre-nos'" :hide-slider="true" value="about">
                    <h4 class="text-primary">Sobre nós</h4>
                </v-tab>
                <v-tab v-scroll-to="'#Produtos'" :hide-slider="true" value="portfolio">
                    <h4 class="text-primary">Produtos</h4>
                </v-tab>
                <v-tab v-scroll-to="'#Contato'" :hide-slider="true" value="contact">
                    <h4 class="text-primary">Contato</h4>
                </v-tab>
            </v-tabs>
        </v-app-bar>
        <v-parallax class="gradient" src="/images/home.png" style="height: 40em;margin-bottom: 1.5em;">
            <div class="d-flex flex-column fill-height justify-center align-center text-indigo-accent-1" ref="banner">
                <h1 class="text-h2 font-weight-bold mb-4">
                    Qualidade e excelência em cada detalhe.
                </h1>
            </div>
            <a id="Sobre-nos"></a>
        </v-parallax>
        <h2 class="text-h4 mb-12 mt-12">Uma empresa voltada ao consumidor</h2>

        <v-container fluid style="margin-top: 15px;">
            <v-row style="margin-bottom: 1.5em;">
                <v-col>
                    <v-card variant="tonal" style="padding: 15px;" class="text-h6 font-weight-regular" ref="mission">
                        A <strong class="text-secondary font-weight-bold">Sirius Marmoraria</strong> se destaca por sua
                        missão de transformar a experiência da obra com amor e excelência. Nossa prioridade é oferecer
                        atendimento perfeito desde o início até a entrega final. Valores como excelência em atendimento,
                        acabamento impecável e comprometimento com seu projeto são fundamentais para nós. Os clientes
                        podem explorar uma variedade de materiais, desde mármores clássicos até granitos exóticos.
                        Nossos consultores especializados estão prontos para orientar e inspirar. <strong
                            class="text-secondary font-weight-bold">Conte conosco para tornar seu projeto em algo
                            extraordinário!</strong>
                        <v-container fluid>
                            <v-row align-content="center" justify="center">
                                <v-col v-if="views.mission">
                                    <v-card
                                        @click="views.worth = !views.general, views.vision = !views.general, views.general = !views.general"
                                        variant="plain"
                                        class="blackFilter cursor-pointer rounded-circle d-flex justify-center align-start image-wrapper"
                                        ref="icon1" style="width: 23vw;">
                                        <v-hover v-slot="{ isHovering, props }" open-delay="200">
                                            <v-img style="margin: 1em;" src="images/Mission.png" v-bind="props">
                                                <div class="overlay" :class="{ 'visible': isHovering }">
                                                    <h3 class="overlay-text text-white">{{ views.general ? 'Ver missão'
                                                        :
                                                        'Voltar' }}</h3>
                                                </div>
                                            </v-img>
                                        </v-hover>
                                    </v-card>
                                </v-col>
                                <v-col v-if="views.vision">
                                    <v-card
                                        @click="views.worth = !views.general, views.mission = !views.general, views.general = !views.general"
                                        variant="plain"
                                        class="blackFilter cursor-pointer rounded-circle d-flex justify-center align-start image-wrapper"
                                        ref="icon2" style="width: 23vw;">
                                        <v-hover v-slot="{ isHovering, props }" open-delay="200">
                                            <v-img style="margin: 1em;" src="images/binocular.png" v-bind="props">
                                                <div class="overlay" :class="{ 'visible': isHovering }">
                                                    <h3 class="overlay-text text-white">{{ views.general ? 'Ver Visão' :
                                                        'Voltar' }}</h3>
                                                </div>
                                            </v-img>
                                        </v-hover>
                                    </v-card>
                                </v-col>
                                <v-col v-if="views.worth">
                                    <v-card
                                        @click="views.mission = !views.general, views.vision = !views.general, views.general = !views.general"
                                        variant="plain"
                                        class="blackFilter cursor-pointer rounded-circle d-flex justify-center align-start image-wrapper"
                                        ref="icon3" style="width: 23vw;">
                                        <v-hover v-slot="{ isHovering, props }" open-delay="200">
                                            <v-img style="margin: 1em;" src="images/valor.png" v-bind="props">
                                                <div class="overlay" :class="{ 'visible': isHovering }">
                                                    <h3 class="overlay-text text-white">{{ views.general ? 'Ver Valores'
                                                        :
                                                        'Voltar' }}</h3>
                                                </div>
                                            </v-img>
                                        </v-hover>
                                    </v-card>
                                </v-col>
                                <v-col v-if="(views.mission || views.vision || views.worth) && !views.general">
                                    <v-card variant="outlined" class="rounded-lg" style="width: 60vw;">
                                        <v-card-title v-if="views.mission" class="text-h4 py-4">Missão</v-card-title>
                                        <v-card-text class="font-italic" v-if="views.mission">“Atendimento com perfeição
                                            do início ao após entrega”</v-card-text>
                                        <v-card-title v-if="views.vision" class="text-h4 py-4">Visão</v-card-title>
                                        <v-card-text class="font-italic" v-if="views.vision">“Transformar com amor a
                                            vivência da obra no constante do nosso
                                            serviço com excelência”</v-card-text>
                                        <v-card-title v-if="views.worth" class="text-h4 py-4">Valores</v-card-title>
                                        <v-card-text v-if="views.worth" class="font-italic pb-4">
                                            <v-list bg-color="transparent">
                                                <v-list-item>
                                                    <v-list-item-content>
                                                        <v-list-item-title>Excelência em Atendimento</v-list-item-title>
                                                    </v-list-item-content>
                                                </v-list-item>
                                                <v-list-item>
                                                    <v-list-item-content>
                                                        <v-list-item-title>Acabamento Impecável</v-list-item-title>
                                                    </v-list-item-content>
                                                </v-list-item>
                                                <v-list-item>
                                                    <v-list-item-content>
                                                        <v-list-item-title>Comprometimento com seu
                                                            Projeto</v-list-item-title>
                                                    </v-list-item-content>
                                                </v-list-item>
                                                <v-list-item>
                                                    <v-list-item-content>
                                                        <v-list-item-title>Amor em cada Detalhe</v-list-item-title>
                                                    </v-list-item-content>
                                                </v-list-item>
                                            </v-list>
                                        </v-card-text>
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-container>
                        <a id="Produtos"></a>
                    </v-card>
                </v-col>
                <!--
                <v-col>
                    <v-card variant="plain">
                        <v-img class="rounded-lg" src="images/pia.jpeg" ref="image"></v-img>
                    </v-card>
                </v-col>
                -->
            </v-row>

            <h2 class="text-h4 mb-12 mt-12">Nossos principais produtos</h2>
            <v-row style="margin-top: 15px; margin-bottom: 1.5em" ref="products">
                <v-carousel class="rounded-lg" style="margin: 1em" show-arrows="hover" cycle>
                    <v-carousel-item cover :src="`/images/IMG_${i}.png`" color="secondary" v-for="i in 7" :key="i">
                    </v-carousel-item>
                </v-carousel>
            </v-row>

            <h2 class="text-h4 mt-12">Depoimento dos clientes</h2>
            <h4 class="text-secondary mt-2">Clique para visualizar as reviews</h4>
            <v-card variant="tonal" class="mt-12" ref="testimonials">
                <v-row class="mx-4">
                    <v-col cols="12" sm="6" md="6" lg="4" xl="2" v-for="(review, index) in reviews" :key="index"
                        class="cursor-pointer" v-model="review.id">
                        <v-dialog v-model="dialog">
                            <v-card class="my-4">
                                <v-card-title class="bg-secondary">
                                    <v-avatar class="mr-3 text-primary">
                                        <v-icon>mdi-account-circle</v-icon>
                                    </v-avatar>
                                    <span class="text-primary">{{ reviewDialog.username }}</span>
                                    <v-icon @click="dialog = false" style="float: right;"
                                        class="cursor-pointer closeButton" :color="isHovering ? 'red' : null">
                                        mdi-close-circle-outline
                                    </v-icon>
                                </v-card-title>
                                <v-divider class="mb-4"></v-divider>
                                <v-card-subtitle class="text-body-1 text-wrap">
                                    {{ reviewDialog.comment }}
                                </v-card-subtitle>
                                <v-card-text>
                                    <v-rating v-model="reviewDialog.rating" background-color="transparent" color="amber"
                                        readonly></v-rating>
                                </v-card-text>
                                <v-divider></v-divider>
                                <v-card-actions class="d-flex justify-center bg-secondary">
                                    <v-icon color="primary">mdi-thumb-up-outline</v-icon>
                                    <span class="mx-2">{{ " " + reviewDialog.likes }}</span>
                                    <v-icon color="error">mdi-thumb-down-outline</v-icon>
                                    <span>{{ " " + reviewDialog.dislikes }}</span>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                        <v-card class="my-4 elevation-12"
                            @click="dialog = true, reviewDialog = filterAvaliations(review.id)">
                            <v-card-title class="bg-secondary">
                                <v-avatar class="mr-3 text-primary">
                                    <v-icon>mdi-account-circle</v-icon>
                                </v-avatar>
                                <span class="text-primary">{{ review.username }}</span>
                            </v-card-title>
                            <v-divider class="mb-4"></v-divider>
                            <v-card-subtitle class="text-body-1">
                                {{ review.comment }}
                            </v-card-subtitle>
                            <v-card-text>
                                <v-rating v-model="review.rating" background-color="transparent" color="amber" readonly
                                    density="compact"></v-rating>
                            </v-card-text>
                            <v-divider></v-divider>
                            <v-card-actions class="d-flex justify-center bg-secondary">
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
        <a id="Contato"></a>
        <v-parallax class="gradient mt-12" src="/images/Sirius.png" style="height: 40em; margin-top: 20px;">
            <div class="d-flex flex-column justify-center align-center" ref="banner">
                <h2 class="text-h4 text-secondary mb-12 mt-12">Entre em contato conosco</h2>
                <v-card variant="tonal" width="95%">
                    <v-container>
                        <v-row>
                            <v-col cols="5">
                                <v-card-title class="text-left text-h5">Localização <v-icon size="small"
                                        icon="mdi-map-marker-outline"></v-icon></v-card-title>
                                <v-card-text class="mt-4 text-left">Avenida Benedito de Campos, 811 -
                                    Jardim do Trevo, <br> Campinas - SP
                                    CEP:13.030-100</v-card-text>
                                <v-card-title class="mt-5 mb-1 text-left text-h5">Siga-Nos em nossas redes
                                    sociais</v-card-title>
                                <v-card-actions class="d-flex justify-start">
                                    <a href="https://www.facebook.com/siriusmr/?locale=pt_BR" target="_blank"><v-icon
                                            class="cursor-pointer" size="x-large" icon="mdi-facebook" end></v-icon></a>
                                    <a href="https://www.instagram.com/siriusmrev/?hl=pt" target="_blank"><v-icon
                                            class="cursor-pointer" size="x-large" icon="mdi-instagram" end></v-icon></a>
                                </v-card-actions>
                                <v-card-title class="text-left text-h5 mt-5 mb-1">Contato telefônico</v-card-title>
                                <v-card-text class="text-left"><v-icon size="x-small" variant="text"
                                        icon="mdi-phone"></v-icon>{{ ' Telefone fixo: (19) 2519-3131' }}</v-card-text>
                                <v-card-actions class="d-flex justify-start">
                                    <v-btn append-icon="mdi-whatsapp" @click="sendWhatsApp" class="bg-green">Enviar
                                        menssagem pelo
                                        Whatsapp</v-btn>
                                </v-card-actions>
                            </v-col>
                            <v-col cols="7">
                                <h3 class="mb-4">{{ 'Formulário de contato ' }}<v-icon size="small"
                                        icon="mdi-email-outline"></v-icon></h3>
                                <form @submit.prevent="sendEmail">
                                    <v-text-field :disabled="true" variant="outlined" type="email" v-model="toEmail"
                                        label="Email do Destinatário" required></v-text-field>
                                    <v-text-field variant="outlined" type="text" v-model="subject" label="Assunto"
                                        required></v-text-field>
                                    <v-textarea variant="outlined" v-model="message" label="Sua mensagem"
                                        required></v-textarea>
                                    <v-btn width="100%" variant="outlined" class="bg-white" type="submit"
                                        append-icon="mdi-email-arrow-right">Enviar</v-btn>
                                </form>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card>
            </div>
        </v-parallax>
    </div>
</template>

<script>
import anime from 'animejs';
import axios from 'axios';
import { useHead } from '@vueuse/head';

export default {
    data() {
        return {
            toEmail: 'siriusmarmoraria@yahoo.com',
            subject: '',
            message: '',
            colsAbout: {
                sm: "1",
                md: "1",
                lg: "1",
                xl: "1"
            },
            contacts: {
                email: null,
                address: null,
                phoneNumber: null,
                telPhonenumber: null,
                linkFace: null,
                linkInsta: null,
            },
            dialog: false,
            reviewDialog: {},
            views: {
                general: true,
                mission: true,
                vision: true,
                worth: true
            },
            tab: null,
            scroll: 0,
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
    setup() {
        useHead({
            title: 'Página Inicial - Sirius Marmoraria',
            meta: [
                {
                    name: 'description',
                    content: 'A Sirius Marmoraria e Revestimentos é uma empresa dinâmica e inovadora, nascida em 2017 da fusão das bem-sucedidas empresas “Ptostta Pisos e Revestimentos” e “Asignor Marmoraria”. Com sede em Campinas, SP, a Sirius se destaca no setor de pedras naturais, oferecendo soluções personalizadas e elegantes para seus clientes.'
                },
                {
                    name: 'keywords',
                    content: 'marmoraria, granito, mármore, serviços de pedra, Sirius Marmoraria, revestimentos, sirius,  Sirius Marmoraria e Revestimentos'
                },
                {
                    name: 'robots',
                    content: 'index, follow'
                }
            ],
        });
    },
    methods: {
        getInfo() {
            axios.get('api/contactInformation').then(Response => {
                this.contacts = Response.data;
            }).catch(error => {
                console.log(error);
            })
        },
        filterAvaliations(id) {
            let review = this.reviews.find(review => (review.id === id))
            return review
        },
        sendEmail() {
            const mailtoLink = `mailto:${this.toEmail}?subject=${encodeURIComponent(this.subject)}&body=${encodeURIComponent(this.message)}`;
            window.location.href = mailtoLink;
        },
        sendWhatsApp() {
            const whatsappLink = `https://wa.me/19976004302?text=${encodeURIComponent("Olá, eu gostaria de fazer um orçamento!")}`;
            window.open(whatsappLink, '_blank');
        },
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


<style>
a {
    color: white;
    text-decoration: none;
}

.closeButton:hover {
    color: red
}

.overlay.visible {
    opacity: 1;
}

.image-wrapper {
    position: relative;
    display: inline-block;
}

.blackFilter:hover {
    transition: filter 0.3s ease-in-out;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 100%;
}

.overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
}

.overlay-text {
    position: relative;
    /* Adicione esta linha */
    z-index: 2;
    /* Adicione esta linha */
    font-size: 1.351rem;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
}

.image-wrapper:hover .overlay {
    opacity: 1;
}
</style>
