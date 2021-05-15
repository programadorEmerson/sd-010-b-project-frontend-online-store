REQUISITO 5
  - Fazer requisição à API do Mercado Livre enviando os termos buscados por quem usa e usar o retorno para fazer a listagem dos produtos.
  - Criar a listagem de produtos.
  - Fazer a exibição resumida do produto (o "card" que aparece na listagem). A exibição deve ter título, foto e preço.
  - Se a busca não retornar resultados, gerar a tela correspondente com o texto "Nenhum produto foi encontrado".
  * Adicione o atributo `data-testid` com o valor `query-input` no elemento `input` que servirá para a pessoa que usa sua aplicação digitar o termo de busca.
  * Adicione o atributo `data-testid` com o valor `query-button` no elemento que dispara a chamada para a API com o termo de busca pesquisado.
  * Adicione o atributo `data-testid` com o valor `product` nos elementos que possuem os dados dos produtos.