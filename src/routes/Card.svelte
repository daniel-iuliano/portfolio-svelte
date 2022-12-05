<script>
    import ButtonContainer from "./portfolio/ButtonContainer.svelte";
    import Slider from "./SliderAbout.svelte"
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->


<div class="card">
  <div class="card-header">
    <img
      class="card-avatar"
      src="images/avatar.png"
      alt="avatar"
    />
    <h1 class="card-fullname">Daniel Iuliano</h1>
    <h2 class="card-jobtitle">UI Developer - FrontEnd Developer</h2>
  </div>
  <div class="card-main">
    <div class="card-section is-active" id="about">
      <div class="card-content">
        <p class="card-desc">
          Art - Music - Web - UI/UX - Crypto - NFT - AI
        </p>
        <div class="card-subtitle">Buenos Aires, Argentina</div>
      </div>
      <div class="card-social">
        <a href="/"
          ><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg></a
        >
        <a href="/"
          ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
            /></svg
          ></a
        >
        <a href="/"
          ><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M301 256c0 24.852-20.148 45-45 45s-45-20.148-45-45 20.148-45 45-45 45 20.148 45 45zm0 0"
            />
            <path
              d="M332 120H180c-33.086 0-60 26.914-60 60v152c0 33.086 26.914 60 60 60h152c33.086 0 60-26.914 60-60V180c0-33.086-26.914-60-60-60zm-76 211c-41.355 0-75-33.645-75-75s33.645-75 75-75 75 33.645 75 75-33.645 75-75 75zm86-146c-8.285 0-15-6.715-15-15s6.715-15 15-15 15 6.715 15 15-6.715 15-15 15zm0 0"
            />
            <path
              d="M377 0H135C60.562 0 0 60.563 0 135v242c0 74.438 60.563 135 135 135h242c74.438 0 135-60.563 135-135V135C512 60.562 451.437 0 377 0zm45 332c0 49.625-40.375 90-90 90H180c-49.625 0-90-40.375-90-90V180c0-49.625 40.375-90 90-90h152c49.625 0 90 40.375 90 90zm0 0"
            /></svg
          ></a
        >
        <a href="/"
          ><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 002.882 0z"
            /></svg
          ></a
        >
      </div>
    </div>
  </div>
  <Slider></Slider>
  <div class="btn-box">
    <button class="btn"> <a href="/contact"> contact me</a></button>
  </div>
  

</div>

<style>

    .btn-box{
      text-align: center;
    }
   .btn {
    width: 150px;
   
    background-color: rgba(0, 0, 0, 0);
  
    outline: none;
    margin: 5px;
    padding: 14px 16px 12px;
    border: none;
    border-bottom: 0.2px solid rgba(255, 109, 245, 0.422);
    border-radius: 10px;
    cursor: pointer;
    transition: 0.1s ease-in-out;
  }
  .btn a{
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 400;
    font-size: 0.9rem;
    letter-spacing: 1px;
    color: white;
  }
  .btn:hover{
    border-bottom: 0.2px solid rgb(255, 254, 255);
  }
    .card{
        position: relative;
        top: 0;
        right: 0;
        z-index: 12;
    }
  .card-header {
    position: relative;
    display: flex;
    height: 300px;
    flex-shrink: 0;
    width: 100%;
    transition: 0.3s;
  }
 

 

  .card-avatar {
    width: 230px;

    box-shadow: 0 8px 8px rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    -o-object-position: center;
    object-position: center;
    -o-object-fit: cover;
    object-fit: cover;
    position: absolute;
    top: 27%;
    left: 50%;
    transform: translateX(-50%) translateY(-64px);
  }

  .card-fullname {
    position: absolute;
    bottom: 0;
    font-size: 44px;
    font-weight: 700;
    text-align: center;
    white-space: nowrap;
    transform: translateY(-10px) translateX(-50%);
    left: 50%;
    color: rgb(255, 255, 255);
  }

  .card-jobtitle {
    position: absolute;
    bottom: 0;
    font-size: 11px;
    white-space: nowrap;
    font-weight: 500;
    opacity: 0.7;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    margin: 0;
    left: 50%;
    transform: translateX(-50%) translateY(-7px);
    color: #fff;
  }

  .card-main {
    position: relative;
    flex: 1;
    display: flex;
    padding-top: 10px;
    flex-direction: column;
  }

  .card-subtitle {
    font-weight: 700;
    font-size: 13px;
    margin-bottom: 8px;
    color: #fff;
    text-align: center;
  }

  .card-content {
    padding: 20px;
  }

  .card-desc {
    line-height: 1.6;
    color: #b2bbc0;
    font-size: 14px;
    margin: 0;
    font-weight: 400;
    font-family: "DM Sans", sans-serif;
  }

  .card-social {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    margin-bottom: 30px;
  }
  .card-social svg {
    fill: #4b6fff;
    width: 16px;
    display: block;
    transition: 0.3s;
 
  }
  .card-social a {
    color: #ffffff;
    height: 32px;
    width: 32px;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s;
    background-color: rgba(93, 133, 193, 0.05);
    border-radius: 50%;
    margin-right: 10px;
    cursor: pointer;
  }
  .card-social a:hover svg {
    fill: #ff61fc;
  }
  .card-social a:last-child {
    margin-right: 0;
  }



  @-webkit-keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translatey(40px);
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translatey(40px);
    }
    100% {
      opacity: 1;
    }
  }

  @media (max-width: 688px){

  .card-fullname {
    font-size: 38px;

  }
  .card-jobtitle {
 
    font-size: 10px;
 
  }
  
  .card-desc {
    line-height: 1.4;
 
    font-size: 11px;

  }
}
</style>
