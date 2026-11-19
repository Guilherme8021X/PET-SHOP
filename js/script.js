const produtos = [
    { id: 1, nome: 'Brinquedinho faminto', preco: 25.30, ima: '', categoria: 'brinquedo' },
    { id: 2, nome: 'caramelo', preco: 10.15, ima: '', categoria: 'brinquedo' },
    { id: 3, nome: 'xuxa maluca', preco: 19.90, ima: '', categoria: 'brinquedo' },
    { id: 4, nome: 'plastico durinho', preco: 23.50, ima: '', categoria: 'brinquedo' },
    { id: 5, nome: 'chuveiro', preco: 50.00, ima: '', categoria: 'brinquedo' },
    { id: 6, nome: 'esponja', preco: 69.99, ima: '', categoria: 'brinquedo' },
    { id: 7, nome: 'esponja-trix', preco: 25.30, ima: '', categoria: 'tosa' },
    { id: 8, nome: 'brinquedo2', preco: 10.15, ima: '', categoria: 'tosa' },
    { id: 9, nome: 'brinquedo4', preco: 23.50, ima: '', categoria: 'tosa' },
    { id: 10, nome: 'brinquedo5', preco: 50.00, ima: '', categoria: 'tosa' },
    { id: 11, nome: 'brinquedo6', preco: 69.99, ima: '', categoria: 'tosa' },
    { id: 12, nome: 'brinquedo4', preco: 23.50, ima: '', categoria: 'tosa' },
    { id: 13, nome: 'brinquedo5', preco: 50.00, ima: '', categoria: 'banho' },
    { id: 14, nome: 'brinquedo6', preco: 69.99, ima: '', categoria: 'banho' },
    { id: 15, nome: 'brinquedo5', preco: 50.00, ima: '', categoria: 'banho' },
    { id: 16, nome: 'brinquedo6', preco: 69.99, ima: '', categoria: 'banho' },
    { id: 17, nome: 'brinquedo6', preco: 69.99, ima: '', categoria: 'banho' },
    { id: 18, nome: 'brinquedo6', preco: 69.99, ima: '', categoria: 'banho' },
    { id: 19, nome: 'brinquedo6', preco: 69.99, ima: '', categoria: 'racoes' },
    { id: 20, nome: 'brinquedo6', preco: 69.99, ima: '', categoria: 'racoes' },
    { id: 21, nome: 'brinquedo6', preco: 69.99, ima: '', categoria: 'racoes' },
    { id: 22, nome: 'brinquedo6', preco: 69.99, ima: '', categoria: 'racoes' },
    { id: 23, nome: 'brinquedo6', preco: 69.99, ima: '', categoria: 'racoes' },
    { id: 24, nome: 'brinquedo6', preco: 69.99, ima: '', categoria: 'racoes' }
];

console.log(produtos.length);
console.log(produtos[0].nome);

//função reutilizável para exibir qualquer categoria na tela
function renderizarcategoria(nomeCategoria, idDiHtml) {
    //busca a div receptora no html
    const divContainer = document.getElementById(idDiHtml);
    
    if (divContainer) {
        divContainer.innerHTML = ""; //LIMPA A DIV ANTES DE PREENCHER

        //filtra os produtos pertencentes a esta categoria
        const produtosfiltrados = produtos.filter(function (produto) {
            return produto.categoria === nomeCategoria;
        });
        
        //varrimento e montagem dos cartões dinâmicos
        produtosfiltrados.forEach(function (produto) {
            const cartaoHTML = `
            <div class="cartao">
                <h3>${produto.nome}</h3>
                <p>preço: R$ ${produto.preco.toFixed(2)}</p>
                <button>Comprar</button>
            </div>
            `;
            divContainer.innerHTML += cartaoHTML;
        });
    }
}

//3.Execução para as 4 categorias do catálogo (Corrigido o nome da função)
renderizarcategoria('brinquedo', 'brinquedos');
renderizarcategoria('banho', 'banho');
renderizarcategoria('tosa', 'tosa');
renderizarcategoria('racoes', 'racoes');



































//minha antiga condição
/*
const produtosbrinquedos = produtos.filter(function(produto){
    return produto.categoria=== 'brinquedo'
});

//1.achar a div no html 
const divBrinquedos = document.getElementById('brinquedos')
//2. varrer a lista filtrada 
produtosbrinquedos.forEach(function(produto){
    //3.Montar o html do cartão usando crases(template string do js)
    // as variáveis entram com ${}
    const cartaoHTML = `
    <div class="cartao">
        <h3>${produto.nome}</h3>
        <p>Preço: R${produto.preco}</p>
    </div>
    `;
    divBrinquedos.innerHTML += cartaoHTML
});*/