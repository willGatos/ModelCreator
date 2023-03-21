import "./App.css"
import QRCodeComponent from "./Components/QRCodeComponent"
import MyDocument from "./Components/DocumentGenerator"

export default function App() {


  return(<>
   <div class="container">
      <div class="header">HEADER</div>
      <div class="cell">1</div>
      <div class="cell">2</div>
      <div class="cell">3</div>
      <div class="cell">4</div>
      <div class="cell">5</div>
      <div class="cell">6</div>
      <div class="cell">7</div>
      <div class="cell">8</div>
      <div class="cell">9</div>
      <div class="cell">10</div>
      <div class="cell">11</div>
      <div class="cell">12</div>
      <div class="cell">13</div>
      <div class="cell">14</div>
    </div>
  <MyDocument/>
  </>
       
      
  )
}