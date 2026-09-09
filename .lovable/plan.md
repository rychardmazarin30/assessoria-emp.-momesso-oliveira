# Padronizar transições visuais entre páginas

## Objetivo
Dar a todas as páginas a mesma entrada suave e profissional da Home, preservando velocidade, indexação e a identidade visual sóbria do escritório.

## Implementação
- Reutilizar o sistema existente `animate-reveal` e seus delays, sem adicionar uma biblioteca de animação.
- Criar uma transição global no layout principal, reiniciada a cada mudança de rota, com fade-in e deslocamento vertical curto.
- Aplicar delays progressivos aos elementos principais de cada abertura de página: etiqueta, título, texto, imagem e botões.
- Cobrir páginas institucionais, listagens, páginas de serviço e artigo, contato e páginas locais.
- Manter o cabeçalho e o rodapé estáveis durante a navegação; somente o conteúdo da nova página fará a entrada.

## Acessibilidade e desempenho
- Desativar movimentos para visitantes com `prefers-reduced-motion`.
- Usar apenas transform e opacity, evitando alterações de layout e mantendo o conteúdo disponível no HTML para SEO.
- Manter duração curta e deslocamento discreto, sem animações chamativas.

## Verificação
- Testar navegação pelo menu e entre páginas dinâmicas.
- Conferir páginas representativas em desktop e celular.
- Validar ausência de conteúdo invisível, sobreposição ou erros no navegador.
