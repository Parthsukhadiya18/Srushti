function add(...rest) {
    sum=0;
    for (const i in rest) {
       
           sum+=rest[i];
            
    }

    console.log(sum);
    
}

add(1,2);
add(10,20,30)
add(1);
add(10,20,30,50)
