let user = +prompt(`Biroonta raqam tanglang \n 0) Quduq \n 1) Qaychi \n 2) Qog'oz`)


let comp =Math.floor(Math.random()*3)

if(user === 0 && comp == 2 || user ==2 && comp === 1 || user === 1 && comp === 0){
    alert( `computer ${comp}ni tanladi Foydalanuvchi ${user}ni tanladi \n Foydalanuvchi g'alaba qozondi` )
}
else if( user ==comp){
    alert( `computer ${comp}ni talladi Foydalanuvchi ${user}ni tanladi \n durrang` )
}else{
    alert(`computer ${comp}ni tanladi Foydalanuvchi ${user}ni tanladi \n compyuter g'alaba qozondi` )
}