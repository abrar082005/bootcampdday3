/* this function is meant to find the number of occurences of a word in a sting*/
function word(text){
  var a = text.split(" ");    
  result = { };   /*this is initializing an empty dictionary to map each word to its occurences*/
  for(var i = 0; i < a.length; ++i) {
    if(!result[a[i]])
        result[a[i]] = 0;
    ++result[a[i]];
}
  return result;
}