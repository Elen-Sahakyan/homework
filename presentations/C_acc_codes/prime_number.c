#include <stdio.h>
#include <math.h>  //sqrt()

int main() {
    int num = 0;
    scanf("%d", &num);
    for (int i = 2; i <= num/2; ++i) {
        if (num % i == 0) {
            printf("The %d is not prime number\n", num);
            return 0;
        }
    }
    printf("The %d is prime number\n", num);
}