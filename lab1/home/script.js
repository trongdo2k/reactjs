// lists=[[1,4,5],[1,3,4],[2,6]]
// var mergeKLists = function(lists) {
//     let newarr=[];
//     for(let i=0;i<lists.length;i++)
//     {
        
//         newarr=newarr.concat(lists[i]);
//     }
    
//     return newarr.sort(function(a, b){return a - b});
     
// };
// console.log(mergeKLists(lists));

// function unique(arr) {
//     var newArr = []
//     let n=[]
//     for (var i = 0; i < arr.length; i++) {
//       if (newArr.indexOf(arr[i]) === -1) {
//         newArr.push(arr[i])
//       }
//     }

//     for (var i = 0; i < arr.length; i++) {
//         n+=arr[i];
//       }
    
//     return n
//   }
//   console.log(unique([1, 1, 2, 3, 5, 3, 1, 5, 6, 7, 4]))
var twoSum = function(nums, target) {
    for(let i=0;i<nums.length;i++)
    {
        for(let j=i+1;j<nums.length;j++)
        {
            if(nums[i]+nums[j]==target)
            {
                let tg=[i,j];
                return tg;
            }
        }
    }
    
};
s="(((()()((";
var longestValidParentheses = function(s) {
    let sum=0;
    let summax=0;
    let numberin=0;
    let numberout=0;
    for(let i=0;i<s.length;i++)
    {
        if(s[i]="(")
        {
            numberin+=1;
            for(let j=i+1;j<s.length;j++)
            {
                if(s[j]="(")
                {
                    numberin+=1;
                }else{
                    numberout+=1;
                    if(numberout>=numberin)
                    {
                        sum=numberin*2;
                        if(sum>summax)
                        {
                            summax=sum;
                            sum=0;
                        }
                        else sum=0;
                    }
                    else{
                        sum=numberout*2;
                        if(sum>summax)
                        {
                            summax=sum;
                            sum=0;
                        }
                        else sum=0;
                    }
                }
            }
        }
        
    }
    return sumax;
};
longestValidParentheses(s);