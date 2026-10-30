const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
function load() {
  const elements = new Map();
  function element() { return {textContent:'',disabled:false,dataset:{},style:{},tagName:'BODY',clientWidth:600,handlers:{},addEventListener(name, fn){this.handlers[name]=fn},append(){},remove(){},replaceChildren(){}}; }
  const buttons = Array.from({length:3}, element);
  const document = {hidden:false,handlers:{},querySelector(selector){if(!elements.has(selector))elements.set(selector,element());return elements.get(selector)},querySelectorAll(){return buttons},createElement:element,addEventListener(name,fn){this.handlers[name]=fn}};
  const context = vm.createContext({document,Math,console,requestAnimationFrame:()=>1,cancelAnimationFrame:()=>{}});
  vm.runInContext(fs.readFileSync(__dirname+'/script.js','utf8'),context);
  return {run:code=>vm.runInContext(code,context),document,buttons};
}
test('all nine move pairs follow the rules',()=>{
  for(const p of ['rock','paper','scissors'])for(const c of ['rock','paper','scissors']){
    const app=load();app.run(`playRound('${p}','${c}')`);
    const win={rock:'scissors',paper:'rock',scissors:'paper'}[p]===c;
    assert.equal(app.run('playerScore'),win?1:0);
    assert.equal(app.run('computerScore'),p!==c&&!win?1:0);
  }
});
test('first to five stops scoring; restart resets and re-enables buttons',()=>{
  const a=load();a.run("for(let i=0;i<8;i++)playRound('rock','scissors')");
  assert.equal(a.run('playerScore'),5);assert.ok(a.buttons.every(b=>b.disabled));
  a.document.querySelector('#restart').handlers.click();assert.equal(a.run('playerScore'),0);assert.ok(a.buttons.every(b=>!b.disabled));
});
test('computer can win after tied rounds',()=>{const a=load();a.run("for(let i=0;i<3;i++)playRound('rock','rock');for(let i=0;i<5;i++)playRound('rock','paper')");assert.equal(a.run('computerScore'),5);assert.match(a.document.querySelector('#results').textContent,/Computer wins the game/)});
