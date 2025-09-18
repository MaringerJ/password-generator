function generatePassword()
{
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let password = ""
    for(let i = 0; i < 10; i++){
        password += charset[(parseInt(Math.random()*charset.length))]
    }
    return password
}

console.log(`Password: ${generatePassword()}`)

module.exports = generatePassword