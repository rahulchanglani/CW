// sol 1

function longest(s1, s2) {
  return Array.from(new Set(s1 + s2)).sort().join('');
}

// sol 2

const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')

// sol 3

function longest(s1, s2) {
    s1=s1.split("");
    s2=s2.split("");
    
    var new_s=s1.concat(s2);
    
    new_s=new_s.sort();
    
    var ans_s=[];
    
    for(var i=0;i<new_s.length;i++)
    {
        if(ans_s.indexOf(new_s[i])===-1)
        {
            ans_s.push(new_s[i]);
        }
    }
    
    ans_s=ans_s.join("");
    
    return ans_s;
}



/*

Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,

each taken only once - coming from s1 or s2. #Examples: ``` a = "xyaabbbccccdefww" b = "xxxxyyyyabklmopq" longest(a, b) -> "abcdefklmopqwxy"
a = "abcdefghijklmnopqrstuvwxyz" longest(a, a) -> "abcdefghijklmnopqrstuvwxyz" ```



Test.describe("longest",function() {
Test.it("Basic tests",function() {
    Test.assertEquals(longest("aretheyhere", "yestheyarehere"), "aehrsty")
    Test.assertEquals(longest("loopingisfunbutdangerous", "lessdangerousthancoding"), "abcdefghilnoprstu")
    Test.assertEquals(longest("inmanylanguages", "theresapairoffunctions"), "acefghilmnoprstuy")
})})



LEVEL 7 kyu
*/