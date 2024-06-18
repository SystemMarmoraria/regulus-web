<template>
    <div>
        <v-app-bar color="secondary" :scroll-threshold="scroll" :elevation="10">
            <h2 style="margin-left: 5px;">AdminSirius</h2>
            <v-spacer></v-spacer>
            <v-btn append-icon="mdi-logout" @click="logOut()" variant="plain">Sair</v-btn>
        </v-app-bar>
        <v-container>
            <v-card class="mt-6">
                <v-card-title class="bg-secondary text-primary">
                    <h3>Dados de comunicação</h3>
                </v-card-title>
                <v-divider class="bg-primary"></v-divider>
                <v-form>
                    <v-container>
                        <v-row>
                            <v-col>
                                <v-text-field :disabled="disabled" v-model="contacts.mobile_phone_number" :rules="[
                                    () => !!contacts.mobile_phone_number || 'O Numero do celular precisa ser preenchido',
                                ]" prepend-icon="mdi-whatsapp" variant="solo" label="Celular"
                                    v-mask-phone.br></v-text-field>
                            </v-col>
                            <v-col>
                                <v-text-field :disabled="disabled" v-model="phoneNumberMask "  :rules="[
                                    () => !!phoneNumberMask  || 'O número do telefone precisa ser preenchido',
                                ]" prepend-icon="mdi-phone" variant="solo" label="Telefone" v-mask="'(00) 00000-0000'"></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <v-text-field :disabled="disabled" v-model="contacts.email" :rules="[
                                    () => !!contacts.email || 'O e-mail precisa ser preenchido',
                                    value => validateEmail(value),
                                    ]" prepend-icon="mdi-email-outline" variant="solo"
                                    label="Email"></v-text-field>
                            </v-col>
                            <v-col>
                                <v-text-field :disabled="disabled" v-model="contacts.address" :rules="[
                                    () => !!contacts.address || 'O endereço precisa ser preenchido',
                                ]" prepend-icon="mdi-map-marker-outline" variant="solo"
                                    label="Endereço"></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <v-text-field :disabled="disabled" v-model="contacts.link_face" :rules="[
                                    () => !!contacts.linkFace || 'O link do facebook precisa ser preenchido',
                                ]" prepend-icon="mdi-facebook" variant="solo" label="Link do facebook"></v-text-field>
                            </v-col>
                            <v-col>
                                <v-text-field :disabled="disabled" v-model="contacts.link_insta" :rules="[
                                    () => !!contacts.linkInsta || 'O link do instagram precisa ser preenchido',
                                ]" prepend-icon="mdi-instagram" variant="solo"
                                    label="Link do instagram"></v-text-field>
                            </v-col>
                        </v-row>
                    </v-container>
                    <v-divider></v-divider>
                    <v-card-actions class="bg-secondary">
                        <v-spacer>
                            <v-btn variant="tonal" :prepend-icon=" disabled ? 'mdi-circle-edit-outline':'mdi-content-save'" @click="putInfo(), disabled = !disabled" :color="disabled? 'primary' : 'green'">{{disabled ? 'Editar':'Salvar'}}</v-btn>
                        </v-spacer>
                    </v-card-actions>
                </v-form>
            </v-card>
        </v-container>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            contacts: {
                email: null,
                address: null,
                phoneNumber: null,
                telPhonenumber: null,
                linkFace: null,
                linkInsta: null,
            },
            phoneNumberMask : null,
            disabled: true,
        }
    },
    mounted(){
        this.getInfo();
    },
    methods: {
    validateEmail(value) {
      const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return pattern.test(value) || 'E-mail inválido.';
    },
    getInfo(){
        axios.get('api/contactInformation').then(Response => {
            this.contacts = Response.data;
            this.phoneNumberMask = this.contacts.phoneNumber;
        }).catch(error => {
            console.log(error);
        })
    },
    putInfo(){
        this.contacts.phoneNumberMask  = this.phoneNumberMask .replace(/\D/g, "");

        axios.put('api/contactInformation', this.contacts).then(Response => {
            console.log(Response.data)
        }).catch(error => {
            console.log(error);
        })
    },
    logOut(){
        localStorage.clear();
    },
  }
};
</script>


<style>
h2 {
    text-shadow: 1px 1px 1px #304FFE;
}
</style>
