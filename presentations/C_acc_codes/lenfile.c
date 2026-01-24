#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <unistd.h>


int main() {
    FILE *stream = fopen("file.txt", "r+");
    if (stream == NULL) {
        perror("fopen failed\n");
        return -1;
    }

    fseek(stream, 0, SEEK_END);
    int size = ftell(stream);
    fseek(stream, 0,SEEK_SET);
    char *text = (char*)malloc(size*sizeof(char));

    memset(text, 0, size);

    size_t rByte = fread(text, size, 1, stream);
    if (rByte != 1) {
        return -1;
    }
    int len = strlen(text);

    truncate("file.txt", 0);
    fseek(stream, 0, SEEK_SET);
    fprintf(stream, "%d", len);
    fclose(stream);
    free(text);
}