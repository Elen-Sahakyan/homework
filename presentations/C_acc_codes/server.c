#include <stdio.h>
#include <unistd.h>
#include <string.h>
#include <stdlib.h>
#include <arpa/inet.h>

#define Size 50
#define PORT 8080

int main(){
    int serverfd, clientfd;
    struct sockaddr_in server_addr, client_addr;
    socklen_t client_size = sizeof(client_addr);
    char buffer[Size];

    serverfd = socket(AF_INET,SOCK_STREAM,0);
    if(serverfd < 0){perror("server::socket"); exit(1);}

    server_addr.sin_family = AF_INET;
    server_addr.sin_port = htons(PORT);
    server_addr.sin_addr.s_addr = INADDR_ANY;

    int opt = 1;
    if(setsockopt(serverfd,SOL_SOCKET,SO_REUSEADDR,&opt,sizeof(opt)) < 0){perror("server::setsockopt"); exit(1);}

    if(bind(serverfd,(struct sockaddr*)&server_addr,sizeof(server_addr)) < 0){
        perror("server::bind"); 
        exit(EXIT_FAILURE);
    }

    if(listen(serverfd,5) < 0 ){
        perror("server::listen"); 
        exit(EXIT_FAILURE);
    }

    printf("Server is Waiting ...\n");
    clientfd = accept(serverfd,(struct sockaddr*)&client_addr,&client_size);
    if(clientfd < 0){
        perror("server::accept"); 
        exit(EXIT_FAILURE);
    }

    
    recv(clientfd,buffer,Size,0);
    printf("Server Receive : %s\n", buffer);

    memset(buffer,0,Size);
    strcpy(buffer, "Hello From Server");
    
    printf("Server send Hello From Server");
    send(clientfd,buffer,strlen(buffer),0);
    
    close(clientfd);
    close(serverfd);

    return 0;
}