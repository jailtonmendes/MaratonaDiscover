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
        
        description: 'Luz',
        amount: -50001,
        date:'23/01/2021',
    },
    {
        
        description: 'Website',
        amount: 500000,
        date:'23/01/2021',
    },
    {
        
        description: 'Internet',
        amount: -20012,
        date:'23/01/2021',
    },
    {
        
        description: 'App',
        amount: 200000,
        date:'23/01/2021',
    },
]



const Transaction = {
    all: transactions,

    add(transaction){
        Transaction.all.push(transaction)

        App.reload()
    },

    remove(index) {
        Transaction.all.splice(index, 1)

        App.reload()
    },

    incomes() {
        //somar as entradas
        let income = 0;
        //pegar todas as transações
        //para cada transação,
       Transaction.all.forEach(transaction => {
            //se ela for maior que zero
            if( transaction.amount > 0) {
                //somar a uma variavel e retornar a variavel
                income += transaction.amount;
            }
        })

        return income;
    },
    expenses() {
        //somar as saídas
        let expense = 0;
        //pegar todas as transações
        //para cada transação,
        Transaction.all.forEach(transaction => {
            //se ela for menor que zero
            if( transaction.amount < 0) {
                //somar a uma variavel e retornar a variavel
                expense += transaction.amount;
            }
        })

        return expense;
    },
    total() {
        //entrasas - saídas
        return Transaction.incomes() + Transaction.expenses();
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
            <td class="${CSSclass}">${amount}</td>
            <td class="date">${transaction.date}</td>
            <td>
            <img src="./assets/minus.svg" alt="Remover transação">
            </td>
     `

        return html
    },

    updateBalance() { //Responsavel pelas formatação do texto R$
        document
        .getElementById('incomeDisplay')
        .innerHTML = Utils.formatCurrency(Transaction.incomes())
        document
        .getElementById('expenseDisplay')
        .innerHTML = Utils.formatCurrency(Transaction.expenses())
        document
        .getElementById('totalDisplay')
        .innerHTML = Utils.formatCurrency(Transaction.total())
    },

    clearTransactions() {
        DOM.transactionsContainer.innerHTML = ""
    }
}

const Utils = {
    formatCurrency(value) {
        const signal = Number(value) < 0 ? "-" : ""

        value = String(value).replace(/\D/g, "")

        value = Number(value) / 100

        value = value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })

        return signal + value
   }
}

const Form = {
    description: document.querySelector('input#description'),
    description: document.querySelector('input#amount'),
    description: document.querySelector('input#date'),

        formatData() {
        console.log('Formatar os dados')
        },
        validateFields() {
            console.log('validar os campos')
        },
        submit(event) {
        console.log(event)
            event.preventDefault()

            //verificar se todas as informações foram preenchidas
            Form.validateFields()
            //formatar  os dados para salvar
            Form.formatData()
            //salvar
            //apagar os dados do formulário
            //modal feche
            //Atualizar a aplicação
    }
}

const App = {
    init() {
        Transaction.all.forEach(transaction => {
            DOM.addTransaction(transaction)
        })
        
        DOM.updateBalance() 

    },
    reload() {
        DOM.clearTransactions()
        App.init()
    },
}


App.init()


