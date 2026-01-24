#include <stdio.h>

int main(){
    int index = 0;
    scanf("%d",&index);
    if (index < 0) {return 0;}
    
    if(index < 2){
        printf("%d\n",index);
        return 0;
    } 
    int a = 0;
    int b = 1;

    for(int i=0; i < index-1;++i){
        int tmp = a+b;
        a = b;
        b = tmp;
    }
    printf("Fib -> %d \n",b);

    return 0;
}