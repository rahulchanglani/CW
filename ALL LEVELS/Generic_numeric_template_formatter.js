function numericFormatter(template, s = '1234567890', i = 0){
  return template.replace(/[a-z]/ig, v=>s[i++ % s.length]);
}

/*
Your goal is to create a function to format a number given a template; if the number is not present, use the digits 1234567890 to fill in the spaces.

A few rules:

the template might consist of other numbers, special characters or the like: you need to replace only alphabetical characters;
if the given or default string is shorter than the template, just repeat it to fill all the spaces.
A few examples:

numericFormatter("xxx xxxxx xx","5465253289") === "546 52532 89"
numericFormatter("xxx xxxxx xx") === "123 45678 90"
numericFormatter("+555 aaaa bbbb", "18031978") === "+555 1803 1978"
numericFormatter("+555 aaaa bbbb") === "+555 1234 5678"
numericFormatter("xxxx yyyy zzzz") === "1234 5678 9012"



describe("Basic tests",_=>{
Test.assertEquals(numericFormatter("xxx xxxxx xx","5465253289"), "546 52532 89");
Test.assertEquals(numericFormatter("xxx xxxxx xx"), "123 45678 90");
Test.assertEquals(numericFormatter("+555 aaaa bbbb", "18031978"), "+555 1803 1978");
Test.assertEquals(numericFormatter("+555 aaaa bbbb"), "+555 1234 5678");
Test.assertEquals(numericFormatter("xxxx yyyy zzzz"), "1234 5678 9012");
})


*/