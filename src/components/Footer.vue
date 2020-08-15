<template>
  <footer class="footer">
    <p>
      Aplicația a fost dezvoltată in cadrul evenimentului
      <span>Tabăra de vară 2020 (Ediția Digitală)</span>
    </p>
    <ul>
      <li>
        <a href="https://www.facebook.com/GirlsGoIT/">Facebook</a>
      </li>
      <li>
        <a href="https://www.youtube.com/channel/UCixmUgWhEp5Sj7kpzc6ZOTg">Youtube</a>
      </li>
      <li>
        <a href="https://instagram.com/girlsgoit?igshid=lp20ohcww4b0">Instagram</a>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
.footer {
  background-color: #fafafa;
  padding: 40px;
}
.footer p {
  text-align: center;
  width: 100%;
  height: 70px;
  color: #979797;
  font-family: "Roboto", sans-serif;
}

.footer ul {
  display: flex;
  flex-direction: row;
  list-style-type: none;
  margin: 0;
  padding: 0;
  justify-content: center;
}
.footer ul li {
  padding: 0 10px;
}
.footer a {
  text-decoration: none;
  color: #979797;
  font-family: "Roboto", sans-serif;
}

.footer p span {
  margin-left: 3px;
  font-weight: bold;
}

@media screen and (max-width: 700px) {
  .footer {
    text-align: center;
    align-items: center;
  }
  .footer ul {
    flex-direction: column;
  }
  .footer p {
    flex-direction: column;
  }
}
</style>

