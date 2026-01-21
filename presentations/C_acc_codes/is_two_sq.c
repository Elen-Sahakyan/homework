#include <stdio.h>
#include <math.h>


int is_foo(int num) {
    for (int i = 1; i*i < num; ++i) {
        for (int j = 1; j*j < num; ++j) {
            if (i*i + j*j == num) {
                return 1;
            }
        }
    }
    return 0;
}

int is_foo2(int num){
    for (int i = 1; i*i < num; ++i) {
        int tmp = sqrt(num - i*i);
        if(tmp*tmp + i*i == num){
            return 1;
        }
    }
    return 0;
}

int main() {
    int num = 0;
    scanf("%d", &num);
    printf("%d\n", is_foo(num));
}