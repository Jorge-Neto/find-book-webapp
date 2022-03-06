
# Rodar:
npm run install
npm run build
npm run start

# Criar servidores no localhost para acesso na rede.

## Para o APP:
ssh -R 80:192.168.0.107:3000 client@ssh.localhost.run

## Para a API
ssh -R 80:localhost:5000 api@ssh.localhost.run



ssh -R 80:localhost:5000 api@ssh.localhost.run
