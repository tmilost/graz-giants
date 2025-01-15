<template>
  <div class="footer">
    <div class="logo">
      <img src="../assets/GiantsLogo.svg" alt="giants logo" />
    </div>
    <div class="footer-middle">
      <div class="content">
        <p>Kontaktdaten</p>
        <p>Adresse: Schloßstraße 20, 8020 Graz</p>

        <p>E-Mail: office@grazgiants.at</p>

        <a href="google.com">Weitere Kontaktdaten</a>
      </div>
      <div class="content">
        <p>Extrene Links</p>
        <div class="footer-logo">
          <img src="../assets/FooterLogo1.svg" alt="ÖCCV logo" />
          <img src="../assets/FooterLogo2.svg" alt="AFBÖ logo" />
        </div>
      </div>
    </div>
    <div class="copyright">
      <div class="copyright-left">
        <a href="">Impressum</a>
        <a href="">Datenschutz</a>
      </div>
      <div class="copyright-middle">Copyright © 2024 Thalheim Graz Giants</div>
      <div class="copyright-right">
        <img src="../assets/FBIcon.svg" alt="FB Icon" />
        <img src="../assets/InstaIcon.svg" alt="Insta Icon" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer {
  margin-top: 75px;
  padding: 40px 80px;
  background: #003867;
}

.logo {
  padding-bottom: 80px;
}

.footer-middle {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.content {
  display: flex;
  flex-direction: column;
  width: 290px;
}

.content p:first-child {
  color: #fff;
  text-align: left;
  font-family: 'Bree Serif-Giants';
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  /* 116.667% */
  text-transform: uppercase;
  margin-bottom: 30px;
}

.content p:not(:first-child) {
  color: #fff;
  font-family: Roboto;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  /* 140% */
}

.content a {
  color: #fff;
  font-family: Roboto;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 21px;
  /* 140% */
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: none;
  text-decoration-thickness: auto;
  text-underline-offset: auto;
  text-underline-position: from-font;

  margin: 30px 0 80px 0;
}

.footer-logo {
  width: 125px;
  height: 20px;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
}

.footer-logo img:first-child {
  margin-right: 45px;
}

.copyright {
  border-top: 1px solid #fff;
  display: flex;
  flex-direction: row;

  color: #fff;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  /* 175% */
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: none;
  text-decoration-thickness: auto;
  text-underline-offset: auto;
  text-underline-position: from-font;
  text-transform: uppercase;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 30px;
}

.copyright-right img {
  width: 20px;
  height: 20px;
}

.copyright-right img:first-child {
  margin-right: 20px;
}
</style>
