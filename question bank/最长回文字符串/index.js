// const a = ["a", "bb", "c", "dddd", "aaa", "axdfsdfsf"];
// const b = a.sort((a, b) => b.length - a.length);

// console.log(b)

var longestPalindrome = function (s) {
    const length = s.length;
    let arr = [];
    for (let i = 0; i < length; i++) {
        let str = "";
        // console.log(j)
        for (let j = i; j < length; j++) {
            str += s[j];
            if (str === str.split("").reverse().join("")) {
                arr.push(str);
            }
        }
    }
    return [arr.sort((a, b) => b.length - a.length)[0], arr];
}

// var longestPalindrome = function (s) {
//     const length = s.length;
//     if (length <= 1) {
//         return s;
//     } else {
//         let max = '';
//         for (let i = 0; i < length; i++) {
//             let j = i, str = "";
//             while (j < length) {
//                 str += s[j];
//                 if (str === str.split("").reverse().join("") && str.length > max.length) {
//                     max = str
//                 }
//                 j++;
//             }
//         }
//         return max;
//     }
// };

/**
 * @param {string} s
 * @return {string}
 */
// var longestPalindrome = function (s) {
//     let max = 0 // 当前最大回文串的长度
//     let start = -1 // 当前最大回文串的起始索引
//     const len = s.length // s 的长度
//     for (let i = 0; i < len; i++) { // 遍历 s
//         let now = 1 // 当前回文串的长度
//         let l = i - 1 // 左侧开始遍历的指针
//         while (s[i + 1] === s[i]) { // 如果当前字符后边的字符都一样, 当前长度 + 1,  s遍历指针向后推
//             now++
//             i++
//         }
//         let r = i + 1 // 获取右侧开始遍历的指针
//         while (s[l] === s[r] && s[l] !== undefined) {  // 从连续字符两端开始像两侧扩展,直到越界或者不一致,一致的直接累积到当前长度中,修改左右指针
//             now += 2
//             l--
//             r++
//         }
//         if (now > max) { // 判断与之前最大的对比,更新当前最大回文串的起始索引
//             max = now
//             start = l + 1
//         }
//     }
//     return s.slice(start, start + max) // 通过最大长度和起始索引,获取需要的字符串
// };

/**
 * @param {string} s
 * @return {string}
 */
// var longestPalindrome = function (s) {
//     let max = 0 // 当前最大回文串的长度
//     let maxStr = '' // 当前最大的回文串
//     for (let i = 0; i < s.length; i++) {
//         let str = s[i] // 当前遍历的这个字符为中心的回文串
//         let l = i - 1 // 左侧遍历开始索引
//         while (s[i + 1] === s[i]) { // 找到当前字符后连接的所有一样的字符,更新 i 的指针和 str,获取连续的字符
//             str += s[i]
//             i++
//         }
//         let r = i + 1 // 右侧遍历开始索引
//         while (s[l] === s[r] && s[l] !== undefined) { // 从连续字符两端开始像两侧扩展,直到越界或者不一致,一致的直接拼到 str 中
//             str = s[l] + str + s[l]
//             l--
//             r++
//         }
//         if (str.length > max) { // 判断与之前最大的对比
//             max = str.length
//             maxStr = str
//         }
//     }
//     return maxStr
// };

let s = "civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"

console.log(longestPalindrome(s))