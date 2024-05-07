FROM node:18.19.1-alpine
RUN mkdir -p /apps/staging/ise-tutor-dashboard-frontend
WORKDIR /apps/staging/ise-tutor-dashboard-frontend
COPY . .
RUN npm install --legacy-peer-deps
RUN npm run build
RUN npm install -g serve

EXPOSE 3001

CMD ["serve", "-s", "build"]
