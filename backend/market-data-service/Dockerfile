FROM openjdk:11-jre
VOLUME /tmp
COPY target/market-data-service-0.0.1-SNAPSHOT.jar market-data-service.jar
ENTRYPOINT ["java","-jar","/market-data-service.jar"]
EXPOSE 8082
