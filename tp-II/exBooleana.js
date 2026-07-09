<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Tabuada Nota 10</title>
</head>
<body>

    <h1>Programa da Tabuada</h1>
    <p>Veja o resultado logo abaixo:</p>
    
    <div id="caixa-da-tabuada"></div>

    <script>
        // Esse comando garante que o código só roda quando a página estiver 100% pronta
        window.onload = function() {
            
            // 1. O número que você quer calcular
            let numero = 8; 
            
            // 2. Encontra o local da página pelo ID
            let tela = document.getElementById("caixa-da-tabuada");
            
            // 3. O laço que se repete de 1 até 10
            for (let i = 1; i <= 10; i++) {
                
                // Faz a conta de multiplicação
                let resultado = numero * i;
                
                // Monta a linha de texto (Ex: "8 x 1 = 8")
                let linha = numero + " x " + i + " = " + resultado + "<br>";
                
                // Adiciona essa linha dentro da nossa tela
                tela.innerHTML += linha;
            }
            
        };
    </script>

</body>
</html>