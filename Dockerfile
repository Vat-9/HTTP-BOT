FROM quay.io/Vqt-9/yourbot:latest
RUN git clone https://github.com/Vat-9/test-bot-working /root/yourbot/
WORKDIR /root/yourbot/
RUN yarn install --network-concurrency 1
CMD ["npm", "start"]
