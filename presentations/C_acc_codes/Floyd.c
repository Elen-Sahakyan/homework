#include <stdio.h>


int main() {
    int num = 0;
    scanf("%d", &num);

    for (int i = 0; i < num; ++i) {
        for (int j = 0; j <= i; ++j) {
            if ( (i+j) % 2 == 0) {
                printf("1");
            } else {
                printf("0");
            }
        }
        printf("\n");
    }
}