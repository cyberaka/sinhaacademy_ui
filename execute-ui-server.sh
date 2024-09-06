docker stop sinhaacademy-ui-static
docker rm sinhaacademy-ui-static
docker rmi sinhaacademy-ui-static
docker rmi cyberaka/sinhaacademy-ui-static:20240905v1
docker run -d -p 6060:80 --name sinhaacademy-ui-static cyberaka/sinhaacademy-ui-static:20240905v1
docker logs --follow sinhaacademy-ui-static
