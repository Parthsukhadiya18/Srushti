#include <iostream>
using namespace std;
// *****
// *****
// *****
// *****
// *****
int main()
{
    // for (int i = 1; i <= 5; i++)
    // {
    //     for (int j = 1; j <=5; j++)
    //     {
    //        cout<<"*";
    //     }cout<<"\n";

    // }
    // *
    // **
    // ***
    // ****
    // *****

    // for (int i = 1; i <= 5; i++)
    // {
    //     for (int j = 1; j <= i; j++)
    //     {
    //         cout << "*";
    //     }
    //     cout << "\n";
    // }
    // *****
    // ****
    // ***
    // **
    // *
    // for (int i = 1; i <= 5; i++)
    // {
    //     for (int j = i; j <= 5; j++)
    //     {
    //         cout << "*";
    //     }
    //     cout << "\n";
    // }

    //       *
    //      **
    //     ***
    //    ****
    //   *****
    // for (int i = 1; i <= 5; i++)

    // {
    //     for (int k = i; k <= 5; k++)
    //     {
    //         cout << " ";
    //     }
    //     for (int j = 1; j <= i; j++)
    //     {
    //         cout << "*";
    //     }
    //     cout << "\n";
    // }

    //    *****
    //    ****
    //     ***
    //      **
    //       *
    for (int i = 1; i <= 5; i++)

    {
        for (int k = 1; k <= i; k++)
        {
            cout << " ";
        }
        for (int j = i; j <= 5; j++)
        {
            cout << "*";
        }
        cout << "\n";
    }

    return 0;
}