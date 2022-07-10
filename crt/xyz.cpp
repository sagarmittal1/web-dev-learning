#include <iostream>
using namespace std;

int arr[100];
int top = -1;
int size = 100;

void push(int x) {
    if(top == size-1) {
        cout << "Stack Overflow" << endl;
        return;
    }
    top++;
    arr[top] = x;
}

void pop() {
    if(top == -1) {
        cout << "Stack Underflow" << endl;
        return;
    }
    top--;
}

void display() {
    for (int i = 0; i <= top; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
}

int main()
{
    push(5);
    push(3);
    pop();
    push(10);
    cout << arr[top] << endl;
    display();

    return 0;
}