# Pedro Magalhães - ERC1155 Tutorial

Olá! Bem-vindo ao repositório do Iora Labs, onde você encontrará um tutorial completo sobre a implementação e teste do token ERC-1155 usando Hardhat e Solidity. Este tutorial foi criado para ajudá-lo a entender e dominar o desenvolvimento de contratos inteligentes e padrões de tokens ERC no mundo do blockchain.

## Video
- https://www.youtube.com/watch?v=hqL9blybtsY

## Requisitos

- [Node.js](https://nodejs.org/en/)
- [Hardhat](https://hardhat.org/)
- [Ethers.js](https://docs.ethers.io/v5/)

## Instruções de instalação

1. Clone este repositório
   ``git clone https://github.com/yourusername/iora-labs-erc1155-tutorial.git``

2. Navegue até a pasta do projeto
   ``cd erc1155_sample``

3. Instale as dependências
   ``yarn install``

## Como usar

### Compilar o contrato inteligente

Para compilar o contrato inteligente, execute o seguinte comando na pasta do projeto:

``yarn install``
``npx hardhat compile``

### Testar o contrato inteligente

Para testar o contrato inteligente, execute o seguinte comando na pasta do projeto:
``npx hardhat test``

## Estrutura do Projeto

- `contracts/`: Aqui você encontrará o contrato inteligente ERC-1155 chamado `MyERC1155Token.sol`.
- `test/`: Esta pasta contém o arquivo de teste `MyERC1155Token.test.js`, que inclui vários testes para a implantação, cunhagem e transferência do token ERC-1155.

## Contribuindo

Sinta-se à vontade para contribuir com este projeto, seja abrindo issues, corrigindo bugs ou sugerindo melhorias no código. Agradecemos a sua colaboração!

## Licença

Este projeto está licenciado sob a licença MIT - consulte o arquivo [LICENSE](LICENSE) para obter detalhes.