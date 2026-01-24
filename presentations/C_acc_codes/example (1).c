#include <stdlib.h>
#include <unistd.h>
#include <stdio.h>
#include <time.h>

#define SIZE 20
 
int main ()
{
    srand(time(NULL));
    int matrix  [SIZE][SIZE] = {{}};

    for (int i = 0; i < SIZE; i++)
    {
        for (int j = 0; j < SIZE; j++)
        {
            matrix [i][j] = rand() % 100;
        }
    }
    for (int i = 0; i < SIZE; i++)
    {
        for (int j = 0; j < SIZE; j++)
        {
            printf ( "%d ", matrix [i][j]);
        }
        printf ("\n___________________________\n");
    }
    int num = -1;
    do 
    {
        printf ("Please input number from 0 to 19");
        scanf ("%d", &num);
    }while (num < 0 || num > 19);
    
    int sum = 0;
    for (int i = 0; i < num; i++)
    {
        for (int j = 0; j < SIZE; j++ )
        {
            if  (i == j)
            {
                sum += matrix [i][j];
            }
        }
    }

    printf ("%d", sum);
}


// char* str_find (const char * str, char sym)
// {
//     while (*str != '\0' && *str != sym)
//     {
//         str ++;
//     }
//     if (*str == '\0') {return NULL;}
//     return str;

// }

char* str_find (const char * str, char sym)
{
    
    for (int i = 0; str [i] != '\0'; i++ )
    {
        if  (str [i] == sym ) {return str + i; /* return &str[i]; */}
    }
    return NULL;
}
