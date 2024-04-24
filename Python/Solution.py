class Solution(object):
            
    def tribonacci(self, n):
        """
        :type n: int
        :rtype: int
        """
        if (n < 2):
            return n
        
        tbn = [0,1,1]
        for i in range(3, n+1):
            new_val = tbn[0] + tbn[1] + tbn[2] 
            tbn[0], tbn[1], tbn[2] = tbn[1], tbn[2], new_val
        return tbn[2]
        