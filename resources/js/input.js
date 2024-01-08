function validate(event) {
    const key = event.key;

    if (/[a-zA-Z]/.test(key)) {
        return true;  
    } else {
        return false; 
    }
}