<template>
  <div class="association-page">
    <PageHero :imageUrl="PageHeroImage" />
    <div class="association-body px-[80px]">
      <h1 class="text-[50px] font-bold text-[#003867] mt-[40px] mb-[20px]">Giants Gameday</h1>
      <p class="text-[15px] text-[#003867] mb-[40px]">
        Ein Gameday bei den Graz Giants ist mehr als nur ein Spiel – er ist ein Erlebnis! In der
        Actionberg-Atmosphäre trifft Giants-Football auf eine mitreißende gute Stimmung, die vom
        ersten Kickoff bis zum letzten Play durchgehend pulsiert. Hier spürst du den echten
        Giants-Spirit: eine Gemeinschaft, die als Giants-Family zusammenhält, anfeuert und jeden
        Touchdown feiert. Ob du eingefleischter Fan bist oder einfach nur gute Football-Action
        suchst – beim Heimspiel bist du mitten drin, statt nur dabei.
      </p>
      <div
        class="cars-section flex flex-row flex-wrap items-center justify-center gap-[35px] pb-[50px]"
      >
        <CardImageText
          :imageUrl="image"
          :text="'Sei live dabei in Actionberg und erlebe'"
          :url="'#'"
        />
        <CardImageText :imageUrl="image" :text="'Hall of Fame'" :url="'#'" />
        <CardImageText :imageUrl="image" :text="'Nachwuchs Tackle und Flag Football'" :url="'#'" />
        <CardImageText :imageUrl="image" :text="'Giants Helfer & Vorstand'" :url="'#'" />
      </div>
    </div>
  </div>
</template>

<script setup>
import PageHero from '@/components/PageHero.vue'
import PageHeroImage from '@/assets/PageHeroImage.png'
import CardImageText from '@/components/ui/CardImageText.vue'
import image from '@/assets/hamburgerIcon.svg'
// to do list
</script>
