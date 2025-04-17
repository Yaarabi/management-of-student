
let db = []
// let note =[]
let btnSubmit = document.getElementById('Submit')
btnSubmit.addEventListener('click', function (){
    let Name=document.getElementById('name').value
    let Num=document.getElementById('groupe').value
    let Note=document.getElementById('note').value
    let Emai=document.getElementById('email').value
    if(!(Name=='' || Num==0 || Note=='' || Emai=='' || !(Note>=10 && Note<=20 ) && !(Note>=0 && Note<10 )  )){

    document.getElementById('form').style.display='none';
    document.getElementById('Submit').style.display='none';
    document.getElementById('list').style.display='flex';
}else{
    if(Name==''){
        document.getElementById('name').style.borderColor='red'
        document.getElementById('nameTitle').style.color='red'
        document.getElementById('name').style.backgroundColor='rgb(253, 197, 197)'
    }else{
        document.getElementById('name').style.borderColor='green'
        document.getElementById('nameTitle').style.color='black'
        document.getElementById('name').style.backgroundColor='white'
    }
    if(Num==0){
        document.getElementById('groupe').style.borderColor='red'
        document.getElementById('groupeTitle').style.color='red'
        document.getElementById('groupe').style.backgroundColor='rgb(253, 197, 197)'
    }else{
        document.getElementById('groupe').style.borderColor='green'
        document.getElementById('groupeTitle').style.color='black'
        document.getElementById('groupe').style.backgroundColor='white'
    }
    if(Note=='' || !(Note>=10 && Note<=20 ) && !(Note>=0 && Note<10 )){
        document.getElementById('note').style.borderColor='red'
        document.getElementById('noteTitle').style.color='red'
        document.getElementById('note').style.backgroundColor='rgb(253, 197, 197)'
    }
    else{
        document.getElementById('note').style.borderColor='green'
        document.getElementById('noteTitle').style.color='black'
        document.getElementById('note').style.backgroundColor='white'
    }
    if(Emai==''){
        document.getElementById('email').style.borderColor='red'
        document.getElementById('email').style.backgroundColor='rgb(253, 197, 197)'
        document.getElementById('emailTitle').style.color='red'
    }else{
        document.getElementById('email').style.borderColor='green'
        document.getElementById('emailTitle').style.color='black'
        document.getElementById('email').style.backgroundColor='white'
    }
}
})

let btnAdd  = document.getElementById('addStu')
btnAdd.addEventListener('click', function (){
    document.getElementById('form').style.display='flex';
    document.getElementById('Submit').style.display='block';
    document.getElementById('list').style.display='none';
    document.getElementById('userList').style.visibility= 'visible';
    document.getElementById('filterList').style.visibility= 'hidden';
    for (let i=0; i<4; i++){
        document.querySelectorAll('label')[i].style.color='black'
        document.querySelectorAll('input')[i].style.borderColor='green'
        document.querySelectorAll('input')[i].style.backgroundColor='white'
        document.querySelectorAll('input')[i].value=''
    }
})

btnSubmit.addEventListener('click', function(){

    let Name=document.getElementById('name').value
    let Num=document.getElementById('groupe').value
    let Note=document.getElementById('note').value
    let Emai=document.getElementById('email').value
    if(!(Name=='' || Num==0 || Note==''  || Emai=='' || !(Note>=10 && Note<=20 ) && !(Note>=0 && Note<10 )  )){
        // if(document.getElementById('userList').style.display='none'){
        //     document.getElementById('userList').style.display='block';
        // }
    function insert () {
        let obj = {
            fullName: document.getElementById("name").value,
            groupNum: document.getElementById("groupe").value,
            exameNote: document.getElementById("note").value,
            thereEmail: document.getElementById("email").value
        }
        db.push(obj)
        console.log(obj);
        console.log(db);
        return obj
    }
    
    if (db.length>6){
        document.querySelector('body').style.height= '120vh'
        document.getElementById('list').style.height= '120vh'
    }
    if (db.length>12){
        document.querySelector('body').style.height= '160vh'
        document.getElementById('list').style.height= '160vh'
    }
    let tr = document.createElement("tr")
    if (db.length%2>0){

        tr.style.backgroundColor = 'rgb(129, 129, 129)';

    }else{

        tr.style.backgroundColor = 'rgb(223, 221, 221)';
        tr.style.color='black'

    }
    document.getElementById('userList').appendChild(tr)
    let data = insert()
    let {fullName, groupNum, thereEmail,exameNote}=data;
    

    let stud= [,fullName, groupNum, thereEmail,exameNote]
        document.getElementById('placeName').textContent=fullName
        function statut(){
        let statuPlace = document.getElementById('placeStatut')
        if(exameNote>=10 && exameNote<=20 ){
            return statuPlace.textContent='You have being success 😜'
        }
        if(exameNote>=0 && exameNote<10 ){
            return statuPlace.textContent='You have being failed ​😥​'
        }
    }
    statut()

    // let noteStud = parseInt(exameNote)
    //     note.push(noteStud)
    //     note.sort()
    //     let ord = note.indexOf(noteStud)
    //     console.log(note);
    //     console.log(ord);


    for(let i =0; i<7; i++){
        let td = document.createElement('td')
        tr.appendChild(td);
        td.style.textAlign='center'
        // td.style.order= -ord
        
        if (i==0){
            td.textContent=db.length
        }else 
        if(i==5){
            
            
            if (exameNote>=0 && exameNote<10){
            td.textContent= 'Failed ​😥'
            }else if(exameNote>=10 && exameNote<12){
                td.textContent= 'Acceptable ​🙂​'
            }else if(exameNote>=12 && exameNote<14){
                td.textContent= 'Average ​😛​​'
            }else if(exameNote>=14 && exameNote<18){
                td.textContent= 'Good ​🤗😜​🔥​​'
            }else if(exameNote>=14 && exameNote<18){
                td.textContent= 'Very good ​😜​🔥​​'
            }else {
                td.textContent= 'Excellent ​🤪​✅​​'
            }
        }else if(i==6){
            td.innerHTML='<img class="edit" src="edit.png" alt="Filter Icon" style="height: 15px;"><img class="delet" src="bin.png" alt="Filter Icon" style="height: 15px;">'
            td.backgroundColor='rgb(223, 221, 221)'
            // td.style.height='10%'
        }else{
            td.textContent=stud[i]
        }
    }

    }
    else{
            alert('Tji 3ndi nchrbk l9ahwa ❌​... Update input ❌​')
        }
    if (db.length<2){
        document.getElementById('img').style.visibility='hidden'
    }else{
        document.getElementById('img').style.visibility='visible'
    }
    
    
    
})
    








