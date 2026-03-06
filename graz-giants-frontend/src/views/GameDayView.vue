<template>
  <div class="game-day-page py-[30px]">
    <PageHero :imageUrl="PageHeroImage" />
    <div class="game-day-top px-[80px] flex flex-col items-start">
      <h1 class="text-[50px] font-bold text-[#003867] mt-[40px] mb-[20px]">Giants Gameday</h1>
      <p class="text-[15px] text-[#003867] mb-[40px]">
        Ein Gameday bei den Graz Giants ist mehr als nur ein Spiel – er ist ein Erlebnis! In der
        Actionberg-Atmosphäre trifft Giants-Football auf eine mitreißende gute Stimmung, die vom
        ersten Kickoff bis zum letzten Play durchgehend pulsiert. Hier spürst du den echten
        Giants-Spirit: eine Gemeinschaft, die als Giants-Family zusammenhält, anfeuert und jeden
        Touchdown feiert. Ob du eingefleischter Fan bist oder einfach nur gute Football-Action
        suchst – beim Heimspiel bist du mitten drin, statt nur dabei.
      </p>
      <BlueButton />
      <h2 class="text-[28px] font-bold text-[#003867] mt-[40px] mb-[20px]">
        Das erwartet dich bei einem Giants Gameday
      </h2>
      <p class="text-[15px] text-[#003867] mb-[40px]">
        Hier könnte was stehen <br />
        Hier könnte was stehen <br />
        Hier könnte was stehen <br />
        Hier könnte was stehen <br />
        Hier könnte was stehen <br />
      </p>
    </div>
    <SeasonKarte />
    <div class="game-day-bottom px-[80px]">
      <h2 class="text-[28px] font-bold text-[#003867] mt-[40px] mb-[20px]">
        Das erwartet dich bei einem Giants Gameday
      </h2>
      <p class="text-[15px] text-[#003867] mb-[40px]">
        Der Giants Gameday hat ein Zuhause: das ASKÖ Stadion Eggenberg. In der Schlossstraße 20,
        8020 Graz trifft sich die Giants Family, um Football, Emotionen und echten Giants-Spirit zu
        erleben.
      </p>
      <img
        src="@/assets/PageHeroImage.png"
        alt="Stadion Image"
        class="w-full h-auto object-cover mb-[40px]"
      />
      <LastGame />
    </div>
  </div>
</template>

<script setup>
import PageHero from '@/components/PageHero.vue'
import PageHeroImage from '@/assets/PageHeroImage.png'
import BlueButton from '@/components/ui/BlueButton.vue'
import SeasonKarte from '@/components/SeasonKarte.vue'
import LastGame from '@/components/LastGame.vue'
</script>
