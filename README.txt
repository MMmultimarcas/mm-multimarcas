MM MULTIMARCAS — SITE PRONTO PARA PERSONALIZAR

ARQUIVOS
- index.html: estrutura das páginas e textos.
- style.css: cores, tamanhos, espaçamentos e aparência.
- script.js: links, produtos, filtros e funcionamento dos botões.
- imagens/: coloque aqui as fotos dos produtos.

COMO COLOCAR SEUS LINKS
Abra script.js e procure no começo do arquivo:

const WHATSAPP_LINK = "COLOQUE_SEU_LINK_DO_WHATSAPP_AQUI";
const INSTAGRAM_LINK = "COLOQUE_SEU_LINK_DO_INSTAGRAM_AQUI";

Substitua o texto entre aspas pelo link correto. Exemplo de WhatsApp:
https://wa.me/5564999999999
Use o número com código do país e DDD, sem espaços, parênteses ou traços.

COMO ADICIONAR FOTOS E PRODUTOS
No script.js, edite a lista "produtos".
1. Coloque a foto dentro da pasta imagens.
2. Informe o caminho em imagem, por exemplo: "imagens/camiseta-preta.jpg".
3. Edite nome, categoria e preço.
4. Se quiser um WhatsApp diferente para um produto, coloque o link no campo link.
   Se deixar link: "", o site usa o WhatsApp geral.

Para adicionar mais produtos, copie um bloco de produto inteiro e cole dentro da lista,
separando os blocos por vírgula.

PUBLICAR NO GITHUB PAGES
1. Entre em github.com e crie um repositório público.
2. Envie index.html, style.css, script.js e a pasta imagens para a raiz do repositório.
3. No repositório, abra Settings > Pages.
4. Em "Build and deployment", escolha "Deploy from a branch".
5. Selecione a branch "main" e a pasta "/ (root)" e clique em Save.
6. Aguarde o GitHub gerar o endereço do site.

IMPORTANTE
- Antes de publicar, troque os links de WhatsApp e Instagram.
- Troque os produtos de exemplo e adicione as fotos reais.
- O site é estático e pode ser hospedado gratuitamente no GitHub Pages.
- A fonte DM Sans é carregada do Google Fonts; se estiver sem internet, haverá fonte alternativa.
