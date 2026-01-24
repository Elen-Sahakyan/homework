#include <stdio.h>


int main() {
	int num = 0;
	scanf("%d", &num);
	
	int bitmusk = num >> 31;
	//int absNum = (num ^ bitmusk) - bitmusk;
	int absNum = num - (2*num) & bitmusk;
	printf("Num = %d, absNum = %d\n", num, absNum);

}
	

