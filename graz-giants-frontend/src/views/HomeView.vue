<script setup>
import MainHeader from '../components/MainHeader.vue'
import ContentSpacing from '../components/ui/ContentSpacing.vue'
import GiantsEventsSpacer from '../components/GiantsEventsSpacer.vue'
import TicketsSection from '../components/TicketsSection.vue'
import SeasonKarte from '../components/SeasonKarte.vue'
import LastGame from '../components/LastGame.vue'
import GameTable from '../components/GameTable.vue'
import OurPartners from '../components/OurPartners.vue'
import GiantsNews from '../components/GiantsNews.vue'
import NewsLetter from '../components/NewsLetter.vue'
import GiantsSocialMedia from '../components/GiantsSocialMedia.vue'
</script>

<template>
  <main>
    <MainHeader />
    <GiantsEventsSpacer />
    <TicketsSection />
    <ContentSpacing />
    <SeasonKarte />
    <ContentSpacing />
    <LastGame />
    <ContentSpacing />

    <GameTable />
    <ContentSpacing />
    <OurPartners />
    <ContentSpacing />
    <GiantsNews />
    <ContentSpacing />
    <NewsLetter />
    <ContentSpacing />
    <div class="pb-[80px]">
      <GiantsSocialMedia />
    </div>
  </main>
</template>
