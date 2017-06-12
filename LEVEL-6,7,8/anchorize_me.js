function anchorize(text){
  // show me the code!!
  return text.replace(/((?:http|https|ftp|ftps|file|smb):\/\/[a-zA-Z\d:\/.]+)\b/g, '<a href="$1">$1</a>')
}

/*
Parse the text and replace Globally url with corresponding html syntax.

Supported protocols:

http
https
ftp
ftps
file
smb
NOTE: Ideal will be with Regex

Input

'hello http://world.com !'

Output

'hello <a href="http://world.com">http://world.com</a> !'

TEST


Test.assertEquals('<xmp>'+anchorize('hello http://world.com !')+'</xmp>',
'<xmp>'+'hello <a href="http://world.com">http://world.com</a> !'+'</xmp>');
*/