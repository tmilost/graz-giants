<template>
  <footer class="bg-[#003867] px-[80px] py-[40px]">
    <!-- Logo -->
    <div class="pb-[80px] max-[430px]:pb-[30px] max-[430px]:text-center">
      <a href="/">
        <img src="@/assets/GiantsLogo.svg" alt="Giants logo" />
      </a>
    </div>

    <!-- Middle -->
    <div
      class="flex flex-row flex-wrap gap-[50px] max-[430px]:mt-[30px] max-[430px]:flex-col-reverse"
    >
      <!-- Column 1 -->
      <div class="mr-[70px] flex flex-col gap-[10px]">
        <p class="text-left text-[18px] font-normal uppercase leading-[21px] text-white">
          Kontaktdaten
        </p>
        <p class="text-[15px] font-normal leading-[21px] text-white">
          Adresse: Schloßstraße 20, 8020 Graz
        </p>
        <a class="text-[15px] font-normal leading-[21px] text-white" href="#">
          E-Mail: office@grazgiants.at
        </a>
        <p class="text-[15px] font-normal leading-[21px] text-white">Weitere Kontaktdaten:</p>
        <p class="text-[15px] font-normal leading-[21px] text-white underline">Presse</p>
      </div>

      <!-- Column 2 -->
      <div class="flex flex-col gap-[10px]">
        <p class="text-left text-[18px] font-normal uppercase leading-[21px] text-white">Gameday</p>
        <p class="text-[15px] font-normal leading-[21px] text-white">Tickets</p>
        <a class="text-[15px] font-normal leading-[21px] text-white" href="#"> Stadion </a>
        <p class="text-[15px] font-normal leading-[21px] text-white">Livestream</p>
        <p class="text-[15px] font-normal leading-[21px] text-white underline">Tabelle</p>
        <p class="text-[15px] font-normal leading-[21px] text-white underline">Schedule</p>
      </div>

      <!-- Column 3 -->
      <div class="flex flex-col gap-[10px]">
        <p class="text-left text-[18px] font-normal uppercase leading-[21px] text-white">
          Sponsoring
        </p>
        <p class="text-[15px] font-normal leading-[21px] text-white">Booster Club</p>
        <a class="text-[15px] font-normal leading-[21px] text-white" href="#"> Kontaktperson </a>
        <p class="text-[15px] font-normal leading-[21px] text-white">Partner</p>
        <p class="text-[15px] font-normal leading-[21px] text-white underline">Unterstützer</p>
      </div>

      <!-- Column 4 -->
      <div class="flex flex-col gap-[10px]">
        <p class="text-left text-[18px] font-normal uppercase leading-[21px] text-white">
          Extrene Links
        </p>
        <p class="text-[15px] font-normal leading-[21px] text-white">Austrian Football League</p>
        <a class="text-[15px] font-normal leading-[21px] text-white" href="#"> Nachwuchs Season </a>
        <p class="text-[15px] font-normal leading-[21px] text-white">ÖCCV</p>
      </div>
    </div>

    <!-- Copyright -->
    <div
      class="mt-[30px] flex flex-row justify-between border-t border-white pt-[30px] text-[12px] font-normal uppercase leading-[21px] text-white max-[430px]:flex-wrap"
    >
      <div class="flex flex-row gap-[69px] w-[300px]">
        <a class="underline" href="#">Datenschutz</a>
        <a class="underline" href="#">Impressum</a>
      </div>

      <div class="max-[430px]:mt-[10px]">
        <p class="underline">© {{ new Date().getFullYear() }} Graz Giants</p>
      </div>

      <div class="flex flex-row justify-end gap-[10px] max-[430px]:mt-[10px] w-[300px]">
        <img src="@/assets/InstaIconWhite.svg" alt="Icon" class="h-[20px] w-[20px]" />
        <img src="@/assets/InstaIconWhite.svg" alt="Icon" class="h-[20px] w-[20px]" />
        <img src="@/assets/InstaIconWhite.svg" alt="Icon" class="h-[20px] w-[20px]" />
        <img src="@/assets/InstaIconWhite.svg" alt="Icon" class="h-[20px] w-[20px]" />
      </div>
    </div>
  </footer>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useApiCalls } from '../stores/apiCalls.js'

const apiCalls = useApiCalls()

const postContentMiddle = computed(() => {
  return apiCalls.allWordpressPosts['FooterMiddle']
})

const postContentBottom = computed(() => {
  return apiCalls.allWordpressPosts['FooterBottom']
})

async function retrieveWordpressPost() {
  await apiCalls.retrieveWordpressPost('FooterMiddle')
  await apiCalls.retrieveWordpressPost('FooterBottom')
}

onMounted(() => {
  retrieveWordpressPost()
})
</script>
