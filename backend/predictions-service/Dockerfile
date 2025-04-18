FROM openjdk:21
VOLUME /tmp
COPY target/predictions-service-0.0.1-SNAPSHOT.jar predictions-service.jar
ENTRYPOINT ["java","-jar","/predictions-service.jar"]
EXPOSE 8081
