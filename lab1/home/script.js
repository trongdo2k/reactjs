var isPalindrome = function(x) {
    if(x<0)
        {
            return false;
        }else
            {
                let sum,pa=0;
                for(let newx=x;newx>10;newx/10)
                    {
                        pa+=newx%10;
                        pa*=10
                    }
                if(pa==x)
                    {
                        return true;
                    }
                else return false;
            }
};
