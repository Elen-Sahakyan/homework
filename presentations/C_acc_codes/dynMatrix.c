#include <stdio.h>
#include <stdlib.h>

void enter_elements(int **matrix, int row, int col) {
    printf("Enter the elements of matrix.\n");
    for (int i = 0; i < row; ++i) {
        for (int j = 0; j < col; ++j) {
            scanf("%d", &matrix[i][j]);
        }
    }
}

void print_elements(int **matrix, int row, int col) {
    printf("Initial matrix\n");
    for (int i = 0; i < row; ++i) {
        for (int j = 0; j < col; ++j) {
            printf("%d ", matrix[i][j]);
        }
        printf("\n");
    }
}

void Free(int **matrix, int row) {
    for (int j = 0; j < row; ++j) {
        free(matrix[j]);
        matrix[j] = NULL;
    }
    free(matrix);
    
}

int even_odd(int *arr, int size) {
    int i = 0;
    int j = size-1;
    while (i <= j) {
        if (arr[i] % 2 && !(arr[j] % 2)) {
            arr[i] ^= arr[j];
            arr[j] ^= arr[i];
            arr[i] ^= arr[j];
        } else if (arr[i] % 2 == 0) {
            i++;
        } else {
            --j;
        }
    }
    return i;

}
int main() {
    int row = 0;
    int col = 0;
    printf("Please, enter the row and column sizes: ");
    scanf("%d %d", &row, &col);

    int **matrix = (int**)malloc(sizeof(int*) * row);
    if (matrix == NULL) {
        printf("Not enough memory1\n");
        return -1;
    }

    for (int i = 0; i < row; i++) {
        matrix[i] = (int*)malloc(sizeof(int)*col);
        if (matrix[i] == NULL) {
            printf("Not enough memory2\n");
            int k = i;
            while (k) {
                free(matrix[--k]);
            }
            return -1;
        }
    }
    int *arr_sizes = (int*)malloc(sizeof(int) * row);
    if (arr_sizes == NULL) {
        printf("Not enough memory3\n");
        return -1;
    }

    enter_elements(matrix, row, col);
    print_elements(matrix, row, col);
    
    for (int i = 0; i < row; ++i) {
        arr_sizes[i] = even_odd(matrix[i], col);
        if (arr_sizes[i] != 0) {
            int *ptr_line = realloc(matrix[i], arr_sizes[i]);
            if (ptr_line == NULL) {
                printf("Not enough memory4\n");
                return -1;
            }
        }
    }
    printf("Modifyed matrix\n");
    for (int i = 0; i < row; ++i) {
        for (int j = 0; j < arr_sizes[i]; ++j) {
            printf("%d ", matrix[i][j]);
        }
        if (arr_sizes[i] != 0) {
            printf("\n");
        }
    }

    Free(matrix, row);
    free(arr_sizes);
    return 0;

}