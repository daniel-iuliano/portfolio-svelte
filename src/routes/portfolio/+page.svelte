<script>
  import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
  import { images } from "./imgData.js";
  import { categories } from "./imgData.js";
  
  import ButtonContainer from "./ButtonContainer.svelte";
  import Gallery from "./Gallery.svelte";

  let selected = "all";
  
  const filterSelection = (e) => (selected = e.target.dataset.name);
</script>

<h1>PORTFOLIO</h1>
<main class="main-portfolio">
  <ButtonContainer>
    {#each categories as category}
      <button
        class:active={selected === category}
        class="btn"
        data-name={category}
        on:click={filterSelection}
      >
        {category}
      </button>
    {/each}
  </ButtonContainer>

  <!-- Portfolio Gallery Grid -->
  <Gallery>
    {#each images as { name, url, keyword, descr }}
      {#if selected === "all"}
        <div class="show column">
          <div class="content">
            <img src={url} alt={name} style="width:100%" />
          </div>
        </div>
      {:else}
        <div class:show={selected === keyword} class="column">
          <div class="content">
            <img src={url} alt={name} style="width:100%" />
          </div>
        </div>
      {/if}
    {/each}
  </Gallery>
</main>

<style>
  /* Center website */
  .main-portfolio {
    max-width: 80vw;
    display: flex;
    position: absolute;
    top: 20%;
    left: 15%;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
  }

  h1 {
    padding-top: 5%;
    font-size: 2.8rem;
    font-weight: 100;
    margin: 0 0 10px;
    color: #ffffff;
    text-align: center;
  }

  /* Create three equal columns */
  .column {
    width: 33.33%;
    display: none;
    justify-content: center;
    margin: 0;
  }

  /* Content */
  .content {
    width: 33vw;
    margin: 0 2px;
  }

  img {
    height: 450px;
    object-fit: cover;
    object-position: 90%;
    width: 100%;
    
  }
  @media (max-width: 1088px) {
    .main-portfolio {
    max-width: 90vw;
    display: flex;
    position: absolute;
    top: 20%;
    left: 15%;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
  }
    .column {
    width:50%;
    display: none;
    justify-content: center;
    margin: 0;
  }
    
    .content {
    width: 50vw;
    margin: 0 2px;
  }
  }
  @media (max-width:1088px) {
    .main-portfolio {
      flex-direction: column;
      max-width: 100vw;
    display: flex;
    position: initial;
 
    }
    .column {
    width:100vw;
    display: none;
    justify-content: center;
    margin: 0;
  }

  /* Content */
  .content {
    width: 100vw;
    margin: 0 2px;
  }

  img {
    height: 450px;
    object-fit: cover;
    object-position: 90%;
    width: 100%;
    
  }
  
  }

  /* The "show" class is added to the filtered elements */
  .show {
    display: flex;
  }

  /* Style the buttons */
  .btn {
    width: 150px;
    text-transform: uppercase;
    font-weight: 400;
    font-size: 0.9rem;
    letter-spacing: 1px;
    background-color: rgba(0, 0, 0, 0);
    color: white;
    outline: none;
    margin: 5px;
    padding: 14px 16px 12px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.1s ease-in-out;
  }
  @media (max-width: 688px){
    h1 {
      padding-top: 10%;
    }
    .btn{
    width: 70px;
  }
  }
  /* Add a dark background color to the active button */
  .btn:active,
  .active {
    color: #ffffff;
    border-bottom: 0.2px solid rgba(255, 109, 245, 0.422);
  }
</style>
