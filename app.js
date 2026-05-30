
let code='',result='';
const map={'・':'ヘ','－':'ム','・－':'イ'};
const cur=document.getElementById('currentCode');
const res=document.getElementById('result');
function draw(){cur.textContent=code;res.textContent=result;}
let start=0;
const btn=document.getElementById('keyButton');
btn.addEventListener('touchstart',()=>start=Date.now());
btn.addEventListener('touchend',()=>{const t=Date.now()-start;code+=t<250?'・':'－';draw();});
btn.addEventListener('dblclick',()=>{if(map[code]) result+=map[code]; code=''; draw();});
draw();
