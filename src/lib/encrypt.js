
import CryptoJS from 'crypto-js';
import { JSEncrypt } from 'jsencrypt';

const quickEncrypt = function (type, value, option = {}) {

    let encryptRsa = new JSEncrypt();
    let result = "";

    switch (type) {
        case 'md5':
            result = CryptoJS.MD5(value);
            break;
        case 'sha1':
            result = CryptoJS.SHA1(value);
            break;
        case 'sha2-224':
            result = CryptoJS.SHA224(value);
            break;
        case 'sha2-256':
            result = CryptoJS.SHA256(value);
            break;
        case 'sha2-384':
            result = CryptoJS.SHA384(value);
            break;
        case 'sha2-512':
            result = CryptoJS.SHA512(value);
            break;
        case 'aes-encrypt':
            result = CryptoJS.AES.encrypt(value, option['secret']).toString();
            break;
        case 'aes-decrypt':
            result = CryptoJS.AES.decrypt(value, option['secret']).toString(CryptoJS.enc.Utf8);
            break;
        case 'des-encrypt':
            result = CryptoJS.DES.encrypt(value, option['secret']).toString();
            break;
        case 'des-decrypt':
            result = CryptoJS.DES.decrypt(value, option['secret']).toString(CryptoJS.enc.Utf8);
            break;
        case '3des-encrypt':
            result = CryptoJS.TripleDES.encrypt(value, option['secret']).toString();
            break;
        case '3des-decrypt':
            result = CryptoJS.TripleDES.decrypt(value, option['secret']).toString(CryptoJS.enc.Utf8);
            break;
        case 'rsa-encrypt':
            encryptRsa.setPublicKey(option['pk']);
            result = encryptRsa.encrypt(value);
            break;
        case 'rsa-decrypt':
            encryptRsa.setPrivateKey(option['sk']);
            result = encryptRsa.decrypt(value);
            break;
        default:
            console.log(`Sorry, we are out of ${expr}.`);
    }

    return result;
}




export default quickEncrypt;