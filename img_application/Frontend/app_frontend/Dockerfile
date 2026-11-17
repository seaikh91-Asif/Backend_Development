FROM node:20-alpine
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5173
# Vite container-er baire theke access korar jonno --host lagbe
CMD ["npm", "run", "dev", "--", "--host"]