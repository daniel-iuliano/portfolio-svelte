<script>
    export let open = false;
      import { slide } from 'svelte/transition';
      const handleClick = () => open = !open
  </script>
  
  <div class="accordion">
      <div class="header">
          <div class="text">
              <slot name="head"></slot>	
          </div>
          
          <button class="btn" on:click={handleClick} >
              +
          </button>
      </div>
      
      {#if open}
      <div class="details" transition:slide>
          <slot name="details">
          </slot>
      </div>
      {/if}
  </div>
  
  <style>
      div.accordion {
   
          margin:  auto;
          padding: 1rem 1rem;
          border-bottom: 0.2px solid rgba(255, 109, 245, 0.422);
      }
      
      div.header {
          display:flex;
          width:100%;
          color: aliceblue;
      }
      
      div.header .text {
          flex: 1;
          margin-right: 5px;
      }
      
      div.details {
            color: aliceblue;
          padding:1rem;
          font-weight: 200;
      }

      .btn{
        background-color: transparent;
        border: none;
        color: deeppink;
        cursor: pointer;
      }
  </style>