// const Edit = document.getElementsByClassName('edit')
// by event target
document.addEventListener('click', function (event) {
    if (event.target.classList.contains('edit')) {
        document.getElementById('update').style.visibility = 'visible';
        let row = event.target.closest('tr');
        let index=row.querySelector('td').textContent
        console.log(index);
        let save =document.getElementById('save')
        save.onclick=function(){
            let Name=document.getElementById('newName').value
            let Num=document.getElementById('newGroupe').value
            let Note=document.getElementById('newNote').value
            let Emai=document.getElementById('newEmail').value
            db[index-1].fullName=Name;
            db[index-1].groupNum=Num;
            db[index-1].exameNote= Note;
            db[index-1].thereEmail=Emai;
            console.log(db[index-1]);
            console.log(db);
            let trow = document.querySelectorAll('tr')[index]
            let tdata = trow.querySelectorAll('td')
            tdata[1].textContent= Name
            tdata[2].textContent= Num
            tdata[3].textContent= Emai
            tdata[4].textContent= Note
            if (Note>=0 && Note<10){
                tdata[5].textContent= 'Failed ​😥'
                }else if(Note>=10 && Note<12){
                    tdata[5].textContent= 'Acceptable ​🙂​'
                }else if(Note>=12 && Note<14){
                    tdata[5].textContent= 'Average ​😛​​'
                }else if(Note>=14 && Note<18){
                    tdata[5].textContent= 'Good ​🤗😜​🔥​​'
                }else if(Note>=14 && Note<18){
                    tdata[5].textContent= 'Very good ​😜​🔥​​'
                }else {
                    tdata[5].textContent= 'Excellent ​🤪​✅​​'
                }

        document.getElementById('placeName').textContent= Name
        
        let statuPlace = document.getElementById('placeStatut')
        if(Note>=10 && Note<=20 ){
            statuPlace.textContent='You have being success 😜'
        }
        if(Note>=0 && Note<10 ){
            statuPlace.textContent='You have being failed ​😥​'
        }
    
            
            document.getElementById('update').style.visibility = 'hidden';


        }
    }
});
document.addEventListener('click', function (event) {
    if (event.target.classList.contains('delet')) {
        let row = event.target.closest('tr');
        let index=(row.querySelector('td').textContent)-1
        row.remove()
        db.splice(index,1)
        console.log(`the length is : ${db,length}`);
        let i=0;
        for(i; i<db.length; i++){
            let theRow = document.querySelectorAll('tr')[i+1]
            console.log(theRow);
            theRow.querySelector('td').textContent= i+1
            if (i%2>0){
                theRow.style.backgroundColor = 'rgb(129, 129, 129)';
            }else{
        
                theRow.style.backgroundColor = 'rgb(223, 221, 221)';
                theRow.style.color='black'
        
            }
            if (db.length<2){
                document.getElementById('img').style.visibility='hidden'
            }else{
                document.getElementById('img').style.visibility='visible'
            }
        }
        }
    
});
function sortDb(db){
    if (db.length < 2) {
        return db; 
    }
    // let i;
    // let {exameNote}=data[i]
    let pivotObj = db[db.length - 1]; 
    let pivot = parseInt(db[db.length - 1].exameNote); 

    let right = [];
    let left = [];
    
    for (i=0 ; i < db.length - 1; i++) {
        let a = parseInt(db[i].exameNote)
        if (a <= pivot) {
            left.push(db[i]);
        } else {
            right.push(db[i]);
        }
    }

    
    return [...sortDb(right),pivotObj,...sortDb(left)];
}
let imgFilter = document.getElementById('img')
    imgFilter.addEventListener('click', function(){
        document.getElementById('userList').style.visibility= 'hidden';
        document.getElementById('filterList').style.visibility= 'visible';
        sortDb(db)
        const dbAfter=sortDb(db)
        console.log(sortDb(db));
        getStudents(dbAfter)
        imgFilter.style.visibility='hidden'

})
function getStudents(data) {
    // sortDb()
    // console.log(sortDb());
    let i;
    let tableData = document.getElementById('filterList')

    for(i=0; i< data.length; i++){
        let newTr = document.createElement('tr')
        newTr.innerHTML = `
        <td>${i+1}</td>
        <td>${data[i].fullName}</td>
        <td>${data[i].groupNum}</td>
        <td>${data[i].exameNote}</td>
        <td>${data[i].thereEmail}</td>
        <td>ratt</td>
        `
        // console.log()
        tableData.appendChild(newTr)
    }
}







