#include <stdio.h>
#include <unistd.h>
#include <string.h>
#include <stdlib.h>
#include <arpa/inet.h>

#define Size 50
#define PORT 8080
#define ADDR "127.0.0.1"

int main(){
    int socketfd;
    struct sockaddr_in client_addr;
    char buffer[Size];

    socketfd = socket(AF_INET,SOCK_STREAM,0);
    if(socketfd < 0){perror("client::socket"); exit(1);}

    client_addr.sin_family = AF_INET;
    client_addr.sin_port = htons(PORT);
    client_addr.sin_addr.s_addr = inet_addr(ADDR);

    if(connect(socketfd,(struct sockaddr*)&client_addr,sizeof(client_addr))< 0){
        perror("client::connect"); 
        exit(1);
    }

    printf("Client Send: Hello From Client\n");
    strcpy(buffer,"Hello From Client");
    send(socketfd,buffer,strlen(buffer),0);
    
    memset(buffer,0,Size);
    recv(socketfd,buffer,Size,0);

    printf("Client Receive : %s\n", buffer);

    close(socketfd);
    return 0;
}