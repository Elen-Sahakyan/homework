#include <stdio.h>


int main () {
	int num = 0;
	int i = 0, j = 0;
	
	scanf("%d %d %d", &num, &i, &j);
	if (i == j) {
		printf("%d\n", num);
		return 0;
	}

	int bitI = (num >> i) & 1; //00001100, i = 1, i = 2, bitI = 0
	int bitJ = (num >> j) & 1; // bitJ = 1 

	
	if (bitI != bitJ) {
		num ^= (1 << i);
 		num ^= (1 << j);
	}
	
	printf("%d\n", num);
	
	return 0;
}
			




