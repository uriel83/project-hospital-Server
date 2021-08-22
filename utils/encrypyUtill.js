var Crypto = require("crypto-js");
 const Bcrypt =require("bcrypt");  // npm i --save bcrypt
const key = "najsdnfgjasndjk";

function crypto() {

     function cryptPassword(password) {
         const hash = Bcrypt.hashSync(password, 10);
         return hash;
        
    }
    function compare(password, hash) {
     return Bcrypt.compareSync(password, hash)
        
     }
    
    function getEncrypt(input) {
        
        // console.log(input);   
        const enc = Crypto.AES.encrypt(input, key)
        console.log("get Encrypt + input : "+input);
       console.log("get Encrypt + enc : " +enc);
        return enc.toString();
    }

    function getDecrypt(input) {
        console.log("get Decrypt + input : "+input);
        console.log("key : " +key);
        
        const dec = Crypto.AES.decrypt( input , key );
        console.log("get Decrypt + dec : "+ dec);
        return dec.toString(Crypto.enc.Utf8);
    }

    return{
        getDecrypt : getDecrypt,
        getEncrypt : getEncrypt,
        cryptPassword : cryptPassword,
        compare: compare
        
    }
}

module.exports = crypto();