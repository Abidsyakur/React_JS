import logo from './logo.svg';
import './App.css';
import './App.css';

function App() {

  return (
   <div className="Parentbox">
    <div className="Foto">
      <img src="img1.png"/>
    </div>
    <div className="Deskripsi">
      <p className="Cate">The Best Headphones</p>
        <h3 className="month">NOVEMBER RELEASE</h3>
        <h4 >Number : <b className="nomer">#878791</b></h4>
      <p className="Info">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </p>
       <p><b>SIZE</b></p>
       <button class="button1">XS</button>
       <button class="button1">S</button>
       <button class="button1">M</button>       
       <button class="button1">L</button>       
        <br></br>
        <button class="button2">BUY NOW</button>
        <button class="button3">ADD TO WHISLIST</button>
        <p class="noted">*Only 1 Available</p>
    </div>
    <div className="Foto">
      <img src="img3.png"/>
    </div>
    <div className="Deskripsi">
      <p className="Cate2"><b>HEADPHONES</b></p>
        <p class="merek">Beats EP</p>
      <p class="deskrip">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </p>
        <div class="line2"></div>
       <p class="color"><b>Color</b></p>
       
       <p class="cable"><b>Cable Configuration</b></p>
       <button class="button11">Straight</button>
       <button class="button11">Coiled</button>
       <button class="button11">Long-coiled</button>             
        <br></br>

        <div class="ques"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" id="icon_help" width="20px">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
</svg> How to configure your headphones

</div>
    <div class="line"></div>
        <b class="harga">148$</b>
        <button class="button4">ADD TO CART</button>
    </div>
   </div>
  );
}


export default App;
