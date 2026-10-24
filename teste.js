<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Muda Cor Aleatória</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            transition: background-color 0.4s ease;
            margin: 0;
            background-color: #f3f4f6;
        }
        .container {
            text-align: center;
            background: white;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }
        button {
            padding: 12px 24px;
            font-size: 16px;
            font-weight: bold;
            color: white;
            background-color: #6366f1;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            margin-top: 15px;
        }
        button:hover {
            background-color: #4f46e5;
        }
    </style>
</head>
<body>

    <div class="container">
        <h2>Gerador de Cores</h2>
        <p>Clique no botão para mudar o fundo!</p>
        <button onclick="mudarCor()">Mudar Cor</button>
    </div>

    <script>
        function mudarCor() {
            const letras = "0123456789ABCDEF";
            let cor = "#";
            
            // Loop para gerar um código hexadecimal aleatório (ex: #4F8C2A)
            for (let i = 0; i < 6; i++) {
                cor += letras[Math.floor(Math.random() * 16)];
            }
            
            // Aplica a cor gerada no fundo da página
            document.body.style.backgroundColor = cor;
        }
    </script>

</body>
</html>

            document.body.style.backgroundColor = cor;
        }
    </script>

</body>
</html>
