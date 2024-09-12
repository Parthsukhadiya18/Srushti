#include <iostream>
using namespace std;
class Parent
{

public:
    void car()
    {
        cout << "this is a car\n ";
    }
};

class Child : public Parent
{
public:
    void bike()
    {
        cout << "this is my bike!\n";
    }
};
class G_child : public Child
{
public:
    void message()
    {
        cout << "hello user!\n";
    }
};
int main()
{
    G_child G1;
    G1.car();
    G1.bike();
    G1.message();
    return 0;
}