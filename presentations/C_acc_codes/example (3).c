#include <stdlib.h> // for rand and srand functions
#include <unistd.h> 
#include <stdio.h>
#include <time.h>
#include <string.h>
#define BUF_SIZE 1024
struct Employee 
{
    char name[50];
    char surname [100];
    int salary;
};
void  init_staff (struct Employee* arr, int size);
void output_file (struct Employee* staff, int size, FILE* fout);
void read_lines (FILE* fin, char** text);
void read_staff_info (FILE* fin, struct Employee* staff, int size);

int lines_counter (FILE* file); // Ֆունկցիան վերադարձնում է տողերի քանակությունը
char** create_matrix (int size); // Ֆունկցիան ստեղծում է երկչափ դինամիկ char տիպի զանգված

int main () 
{
    int choice = 0;
    do {
        printf  ("if you want read file input 1, in else case input 0");
        scanf ("%d", &choice);
    } while (choice != 0 && choice != 1);
    FILE * file;
    int size = 0;
    char** text = NULL;
    struct Employee* staff = NULL;
    if (choice)
    {
        file = fopen("chlp.txt", "r");
        size = lines_counter(file);
        text = create_matrix(size);
        read_lines (file, text);
        staff = (struct Employee*) calloc (size, sizeof (struct Employee));
        rewind(file);// fseek (file, 0, SEEK_SET);
        read_staff_info (file, staff,size);
        for (int i = 0; i < size; i++)
        {
            printf ("%s \n", text[i]);
        }
        for (int i = 0; i < size; i++)
        {
            printf ("Employee name %s \n Employee surname %s \n", staff[i].name, staff[i].surname);
        }
        for (int i = 0; i < size; i++) // դինամիկ երկչափ զանգվածի ազատման համար
        {
            free (text[i]);
        }
        free (text);
    }
    else
    {
        fprintf (stdout, "Please input count of employees");
        fscanf (stdin, "%d", &size);
        staff = (struct Employee*) calloc (size, sizeof (struct Employee));
        file = fopen("chlp.txt", "w");
        init_staff (staff, size);
        output_file (staff, size, file);
    
    }

    free(staff);
    fclose (file);

}


void  init_staff (struct Employee* arr, int size)
{
    for(int i=0;i<size;i++){
        printf ("Please input Name of employee: ");
        scanf("%s",arr[i].name);
        printf ("Please input Surame of employee: ");
        scanf("%s",arr[i].surname);
        printf ("Please input Salary of employee: ");
        scanf("%d",&arr[i].salary);
    }
}

void output_file (struct Employee* staff, int size, FILE* fout)
{
    for (int i = 0; i < size; i++)
    {
        // fputc('{', fout);
        // fwrite (staff[i].name, strlen(staff[i].name), sizeof(char), fout);
        // fputc(':', fout);
        // fwrite (staff[i].surname, strlen(staff[i].surname), sizeof(char), fout);
        // fputc(':', fout);
        // fprintf (fout, "%d", staff[i].salary);
        // fputs("}\n", fout);
        if (i != size - 1){
            fprintf (fout, "{%s :%s :%d }\n", staff[i].name, staff[i].surname, staff[i].salary);
        }
        else 
        {
            fprintf (fout, "{%s :%s :%d }", staff[i].name, staff[i].surname, staff[i].salary);
        }
    }

}

void read_lines (FILE* fin, char** text)
{
    int i = 0;
    while (!feof (fin))
    {
        fgets (text[i], BUF_SIZE, fin);
        i++;
        printf ("%d \n", i);
    }
}

void read_staff_info (FILE* fin, struct Employee* staff, int size)
{
    int i = 0;
    while (!feof (fin) && i < size)
    {
        fscanf (fin, "{%s :%s :%d }\n", staff[i].name, staff[i].surname, &staff[i].salary);
        i++;
    }
}


int lines_counter (FILE* file)
{
    int i = 0;
    char buff[BUF_SIZE] = {};
    while (!feof (file))
    {
        fgets (buff, BUF_SIZE, file);
        i++;
    }
    rewind(file);
    return i;
}
char** create_matrix (int size)
{ 
    char** ptr = (char** ) calloc (size, sizeof(char*));
    for (int i = 0; i < size; i++)
    {
        ptr[i] = (char*)calloc (BUF_SIZE, sizeof(char));
    }
    return ptr;
}