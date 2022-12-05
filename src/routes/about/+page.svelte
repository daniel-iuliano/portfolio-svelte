<script>
  import Accordion from "./Accordion.svelte";
</script>

<div class="container">
  <h1 class="tracking-in-expand">A LITTLE BIT ABOUT ME</h1>
  <Accordion>
    <span slot="head">What is my name?</span>
    <div slot="details">
      <p>Hello, my name is Daniel</p>
    </div>
  </Accordion>
  
  <Accordion>
    <span slot="head">Where am I from?</span>
    <div slot="details">
      <p>I am a designer from Argentina</p>
    </div>
  </Accordion>
  
  <Accordion>
    <span slot="head">What is my vision?</span>
    <div slot="details">
      <p> "I like art, my point of view and my vision is to try to do everything
        possible to show people something perfect. Have you seen today's websites?
        Cookie popups appear everywhere, and popups "please give me your email"
        "subscribe to the newsletter", make it impossible to navigate the current
        web. I would like to change that and make the web more friendly and easy to
        use. In addition, have you heard the new songs? Many of them sound almost
        the same and that gets boring. I would like to bring new ideas and concepts
        to music and make it sound fresh and exciting. I would also like to improve
        the branding design of large companies, as many of them lack attractive and
        effective design. I want to be a designer who helps companies stand out and
        communicate their message clearly and effectively. Currently I am learning
        Svelte and trying to improve my programming skills to develop more robust
        and sophisticated web applications. I also want to continue exploring the
        world of design and discover new ways to use my skills and talents to help
        people and make a difference in the world. If you want to join me on this
        adventure, do not hesitate to contact me. Together, we can make the world of
        design a better place."</p>
    </div>
  </Accordion>
  <Accordion>
    <span slot="head">What are my skills?</span>
    <div slot="details">
      <p>From a young
        age, not only I have always been fascinated by creativity and technology, but also I have
        dedicated my life to learning and developing my skills in these fields. Besides, I
        have experience in a wide range of disciplines related to design and
        technology, including web design, front-end development, graphic design,
        music production, recording, digital marketing, SEO, programming, and
        user interface design.</p>
    </div>
  </Accordion>
  <Accordion>
    <span slot="head">What about me?</span>
    <div slot="details">
      <p> I enjoy drawing, playing video games, making music,
        eating pizza, and I can greet people in English, Spanish, and Italian.
        Currently, I am learning Svelte and trying to improve my programming skills.
        I have a great ability to solve problems and think logically and
        systematicall</p>
    </div>
  </Accordion>
  <Accordion>
    <span slot="head">Do you want to see my portfolio?</span>
    <div slot="details">
      <p>You can check it out <a class="nav-link"  href="./portfolio">here</a> </p>
    </div>
  </Accordion>
  
 
</div>
<style>
   .container {
    width: 90%;
    margin: auto;
    padding: 110px;
    
  }
  h1{
    color: aliceblue;
  }
  .nav-link {
    color: deeppink;
    font-weight: 600;
    font-size: 0.8rem;
    text-transform: uppercase;
    text-decoration: none;
  }
  @media (max-width: 688px) {
    .container {
      width: 95%;
      margin: auto;
      padding: 50px 10px;
    }
  }

  .tracking-in-expand {
	-webkit-animation: tracking-in-expand 0.5s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
	        animation: tracking-in-expand 0.5s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
}
@keyframes scale-in-ver-center {
  0% {
    -webkit-transform: scaleY(0);
            transform: scaleY(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: scaleY(1);
            transform: scaleY(1);
    opacity: 1;
  }
}
@-webkit-keyframes tracking-in-expand {
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}
@keyframes tracking-in-expand {
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}
</style>
<!-- <div class="container ">
  <h1 class="tracking-in-expand">A LITTLE BIT ABOUT ME</h1>

  <p class="scale-in-ver-center">
    Hello, my name is Daniel and I am a designer from Argentina. From a young
    age, not only I have always been fascinated by creativity and technology, but also I have
    dedicated my life to learning and developing my skills in these fields. Besides, I
    have experience in a wide range of disciplines related to design and
    technology, including web design, front-end development, graphic design,
    music production, recording, digital marketing, SEO, programming, and
    user interface design. I enjoy drawing, playing video games, making music,
    eating pizza, and I can greet people in English, Spanish, and Italian.
    Currently, I am learning Svelte and trying to improve my programming skills.
    I have a great ability to solve problems and think logically and
    systematically. This allows me to analyze and understand the needs of my
    clients and develop creative and effective solutions to their problems. I
    also have communication and teamwork skills, which enable me to work
    efficiently and collaboratively with other professionals in the field of
    design and technology. I have
    developed attractive and user-friendly websites, and I have created
    impactful and effective pieces of graphic design. In addition, I have produced and
    recorded music for different artists and projects, and I have specialized in
    mixing and mastering songs to achieve the perfect sound. In the future, I
    would like to continue working on interesting and challenging projects in
    the field of design and technology. I want to continue learning and
    improving my skills to continue developing creative and
    effective solutions for my clients. To sum up, I want to continue exploring the
    world of design and the adventures it offers, and continue discovering new
    ways to use my skills and talents to help people and make a difference in
    the world.
  </p>
  <br />
  <br />
  <h2 class="tracking-in-expand">VISION</h2>
  <p class="scale-in-ver-center">
    "I like art, my point of view and my vision is to try to do everything
    possible to show people something perfect. Have you seen today's websites?
    Cookie popups appear everywhere, and popups "please give me your email"
    "subscribe to the newsletter", make it impossible to navigate the current
    web. I would like to change that and make the web more friendly and easy to
    use. In addition, have you heard the new songs? Many of them sound almost
    the same and that gets boring. I would like to bring new ideas and concepts
    to music and make it sound fresh and exciting. I would also like to improve
    the branding design of large companies, as many of them lack attractive and
    effective design. I want to be a designer who helps companies stand out and
    communicate their message clearly and effectively. Currently I am learning
    Svelte and trying to improve my programming skills to develop more robust
    and sophisticated web applications. I also want to continue exploring the
    world of design and discover new ways to use my skills and talents to help
    people and make a difference in the world. If you want to join me on this
    adventure, do not hesitate to contact me. Together, we can make the world of
    design a better place."
  </p>
</div>

<style>
  :global(body) {
    color: aliceblue;
  }

  .container {
    width: 90%;
    margin: auto;
    padding: 110px;
    
  }
  @media (max-width: 688px) {
    .container {
      width: 95%;
      margin: auto;
      padding: 50px 10px;
    }
  }
  .scale-in-ver-center {
	-webkit-animation: scale-in-ver-center 0.2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: scale-in-ver-center 0.2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
  .tracking-in-expand {
	-webkit-animation: tracking-in-expand 0.5s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
	        animation: tracking-in-expand 0.5s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
}
@keyframes scale-in-ver-center {
  0% {
    -webkit-transform: scaleY(0);
            transform: scaleY(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: scaleY(1);
            transform: scaleY(1);
    opacity: 1;
  }
}
@-webkit-keyframes tracking-in-expand {
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}
@keyframes tracking-in-expand {
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}
</style> -->
