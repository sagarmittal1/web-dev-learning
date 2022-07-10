#include <stdio.h>

int x = 10;
int main() 
{
    while(--x) {
        ;
    }
    printf("%d", x);
}



// int func(int n1, int n2, char operator) {
//     if(operator == '+') {
//         return n1 + n2;
//     }else if(operator == '-') {
//         return n1 - n2;
//     }else if(operator == '*') {
//         return n1 * n2;
//     }else{
//         if(n2 != 0) {
//             return n1 / n2;
//         }else{
//             return -1;
//         }
//     }
// }

// int main()
// {
//     int n1, n2, ans;
//     char operator;

//     printf("Enter 1st value: ");
//     scanf("%d", &n1);

//     printf("Enter 2nd value: ");
//     scanf("%d", &n2);

//     printf("Enter the operation: ");
//     scanf("%c", &operator);

//     ans = func(n1, n2, operator);


//     return 0;
// }