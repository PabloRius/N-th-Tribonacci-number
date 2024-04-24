#include "Solution.h"

int tribonacci(int n)
{
    if(n < 2)
    {
        return n;
    }
    int tbn[3] = {0, 1, 1};
    for(int i=3; i<=n; i++)
    {
        int new_val = tbn[0] + tbn[1] + tbn[2];
        tbn[0] = tbn[1];
        tbn[1] = tbn[2];
        tbn[2] = new_val;
    }
    return tbn[2];
}