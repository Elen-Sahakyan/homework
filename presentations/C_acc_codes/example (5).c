    #include <stdio.h>
#include <stdlib.h>
#include <pthread.h>

int sum = 0;
pthread_mutex_t  mtx = PTHREAD_MUTEX_INITIALIZER;
struct Person {
    int age;
    char name[100];
};


void* foo_thread (void * arg)
{
    int* ptr = (int* ) arg;
    int sum_thr = 0;
    pthread_mutex_lock (&mtx);
    for (int i = *ptr; i < *ptr + 10000; i++ )
    {   
        
        sum = sum + 1;
        sum_thr += i;
        if (i % 1000 == 0) 
        {
            printf (" thr info %d \n", i);
        }
        if (i == 5000) 
        {
            printf ("Thread Exit \n");
            int*  ret_val = (int*) malloc (sizeof(int));
            *ret_val = -1;
            pthread_mutex_unlock (&mtx);
            pthread_exit (ret_val);
        }
    }
    pthread_mutex_unlock (&mtx);
     int*  ret_val = (int*) malloc (sizeof(int));
    *ret_val = sum_thr;
    return ret_val;
}

int main ()
{
    int thr1_arg = 0;
    int thr2_arg = 10000;

    pthread_t thr1, thr2;

    pthread_create(&thr1, NULL, foo_thread, (void*)&thr1_arg);
    pthread_create(&thr2, NULL, foo_thread, (void*)&thr2_arg);

    void* thr1_ret_val = NULL;
    void* thr2_ret_val = NULL;
    

    pthread_join(thr1, (void**)&thr1_ret_val);
    pthread_join(thr2, &thr2_ret_val);

    printf ("%d \n", sum);

    printf ("thr1 returned value is: %d \n", *((int*)thr1_ret_val));
    printf ("thr2 returned value is: %d \n", *((int*)thr2_ret_val));

    free(thr1_ret_val);
    free(thr2_ret_val);
    
}

