<template>
    <div>
        <v-parallax class="gradient" src="/images/home1.png" style="height: 100%">
            <div>
                <v-container fluid>
                    <v-row align="center" justify="center" style="min-height: 100vh;">
                        <v-col cols="12" sm="8" md="6">
                            <v-card color="secondary">
                                <v-card-title class="text-center text-primary font-weight-bold">Login</v-card-title>
                                <v-divider class="text-primary"></v-divider>
                                <v-form>
                                    <v-container>
                                        <v-row>
                                            <v-col cols="12">
                                                <v-text-field label="E-mail" v-model="form.userName" type="email" variant="solo"></v-text-field>
                                            </v-col>
                                        </v-row>
                                        <v-row>
                                            <v-col cols="12">
                                                <v-text-field v-model="form.password" label="Senha" type="password"
                                                    variant="solo"></v-text-field>
                                            </v-col>
                                        </v-row>
                                        </v-container>
                                        <v-divider class="text-primary"></v-divider>
                                        <v-card-actions class="mt-1">
                                        <v-row>
                                            <v-col cols="12" width="100%">
                                                <v-btn class="bg-primary" @click="login()">Entrar</v-btn>
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

export default {
    data() {
        return {
            errorMessage: null,
            form: {
                userName: null,
                password: null
            }
        };
    },
    methods: {
        login(){
            axios.post('api/Users/login', this.form, null).then(response => {
                localStorage.setItem('accessToken', response.data);
            }).catch(error => {
                this.errorMessage = error.response.status == 404 ? error.response.data : "Erro ao realizar login";
            })
        }
    }
};
</script>


<style></style>
