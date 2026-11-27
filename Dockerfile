FROM nginx:1.27-alpine

COPY index.html /usr/share/nginx/html/index.html
COPY audio-credits.html /usr/share/nginx/html/audio-credits.html
COPY assets /usr/share/nginx/html/assets

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://127.0.0.1/ || exit 1
