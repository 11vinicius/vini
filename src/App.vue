<template>
<div class="overflow-hidden">
    <transition name="slide-rigth">
        <div v-if="isLoading == true" class="overflow-hidden">
            <div class="flex justify-between md:px-14 px-2 py-4">
                <div class="flex items-end">
                    <Icon icon="ci:coffee" class="text-white w-10 h-10"/>
                    <div class="text-white text-3xl ml-2 font-semibold">
                        vini
                    </div>
                </div>
                <div class="flex">
                    <a href="https://www.linkedin.com/in/viniciuscesarlemes/" target="_blank">
                            <Icon icon="mdi:linkedin" class="text-white link w-10 hover:text-[#810c00] h-10"/>
                    </a>
                    <a href="https://www.instagram.com/_viniciuslemes/" target="_blank">
                        <Icon icon="icon-park-outline:instagram" class="text-white link hover:text-[#810c00] w-10 h-10"/>
                    </a>
                    <a href="https://github.com/11vinicius" target="_blank">
                        <Icon icon="mdi:github" class="text-white link hover:text-[#810c00]   w-10 h-10"/>
                    </a>
                </div>
            </div>
            <div class="flex overflow-hidden justify-between" >
                <div class="md:w-6/12 md:px-14 px-4 md:relative py-20">
                    <div class="bg-[#810c00] rounded-full bola w-48 h-48"></div>
                    <div class="absolute top-28 md:left-14">
                        <div class="text-white text-3xl font-semibold mt-24 md:mt-0">
                            Do Conceito à Implementação Desenvolvimento Full-Stack
                        </div>
                        <div class="text-white">
                            Com experiência em Vue.js, Laravel, e Flutter, eu transformo suas ideias em aplicativos e sistemas funcionais. Desde a criação de interfaces intuitivas até o desenvolvimento de backends robustos, minha missão é fornecer soluções técnicas que atendam às suas necessidades e superem suas expectativas.
                        </div>
                    </div>
                </div>
                <div class="hidden md:block">
                    <video class="h-84 w-[600px] ml-44" autoplay loop muted>
                        <source src="./assets/video.mp4" type="video/mp4">
                        Seu navegador não suporta a tag de vídeo.
                    </video>
                </div>
            </div>
                
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


