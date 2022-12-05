
<div class="quote">
    <q class="item-1">+10 years of experience recording and mixing music </q>
    
    <q class="item-2">+2 years of experience building js websites</q>
    
    <q class="item-3">Currently learning Svelte and AI</q>

</div>


<style>
.quote{
    display: flex;
    justify-content: center;
    align-items: center;
}


  .item-1,
  .item-2,
  .item-3 {
    position: absolute;
 

    color: aliceblue;
    font-size: 0.7rem;

    animation-duration: 10s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
  }

  .item-1 {
    animation-name: anim-1;
  }

  .item-2 {
    animation-name: anim-2;
  }

  .item-3 {
    animation-name: anim-3;
  }


  @keyframes anim-1 {
    0%,
    8.3% {
  
      opacity: 0;
    }
    8.3%,
    25% {
   
      opacity: 1;
    }
    33.33%,
    100% {
     
      opacity: 0;
    }
  }

  @keyframes anim-2 {
    0%,
    33.33% {
      
      opacity: 0;
    }
    41.63%,
    58.29% {
    
      opacity: 1;
    }
    66.66%,
    100% {
    
      opacity: 0;
    }
  }

  @keyframes anim-3 {
    0%,
    66.66% {
     
      opacity: 0;
    }
    74.96%,
    91.62% {

      opacity: 1;
    }
    100% {
    
      opacity: 0;
    }
  }

</style>
