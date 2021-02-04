const Modal = {
    open(){
        //Abrir modal
        //Adicionar a class active ao modal
        document.querySelector('.modal-overlay')
        .classList
        .add('active')

    },
    close(){
        //Fechar modal
        //remover a class active do modal
        document.querySelector('.modal-overlay') //procurar no documento a classe modal-overlay
        .classList                               //na lista de classe dele
        .remove('active')                        //remover a classe active
    }
}


const transactions = [
    {
        id: 1,
        description: 'Luz',
        amount: -50000,
        date:'23/01/2021',
    },
    {
        id: 2,
        description: 'Website',
        amount: 500000,
        date:'23/01/2021',
    },
    {
        id: 3,
        description: 'Internet',
        amount: -20000,
        date:'23/01/2021',
    },
    {
        id: 3,
        description: 'App',
        amount: 200000,
        date:'23/01/2021',
    },
]



const Transaction = {
    incomes() {
        //somar as entradas
    },
    expenses() {
        //somar as saídas
    },
    total() {
        //entrasas - saídas
    }
}


const DOM = {
    transactionsContainer: document.querySelector('#data-table tbody'),

    addTransaction(transaction, index) {
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transaction)

        DOM.transactionsContainer.appendChild(tr)

       
    },

    innerHTMLTransaction(transaction) {
        const CSSclass = transaction.amount > 0 ? "income" : "expense"

        const amount = Utils.formatCurrency(transaction.amount)

        const html = `
            <td class="description">${transaction.description}</td>
            <td class="${CSSclass}">${transaction.amount}</td>
            <td class="date">${transaction.date}</td>
            <td>
            <img src="./assets/minus.svg" alt="Remover transação">
            </td>
     `

        return html
    }
}

const Utils = {
    formatCurrency(value) {
        const signal = Number(value) < 0 ? "_" : ""

        value = String(value).replace(/\D/g, "")

        value = Number(value) / 100

        value = value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })

        console.log(signal + value)
   }
}


transactions.forEach(function(transaction){
    DOM.addTransaction(transaction)
})