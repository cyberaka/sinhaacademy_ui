docker stop sinhaacademy-ui-static
docker rm sinhaacademy-ui-static
docker rmi sinhaacademy-ui-static
docker rmi cyberaka/sinhaacademy-ui-static:20240905v1
docker build --tag=sinhaacademy-ui-static:latest .
pause
docker run -p 80:80 --name sinhaacademy-ui-static sinhaacademy-ui-static
rem docker logs --follow sinhaacademy-ui-static
pause
docker tag sinhaacademy-ui-static:latest cyberaka/sinhaacademy-ui-static:20240905v1
docker push cyberaka/sinhaacademy-ui-static:20240905v1
