/*Problem statement  -  Longest Common Prefix
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "". */


// link to problem - https://leetcode.com/problems/longest-common-prefix/?envType=problem-list-v2&envId=array

// solution -1 (16 October 2025)

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
let commonPrefix = strs[0];
for(let i=1;i<strs.length;i++){
    let common = "";
    for(let j=0;j<strs[i].length;j++){
        if(strs[i][j] === commonPrefix[j]){
            common += strs[i][j];
        }else if(j ===0){
            return ""
        }else{
            break;
        }
        
    }
    commonPrefix = common;
}  
    return commonPrefix;
};