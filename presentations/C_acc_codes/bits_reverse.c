#include <stdio.h>

int main(){
    int num = 0;
    scanf("%d",&num);

    int orig = num;
    int res = 0; 

    int bit = num & 1;
    res = res | bit;
    res = res << 1;
    num = num >> 1;

    bit = num & 1;
    res = res | bit;
    res = res << 1;
    num = num >> 1;


    bit = num & 1;
    res = res | bit;
    res = res << 1;
    num = num >> 1;

    bit = num & 1;
    res = res | bit;
    res = res << 1;
    num = num >> 1;


    bit = num & 1;
    res = res | bit;
    res = res << 1;
    num = num >> 1;

    bit = num & 1;
    res = res | bit;
    res = res << 1;
    num = num >> 1;

    bit = num & 1;
    res = res | bit;
    res = res << 1;
    num = num >> 1;

    bit = num & 1;
    res = res | bit;

    printf("Original -> %d, Reverse -> %d",orig,res);
    return 0;
}
