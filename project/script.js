let db_students = []

function postStudent() {
  let obj = {
    fullName: document.getElementById('fullName').value,
    groupy: document.getElementById('group').value,
    notte: document.getElementById('notte').value,
  }
  db_students.push(obj)

  getStudents()
}


function getStudents() {
  let i;
  let tableData = document.getElementById('tableData')
  tableData.innerHTML = ''

  for(i=0; i< db_students.length; i++){
    let newTr = document.createElement('tr')
    newTr.innerHTML = `
      <td>${db_students[i].fullName}</td>
      <td>${db_students[i].groupy}</td>
      <td>${db_students[i].notte}</td>
      <td>
        <button onclick="update(${i})">update</button>
        <button>delete</button>
      </td>
    `
    // console.log(db_students[i].fullName)
    tableData.appendChild(newTr)
  }
  // console.log(tableData);
}
function update(index){
      document.getElementById("submit").style.visibility= 'hidden';
      let btnUp=document.getElementById("up")
      btnUp.style.visibility= 'visible';
      // let a = index
    btnUp.onclick= function(){
            let Name=document.getElementById('fullName').value
            let Num=document.getElementById('group').value
            let Note=document.getElementById('notte').value
            db_students[index].fullName=Name;
            db_students[index].groupy=Num;
            db_students[index].notte= Note;
            console.log(db_students)
            // console.log(index);
            let trow = document.querySelectorAll('tr')[index+1]
            let tdata = trow.querySelectorAll('td')
            tdata[0].textContent= Name
            tdata[1].textContent= Num
            tdata[2].textContent= Note
            btnUp.style.visibility= 'hidden';
            document.getElementById("submit").style.visibility= 'visible';
            // postStudent()
    }
}
// console.log(update(index));
// let a= update()

