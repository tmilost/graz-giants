<template>
    <div class="tickets-section">
        <img src="../assets/ticketsImage.png" alt="tickets image" />
        <div class="tickets-section-box">
            <p class="title">Tickets</p>
            <p class="text">
                Sei live dabei in Actionberg und erlebe<br />
                American Football hautnah!
                <br />
                <br />
                Bring gemeinsam mit uns das Askö-Stadion <br />zum beben!
            </p>
            <button class="button">Jetzt Tickets kaufen</button>
        </div>
    </div>
</template>

<style scoped>
img {
    display: block;
    object-fit: cover;
    min-height: 379px;
    width: 100%;
    height: auto;
}

@media screen and (max-width: 390px) {
    img {
        display: none;
    }
}

.tickets-section {
    height: 379px;
    position: relative;
}

.tickets-section-box {
    position: absolute;
    width: 475px;
    height: 322px;
    top: 28px;
    right: 80px;
    background: rgba(255, 255, 255, 0.9);
    padding: 30px;
}

@media screen and (max-width: 390px) {
    .tickets-section {
        align-items: center;
    }

    .tickets-section-box {
        background: transparent;
        top: 0;
        right: 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}

.title {
    color: #003867;
    text-align: left;
    font-family: 'Bree Serif-Giants';
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: 39.2px;
    /* 140% */
    text-transform: uppercase;
    padding-bottom: 40px;
}

.text {
    color: #003867;

    font-family: Roboto;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 21px;
    /* 140% */
    padding-bottom: 40px;
}

.button {
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
