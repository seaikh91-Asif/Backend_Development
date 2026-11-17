FROM node:20-alpine
WORKDIR /app

# Caching trick apply korchi
COPY package*.json ./
RUN npm install

# Ashol code copy koro
COPY . .

# Dhorchi tomar backend 5000 port-e chole
EXPOSE 5000
CMD ["node", "server.js"]