
// Sol 1

function isPangram(string){
  return "abcdefghijklmnopqrstuvwxyz".split('').every(function(e) {
    return string.toLowerCase().indexOf(e) >= 0;
  });
}

// Sol 2

function isPangram(string){ 
    return /(?=.*a)(?=.*b)(?=.*c)(?=.*d)(?=.*e)(?=.*f)(?=.*g)(?=.*h)(?=.*i)(?=.*j)(?=.*k)(?=.*l)(?=.*m)(?=.*n)(?=.*o)(?=.*p)(?=.*q)(?=.*r)(?=.*s)(?=.*t)(?=.*u)(?=.*v)(?=.*w)(?=.*x)(?=.*y)(?=.*z)./i.test(string) 
 }

// SOl 3

function isPangram(string){
  return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26;
}




/**
 A pangram is a sentence that contains every single letter of the alphabet at least once. 
 For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, 
 because it uses the letters A-Z at least once (case is irrelevant).

 Given a string, detect whether or not it is a pangram. Return True if it is, False if not.
 Ignore numbers and punctuation. 
 */