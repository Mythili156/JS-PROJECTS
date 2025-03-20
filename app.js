let itemlist = [];
let AddItem = () =>{
    let item = document.getElementById('todo').value;
    itemlist.push(item);
    console.log(itemlist);
    document.getElementById('todo').value="";
    getItem();
}
let getItem = () =>{
    let emptystr = "";
    let sno = 0;
    itemlist.forEach(function(value,index){
        sno +=1;
        emptystr += "<tr><td>"+sno+"</td><td>"+value+"</td><td><button onclick=deleteItem("+index+")>remove</button></td></tr>";
    })
document.getElementById('tbl').innerHTML=emptystr;
}
function deleteItem(id){
    itemlist.splice(id,1);
    getItem();


}

document.getElementById('btn').addEventListener('click',AddItem);