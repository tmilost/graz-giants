<template>
    <div class="our-partners">
        <div class="our-partners-title">Unsere Partner</div>
        <div class="our-partners-images">
            <img src="../assets/partner1.svg" alt="Unsere Partner" />
            <img src="../assets/partner2.svg" alt="Unsere Partner" />
            <img src="../assets/partner3.svg" alt="Unsere Partner" />
            <img src="../assets/partner4.svg" alt="Unsere Partner" />
            <img src="../assets/partner5.svg" alt="Unsere Partner" />
            <img src="../assets/partner6.svg" alt="Unsere Partner" />
        </div>
        <div class="our-partners-text">Werde jetzt Teil der Giants-Family</div>
        <button class="our-partners-button">Jetzt Tickets kaufen</button>
    </div>
</template>

<style>
.our-partners {
    display: flex;
    height: 90px;
    align-items: center;
    flex-shrink: 0;
    flex-direction: column;
    gap: 50px;
}

.our-partners-title {
    color: #003867;
    text-align: center;
    font-family: 'Bree Serif-Giants';
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: 39.2px;
    /* 140% */
    text-transform: uppercase;
}

.our-partners-images {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    gap: 24px;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 10px;
}

.our-partners-text {
    color: #003867;
    text-align: center;
    font-family: 'Bree Serif-Giants';
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 33.6px;
    text-transform: uppercase;
}

.our-partners-button {
    border: 0;
    border-radius: 20px;
    padding: 10px 20px;
    background: #003867;
    color: #fab900;
    font-family: Roboto;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    width: 178px;
}
</style>
