<script>
  import Card from "./Card.svelte";

  import Carrousel from "./Carrousel.svelte";

</script>

<div
  class="card-cover"
  style="background-image: url('https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80')"
/>
<div class="container">
  <div id="r" class="box">
 
    <div class="carrusel">
      <Carrousel />
      <h3>Latest Works</h3>
    </div>
  </div>
  <div class="box">
    <Card />
 
  </div>
</div>

<style>
  .container {
    width: 100%;
    margin: 10px auto;
    height: 100%;
    margin: auto;
    display: flex;
  }
  .box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
  }
  h3{
    position: absolute;
    bottom: 5%;
    left: 0;
    color: aliceblue;
    z-index: 555;
    font-size: 2rem;
  }
  

  @media (max-width: 688px) {
    .box {
      display: flex;

      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
    }
 
    #r {
      position: absolute;
     
    }
    h3{
    display: none;
  }
  }

  @-webkit-keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
    0% {
      opacity: 0;
    }
  }
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  /* .fade-in {
    -webkit-animation: fade-in 4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    animation: fade-in 4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  } */
</style>
