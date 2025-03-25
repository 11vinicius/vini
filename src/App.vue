<template>
<div class="overflow-hidden">
    <transition name="slide-rigth">
        <div v-if="isLoading == true" class="overflow-hidden">
          
            <video autoplay loop muted playsinline class=" w-full h-full object-cover">
                <source src="../public/assets/video.mp4" type="video/mp4">
                Seu navegador não suporta vídeos.
            </video>
                
            <div class="grid md:grid-cols-4 gap-4 px-4 pt-8  md:px-14 pb-24 overflow-hidden" >
                <div class="p-6 shadow-white border border-white backdrop-blur-md rounded-lg shadow-lg">
                        <h2 class="text-xl font-semibold text-white mb-4">Desenvolvimento Mobile</h2>
                    <p class="text-white">
                        Transforme suas ideias em aplicativos inovadores e de alto desempenho! Oferecemos soluções mobile sob medida para iOS e Android, com foco em usabilidade, design moderno e funcionalidades que impulsionam seus negócios. Leve sua marca ao próximo nível com tecnologia de ponta!
                    </p>
                </div>
                <div class="p-6 shadow-white border border-white backdrop-blur-md rounded-lg shadow-lg">
                    <h2 class="text-xl font-semibold text-white mb-4">Desenvolvimento Web</h2>
                    <p class="text-white">
                        Transforme sua ideia em uma realidade digital com soluções personalizadas. Oferecemos desenvolvimento web completo, do design ao código, criando sites rápidos, responsivos e focados na experiência do usuário. Leve sua marca ao próximo nível com tecnologia de ponta e inovação.
                    </p>
                </div>
                <div class="p-6   shadow-white border border-white backdrop-blur-md rounded-lg shadow-lg">
                    <h2 class="text-xl font-semibold text-white mb-4">Rest API</h2>
                    <p class="text-white">
                        Conecte sistemas de forma eficiente e segura com APIs RESTful personalizadas. Soluções escaláveis que facilitam a integração de serviços, otimizam o fluxo de dados e garantem alto desempenho. Aumente a interoperabilidade da sua aplicação com APIs rápidas, confiáveis e fáceis de usar.
                    </p>
                </div>
                <div class="p-6 shadow-white border border-white backdrop-blur-md rounded-lg shadow-lg">
                    <h2 class="text-xl font-semibold text-white mb-4">Metodologias agéis</h2>
                    <p class="text-white">
                        Com metodologias ágeis, entrego resultados contínuos, adaptáveis e eficientes. Acelere seus projetos, melhore a comunicação e atenda às necessidades do mercado de forma ágil e assertiva. Quero levar sua empresa a um novo patamar de inovação e produtividade!
                    </p>
                </div>
            </div>  
        </div>
    </transition>
</div>
</template>

<script setup lang="ts">
    import { Icon } from '@iconify/vue';
    import { onMounted, ref } from 'vue';

    const isLoading = ref(false)
    const isScrowDown = ref(false)

    function setIsScrowDown(){
        isScrowDown.value = window.scrollY > 100
        console.log(   isScrowDown.value)
    }

    onMounted(
        ()=>{
            window.addEventListener('scroll', setIsScrowDown);
            setTimeout(()=>isLoading.value = true, 1000)
        }
    )
</script>

<style>
   .slide-rigth-enter-active {
        transition: all 1s ease-out;
    }

    .slide-rigth-leave-active {
        transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
    }

    .slide-rigth-enter-from,
    .slide-rigth-leave-to {
        transform: translateX(80px);
        opacity: 0;
    }

    .bola{
        box-shadow: 0px 0px 50px 40px #a11506;
    }

    body{
        background-color: #000000;
    }

    *{
        font-family: "Oswald", sans-serif;
    }
 
</style>


