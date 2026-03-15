<template>
  <div class="sponsors-page">
    <PageHero :imageUrl="PageHeroImage" />
    <div class="flex flex-col mx-[80px] mt-[30px] mb-[50px]">
      <h2
        class="text-[50px] text-[#003867] font-normal uppercase leading-[50px] text-left mb-[30px]"
      >
        Sponsoring
      </h2>
      <p class="text-[#003867] text-[15px] font-normal leading-[20px]">
        Die Graz Giants stehen für Leidenschaft, Reichweite und eine starke Community. Als
        traditionsreicher Verein mit Teams von Nachwuchs bis Kampfmannschaft, Flag Football,
        Cheerleading und Powerlifting bieten wir Sponsoren eine attraktive Plattform, um ihre Marke
        emotional, authentisch und zielgruppengenau zu präsentieren. Unsere Heimspiele, Events und
        digitalen Kanäle erreichen Fans weit über Graz hinaus.
      </p>
      <p class="text-[#003867] text-[15px] font-normal leading-[20px]">
        Eine Partnerschaft mit den Graz Giants bedeutet mehr als klassische Werbung: Sie ist ein
        Bekenntnis zu Teamgeist, Nachwuchsförderung und regionalem Engagement. Gemeinsam entwickeln
        wir individuelle Sponsoring-Pakete, die Sichtbarkeit schaffen, Werte transportieren und
        nachhaltige Verbindungen zwischen Unternehmen, Fans und der Giants Family aufbauen.
      </p>
      <p class="text-[#003867] text-[28px] font-normal leading-[20px] my-[30px]">Kontaktperson</p>
      <div class="flex flex-row">
        <!-- // to do list -->
        <img
          src="@/assets/hamburgerIcon.svg"
          alt="sponsor image"
          class="w-[220px] h-[261px] object-cover mr-[30px]"
        />
        <div class="flex flex-col">
          <p class="text-[#003867] text-[15px] font-normal leading-[20px]">Johannes Mörth</p>
          <p class="text-[#003867] text-[15px] font-normal leading-[20px]">
            Geschäftsführung, Vorstandsmitglied
          </p>
          <p class="text-[#003867] text-[15px] font-normal leading-[20px]">+43 664 123 45 67</p>
          <p class="text-[#003867] text-[15px] font-normal leading-[20px]">
            johannes.moerth@grazgiants.at
          </p>
        </div>
      </div>
      <p class="text-[#003867] text-[28px] font-normal leading-[20px] my-[30px]">Kontaktperson</p>
      <p class="text-[#003867] text-[15px] font-normal leading-[20px]">
        Die Graz Giants stehen für Leidenschaft, Reichweite und eine starke Community. Als
        traditionsreicher Verein mit Teams von Nachwuchs bis Kampfmannschaft, Flag Football,
        Cheerleading und Powerlifting bieten wir Sponsoren eine attraktive Plattform, um ihre Marke
        emotional, authentisch und zielgruppengenau zu präsentieren. Unsere Heimspiele, Events und
        digitalen Kanäle erreichen Fans weit über Graz hinaus.
      </p>
      <div class="w-fit mt-[30px]">
        <BlueButton :text="'Seasonkarte Bestellen'" href="#" />
      </div>
    </div>
  </div>
</template>

<script setup>
import PageHeroImage from '@/assets/PageHeroImage.png'
import PageHero from '../components/PageHero.vue'
import BlueButton from '@/components/ui/BlueButton.vue'
</script>
