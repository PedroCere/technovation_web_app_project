FROM openjdk:21
VOLUME /tmp
COPY target/config-service-0.0.1-SNAPSHOT.jar config-service.jar
ENTRYPOINT ["java","-jar","/config-service.jar"]
EXPOSE 8080
