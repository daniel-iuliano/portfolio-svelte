<script>
  import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
  import { imgDb } from "../../src/firebase";

  const storage = getStorage();
  let currentIndex = 0;
  const images = ["images/img1.jpg"];
  // Create a reference under which you want to list
  const listRef = ref(storage, "latest-works");

  listAll(listRef)
    .then((res) => {
      res.items.forEach(async (itemRef) => {
        const url = await getDownloadURL(itemRef);
        
        images.push(url);
        return images;
      });
    })
    .catch((error) => {
      console.log(error);
    });

  function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    
  }

  setInterval(changeImage, 2000);
</script>

<div >
  <img src={images[currentIndex]} alt=""  />
</div>

<style>
  div {
    height: 100%;
    background-color: #fff;
    width: 100%;
  }
  img {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50%;
    min-height: 100%;
    border-bottom-right-radius: 500px;
    object-fit: cover;
    object-position: 50% 100%;
    transition: all 0.5s ease-in-out;
 
  }
  @media (max-width: 688px) {
    img  {
      display: flex;
      border-bottom-right-radius: 0px;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      opacity: 0.2;
    }
 

  }

</style>
