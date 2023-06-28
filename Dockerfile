FROM node

############### Build App

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm ci --omit=dev

COPY ./app ./app
COPY ./blogposts ./blogposts
COPY ./components ./components
COPY ./public ./public
COPY ./style ./style
COPY ./utils ./utils
COPY db.js .

COPY jsconfig.json .
COPY next.config.js .
COPY postcss.config.js .
COPY tailwind.config.js .

RUN npm run build

EXPOSE 80

############### Run App

CMD ["npm", "run", "prod"]



# docker build -t lichess_swiss_website .
# docker run -p 3000:3000 -e MONGODB_URL=MONGODB_URL lichess_swiss_website

