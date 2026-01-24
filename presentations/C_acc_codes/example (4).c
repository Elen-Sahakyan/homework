#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>

int sum = 0;
pthread_mutex_t  mtx = PTHREAD_MUTEX_INITIALIZER;

void* foo_thread (void * arg)
{
    int* ptr = (int* ) arg;
    for (int i = *ptr; i < *ptr + 10000; i++ )
    {   
        pthread_mutex_lock (&mtx);
        sum = sum + 1;
        pthread_mutex_unlock (&mtx);
    }
    return NULL;
}

int main ()
{
    int thr1_arg = 0;
    int thr2_arg = 10000;

    pthread_t thr1, thr2;

    pthread_create(&thr1, NULL, foo_thread, (void*)&thr1_arg);
    pthread_create(&thr2, NULL, foo_thread, (void*)&thr2_arg);

    pthread_join(thr1, NULL);
    pthread_join(thr2, NULL);

    printf ("%d", sum);

}

