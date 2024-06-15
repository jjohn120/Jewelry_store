function sendMail(){
    var params={
        name: document.getElementById("name").value
    }
    const serviceID ="service_pitkqba";
const templateID ="template_tf6yozb"

emailJS.send(serviceID,templateID,params)
.then(
    res =>{
        document.getElementById("name").value = "";
        console.log(res);
        alert("message sent")

    }
)
.catch((err)=>console.log(err));
}

