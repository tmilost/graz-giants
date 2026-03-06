<template>
  <div class="teams-card relative h-[361px] w-[270px]">
    <img
      class="block h-full w-full object-cover"
      src="@/assets/TicketImage.jpg"
      alt="Main header image"
    />
    <div
      class="pointer-events-none absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0)] from-[-7.32%] to-black to-[102%]"
    ></div>
    <div
      class="absolute left-1/2 bottom-0 flex w-[90%] -translate-x-1/2 flex-col items-center justify-center text-center text-white leading-[36px] pb-[12px]"
    >
      <div class="flex flex-col flex-wrap items-center gap-[5px] text-center">
        <p
          class="text-[24px] uppercase font-normal normal-case leading-[21px] sm:text-[15px] sm:leading-[28px]"
        >
          Sei live dabei in Actionberg und erlebe <br />
          American Football hautnah!
        </p>
        <p
          class="text-[15px] font-normal normal-case leading-[21px] sm:text-[15px] sm:leading-[15px]"
        >
          Bring gemeinsam mit uns das Askö-Stadion <br />
          zum beben!
        </p>
      </div>
    </div>
  </div>
</template>
