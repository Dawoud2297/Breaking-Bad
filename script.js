// Theme
const dar = document.getElementById('dark');
const white = document.getElementById('white');
const web = document.getElementById('web');
document.getElementById('dark').addEventListener('click',()=>{
    document.documentElement.style.setProperty('--back-color','#333')
    if(dar){
        web.style.setProperty('color','white')
    }
})
document.getElementById('white').addEventListener('click',()=>{
    document.documentElement.style.setProperty('--back-color','white')
    if(white){
        web.style.setProperty('color','black')
        }
})

// Feching

const api = "https://www.breakingbadapi.com/api/characters";

async function getData(){
    try{
        const response = await fetch(api)
        const data = await response.json()
        console.log(data[0])
        reqData(data)
    }catch(err){
        document.write(err.message)
    }
}
async function reqData(data){
    const select = document.getElementById('select');
    select.innerHTML = `
    <select class="form-control btn-outline-dark" onchange="getChar(this.value)">
    <option>Choose your character</option>
    ${data.map(char=>`<option>${char.name}</option>`)}
    `
}

async function getChar(name){
    if(name !== "Choose your character"){
        const res = await fetch(`${api}?name=${name}`)
        const data = await res.json()
        const content = document.getElementById('content');
        content.innerHTML = `
        <h1>${data[0].name} (${data[0].nickname}) </h1>
        <h3>${data[0].portrayed}</h3>
        <img src="${data[0].img}" width="250">
        <h2 class="text-muted">${data[0].birthday}</h2>
        <h5>${data[0].status}</h5>
        `
    }
}
getData()