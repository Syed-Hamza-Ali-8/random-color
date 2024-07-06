const getColor = () => {
    const randomNumber = Math.floor(Math.random() * 16777215)
    const randomColorCode = "#" + randomNumber.toString(16)
    document.body.style.backgroundColor = randomColorCode
    let colorCode = document.getElementById("color-code").innerText = randomColorCode
    const copyToClipboard = document.getElementById("copy-btn")
    navigator.clipboard.writeText(randomColorCode)
}

document.getElementById("color-generator-btn").addEventListener("click", getColor)
document.getElementById("copy-btn").addEventListener("click", copyCode)
getColor()