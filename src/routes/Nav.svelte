<nav class="nav-bar">
    <div>
      <li>
        <a class="nav-link" href="./">home</a>
      </li>
      <li>
        <a class="nav-link"  href="./about">about</a>
      </li>
      <li>
        <a class="nav-link"  href="./portfolio">portfolio</a>
      </li>
      <li>
        <a class="nav-link"  href="./works">works</a>
      </li>
      <!-- <li>
        <a class="nav-link"  href="./nft">NFT</a>
      </li> -->
    </div>

  </nav>

  <style>
   .nav-bar {
    position:fixed;
    bottom:0;
    width: 100%;
    display: flex;
    justify-content:flex-end;
    height: 41px;
    background-color: #141526;
    list-style: none;
    margin-top:25px;
    padding: 0 30px;
    -webkit-box-shadow: -4px 10px 10px -10px rgba(255, 109, 245, 0.422);
    -moz-box-shadow: -4px 10px 10px -10px rgba(255, 109, 245, 0.422);
    box-shadow: -4px 10px 10px -10px rgba(255, 109, 245, 0.422);
    border-top:0.2px solid rgba(255, 109, 245, 0.422);
    z-index:10;
   
    
  }
  @media (max-width: 688px) {
    .nav-bar{
      justify-content:center;
    }
}

  .nav-bar div {
    
    display: flex;
    align-items: center;
  }

  .nav-bar li {
    margin: 0 10px;
    display: flex;
    align-items: center;
  }

  .nav-bar li .nav-link  {
    position: relative;
    text-decoration: none;
    color: rgb(255, 255, 255);
    font-weight: 600;
    font-size: 0.8rem;
    text-transform: uppercase;

  }

  .nav-bar li .nav-link:hover {
    color: #eee;
  }


  .nav-bar li .nav-link:hover::after{
    position: absolute;
    content: "";
    bottom: 3%;
    right: 0;
    width: 100%;
    height: 2px;
    background-color: rgb(255, 55, 242);
  }


 </style>
 