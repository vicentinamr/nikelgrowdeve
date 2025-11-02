(function onAccess(){
    let logged = localStorage.getItem("session");
    let loggedSession = sessionStorage.getItem("session");
    logged = JSON.parse(logged)

    if( !logged && !loggedSession) {
        window.location.href = "index.html";
    }

    if(logged)  sessionStorage.setItem("session", JSON.stringify(logged));
    
    settingTransactions();
}())


function settingTransactions(){
    let dataSession = sessionStorage.getItem("session");
    dataSession = JSON.parse(dataSession)
    let DatabaselocalStorage = localStorage.getItem(dataSession.email);
    DatabaselocalStorage = JSON.parse(DatabaselocalStorage)

    const transactionsList = DatabaselocalStorage.transactions;

    if(transactionsList.length > 0){
        let transactionsListHtml = ``;
        
        for (let i = 0; i < transactionsList.length; i++){
            transactionsListHtml += `
                <tr>
                    <th scope="row">${transactionsList[i].data}</th>
                    <td>${transactionsList[i].valor.toFixed(2)}</td>
                    <td>${transactionsList[i].type}</td>
                    <td> ${transactionsList[i].descricao}</td>
                </tr>
            `;
        }
        document.getElementById("table-rows-list").innerHTML = transactionsListHtml;
    }
}


document.getElementById("button-sair").addEventListener("click", (e)=>{
    e.preventDefault();
    logout();
});


function logout(){
    let localStoragelogged = localStorage.getItem("session");
    let sessionStorageloggede = localStorage.getItem("session");
    if(localStoragelogged) localStorage.removeItem("session");
    if(sessionStorageloggede) sessionStorage.removeItem("session");

    window.location.href = "index.html";
}