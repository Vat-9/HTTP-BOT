FROM quay.io/Vqt-9/yourbot:latest
RUN git clone https://github.com/Vat-9/HTTP-BOT /root/yourbot/
WORKDIR /root/yourbot/
RUN yarn install --network-concurrency 1
CMD ["npm", "start"]
