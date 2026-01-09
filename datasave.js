const datasave = (data, success, full) => {
    const internetSpeed = Math.floor(Math.random() * 100);  
    setTimeout(() => {
        if (internetSpeed > 50) {
            success();    
        } else {
            full();       
        }
    }, 1000);
};


