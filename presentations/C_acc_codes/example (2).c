#include <stdlib.h>
#include <unistd.h>
#include <stdio.h>
#include <time.h>
struct Person 
{
   int age; 
   char name [50];
   char surname [50];
};

void init_group (struct Person* group, int size);
int find_young_person (struct Person* group, int size);
void print_info (struct Person obj);

 
int main ()
{
    // srand(time(NULL));
    int size = 0;
    scanf ("%d", &size);
    struct Person* group = (struct Person* ) calloc (size, sizeof (struct Person));// malloc (size * sizeof (struct Person));
    init_group (group, size);
    int index = find_young_person (group, size);
    if  (index != -1) 
    {
        print_info (group[index]);
    }
    free (group);
    group = NULL;
    return 0;
}

void init_group (struct Person* group, int size)
{
    for (int i = 0; i < size; i++)
    {
        scanf ("%s", group[i].name); // (group + i) -> name
        scanf ("%s", group[i].surname); // (group + i) -> surname
        scanf ("%d", &group[i].age); // &((group + i) -> name)
    }
}

int find_young_person (struct Person* group, int size)
{
    for (int i = 0; i < size; i ++)
    {
        if (group[i].age >= 9 && group[i].age <= 18) {return i;}
    }
    return -1;
}

void print_info (struct Person obj)
{
    printf ("%s ", obj.name);
    printf ("%s ", obj.surname);
    printf ("With age %d \n", obj.age);
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
