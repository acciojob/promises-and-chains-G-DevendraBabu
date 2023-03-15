//your JS code here. If required.

//selecting the input and button elemnets

let name1=document.getElementById("name");
let age=document.getElementById("age");
let butn=document.getElementById("btn");

butn.addEventListener("click" ,()=>{

    if(name1.value !="" || age.value !="")
    {      
            let p1= new Promise((resolve,reject)=>{
                setTimeout(()=>{  
                    if(age.value>=18 )
                    {
                        resolve(fun1()
                        .then((data1)=>{return data1})
                        .then((data2)=>{
                            console.log(data2);
                            window.alert(`Welcome, ${name1.value}. you can vote`);
                        }));
                    }
                    else
                    {

                        reject(fun1()
                        .then((data1)=>{return data1})
                        .then((data2)=>{
                            console.log(data2);
                        }));
                        window.alert(`oh sorry ${name1.value}. You aren't old enough `);
                        
                    }
                },4000)
            })
                
    }

})


function fun1()
{
    let p2= new Promise((resolve,reject)=>{
        if(name1.value !="" || age.value !="")
        {  

            if(age.value>=18)
            {
                resolve(`Welcome, ${name1.value}. you can vote`);
            }
            else
            {
                reject(`oh sorry ${name1.value}. You aren't old enough `);
            }
        }  
    })      
    return p2;
}

