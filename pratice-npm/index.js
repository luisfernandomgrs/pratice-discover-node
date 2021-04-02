/*
 * iniciando um pacote NPM:
 * # npm init -y
 * 
 * instalando dependencias...
 * npm install <module>
 * npm install <module> <module> <module>...
 * 
 * instalando dependencias de desenvolvimento...
 * npm install <module> -D
 * 
 * remapeia o package-lock, quando fizermos alterações no package.json
 * npm update
 * 
 * IMPORTANTE:
 * Numca envie os arquivos da pasta node_modules para seu repositório...
 * 
 * Crie: um ".gitignore" definindo a pasta node_modules e outros conteúdos
 * ... não necessários para o repositório, porém que facilmente são instalados
 * ... usando o npm install sem parâmetros (que irá verificar as dependências apontadas no seu package.json)
 * 
 * desinstalando modules...
 * npm uninstall <module>
 * 
 * instalando dependências de forma global
 * npm install opn -g
 * 
 * para saber onde está a pasta global, node_modules
 * npm root -g
 * 
 * gerenciando versões
 * ex:
 * {
 *  "moment": "^2.29.1"
 * }
 *  
 * -> "^2.29.1"
 * -> controlVersion.major.minor.patch
 * 
 * Explicando:
 * a) major: houve alterações que podem causar impacto em um projeto.
 * b) minor: houve alterações, mas não oferecem risco de quebrar um projeto
 * c) patch: Correção de pequenos bugs
 * 
 * 1. Controle de versão: Pode ser usado ^, ~, ou *
 * 
 * 1.1 vazio, sem nenhum símbolo, significa que a versão numca muda, ou seja deve ser mantida sem alterações.
 * 1.2 ^ permite que o seu gerenciador de pacotes faça atualizações apenas em minor e no patch.
 * 1.3 ~ atualiza apenas o patch
 * 1.4 * atualiza toda a versão
 *  + major + minor +patch
 */

console.log("running on script");