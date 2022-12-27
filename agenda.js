let contacts=[]

function newContact(){

   

    let contact={}

    contact.name=prompt("Digite o nome do contato")
    contact.phone=prompt("Digite o telefone do contato")
    contact.email=prompt("Digite o e-mail do contato")

    conf=confirm("Deseja realmente salvar o contato na sua agenda?")

    let contactList=document.getElementById('contacts-list')

    if(conf){
        contacts.push(contact)

        let name=document.createElement('h3')
        name.innerText=contact.name

        let phoneNumber=document.createElement('h4')
        phoneNumber.innerText=contact.phone

        let email=document.createElement('h4')
        email.innerText=contact.email

        contactList.appendChild(name)
        contactList.appendChild(phoneNumber)
        contactList.appendChild(email)

        let bar=document.createElement('hr')
    }else{
        alert("O contato não foi salvo.")
    }

    let conTam=alert("A sua agenta tem "+contacts.length+" contatos")

 }

function removeContact(){
    let index=prompt("Ditite o índice do contato que você deseja excluir" +"\n(começa em 0)")
    contacts.splice(index, 1)

    let contactSection=document.getElementById('contacts-list')
    let names=document.getElementsByTagName('h3')
    let everythingElse=document.getElementsByTagName('h4')

    contactSection.removeChild(names[index])
    contactSection.removeChild(everythingElse[index])
    contactSection.removeChild(everythingElse[index])
 
}