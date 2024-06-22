<template>
    <div>
        <v-parallax class="gradient" src="/images/home1.png" style="height: 100%">
            <div>
                <v-container fluid>
                    <v-row align="center" justify="center" style="min-height: 100vh;">
                        <v-col cols="12" sm="8" md="6">
                            <v-card color="secondary" elevation="24">
                                <v-card-title class="text-center text-secondary bg-primary font-weight-bold">Login</v-card-title>
                                <v-divider class="text-primary"></v-divider>
                                <v-form>
                                    <v-container>
                                        <v-row>
                                            <v-col cols="12">
                                                <v-text-field label="Nome de usuário" v-model="form.userName" variant="solo"></v-text-field>
                                            </v-col>
                                        </v-row>
                                        <v-row>
                                            <v-col cols="12">
                                                <v-text-field v-model="form.password" label="Senha" type="password"
                                                    variant="solo"></v-text-field>
                                            </v-col>
                                        </v-row>
                                        </v-container>
                                        <v-divider class="text-secondary"></v-divider>
                                        <v-card-actions class="mt-1 bg-primary">
                                        <v-row>
                                            <v-col cols="12" width="100%">
                                                <v-btn class="bg-secondary" variant="tonal" @click="login()">Entrar</v-btn>
                                            </v-col>
                                        </v-row>
                                    </v-card-actions>
                                </v-form>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </div>
        </v-parallax>
    </div>
</template>

<script>
import axios from 'axios';
import { useHead } from '@vueuse/head';

export default {
    setup() {
        useHead({
            title: 'Login - Sirius Marmoraria',
            meta: [
                {
                    name: 'description',
                    content: 'Página de login para o administratar informações de contato da Sirius Marmoraria'
                },
            ],
        });
    },
    data() {
        return {
            errorMessage: null,
            form: {
                userName: null,
                password: null
            },
            errorLogin: false,
        };
    },
    methods: {
        login(){
            console.log(this.form)
            axios.post('api/Users/login', this.form, null).then(response => {
                localStorage.setItem('accessToken', response.data);
                this.$store.commit('setIsAuthenticated', response.status);
                this.$store.commit('setToken', localStorage.getItem('accessToken'));
                this.errorLogin = false;
            }).catch(error => {
                this.$store.commit('setIsAuthenticated', error.response.status);
                this.$store.commit('setToken', localStorage.getItem('accessToken'));
                this.errorMessage = error.response.status == 404 ? error.response.data : "Erro ao realizar login";
                this.$toast.error(this.errorMessage);
            })
        }
    }
};
</script>


<style></style>
