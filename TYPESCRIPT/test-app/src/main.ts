import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

//const bntDom=document.getElementById('btnMagia') as HTMLButtonElement;
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Holiwiiis</h1>
    <button id="btnMagia">Magia</button>
  </div>
`
const bntDom=document.getElementById('btnMagia') as HTMLButtonElement;
console.log(bntDom);
bntDom.addEventListener("click",()=>{
  alert("Chauchis")
})
