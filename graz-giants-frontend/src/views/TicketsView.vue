<template>
  <div class="tickets-page">
    <PageHero :imageUrl="PageHeroImage" />
    <div class="flex flex-col mx-[80px] mt-[30px] mb-[50px]">
      <h2
        class="text-[50px] text-[#003867] font-normal uppercase leading-[50px] text-left mb-[30px]"
      >
        Tickets
      </h2>
      <p class="text-[#003867] text-[15px] font-normal leading-[20px]">
        Deine Möglichkeiten, Aktionen und Angebote. <br />
        Tipp: Tickets sind online günstiger erhältlich!
      </p>

      <!-- Card Container -->
      <div class="flex flex-row flex-wrap gap-[30px] mt-[30px]">
        <!-- Card 1 -->
        <div
          class="relative flex flex-col justify-between items-center w-[365px] h-[361px] shadow-[5px_5px_10px_rgba(0,0,0,0.30)] max-[430px]:w-[150px] py-[20px]"
        >
          <!-- // to do list -->

          <img
            src="@/assets/hamburgerIcon.svg"
            alt="News 1"
            class="absolute inset-0 h-full w-full object-cover"
          />
          <div class="absolute inset-0 bg-[rgba(0,0,0,0.80)]"></div>
          <p
            class="relative z-10 min-h-[100px] max-w-full text-[24px] font-normal uppercase leading-[33.6px] text-[#FAB900] max-[430px]:my-[10px] max-[430px]:min-h-[130px] max-[430px]:text-[16px] max-[430px]:leading-[22.4px]"
          >
            Ticketpreise
          </p>
          <p
            class="relative z-10 m-0 min-h-[10px] text-[15px] font-normal uppercase leading-[24px] text-[#FAB900]"
          >
            03.03.2026
          </p>
          <p
            class="relative z-10 m-0 min-h-[10px] text-[15px] font-normal uppercase leading-[24px] text-[#FAB900]"
          >
            03.03.2026
          </p>
          <img
            src="@/assets/hamburgerIcon.svg"
            alt="Holding Graz Logo"
            class="relative z-10 h-[50px] w-auto mt-[20px]"
          />
          <button
            class="relative z-10 mt-auto inline-flex h-[38px] items-center rounded-[20px] bg-[#FAB900] px-[20px] text-[15px] font-bold uppercase text-[#003867]"
            type="button"
          >
            Online Tickets kaufen
          </button>
        </div>

        <!-- Card 2 -->
        <!-- Card 3 -->
      </div>
    </div>
  </div>
</template>

<script setup>
import PageHeroImage from '@/assets/PageHeroImage.png'
import PageHero from '../components/PageHero.vue'
</script>
