/* Tugas nomor 1 - Analisis*/
/* 
a. Banyak kekerangan penulisan kode!
b. Bagian mana terjadi kekurangan
c. Alasan dari kekurangan  
*/

// 1. Penamaan class masih kurang tepat, disarankan menggunakan format Pascalcase "User".
class user {      
    var id;    
    // 2. Penamaan variabel masih kurang tepat, disarankan menggunakan format camelCase "userName", dan keyword yang digunakan sebaiknya adalah "let".  
    var username; 
    var password; 
}

// 3. Penamaan class masih kurang tepat, disarankan menggunakan format Pascalcase "userService".
class userservice {   
    user[] users = [];

    // 4. Penamaan function masih kurang tepat, disarankan menggunakan format camelCase "getAllUsers".
    user[] getallusers() { 
        return users;
    }

    // 5. Penamaan function masih kurang tepat, disarankan menggunakan format camelCase "getUserById". Kemudian untuk paramaternya cukup "id" saja karena seharunya sudah diketahui bahwa "id" yang dimaksud adalah bagian dari classnya. 
    user getuserbyid(userid) {   
        return users.filter(userid); 
    }  
}










