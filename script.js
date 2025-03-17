function download(link){
    a = document.createElement("a")
    a.href = link
    document.body.appendChild(a)
    a.click()
}
document.getElementById("windownload").addEventListener("click", ()=>{
    download("https://github.com/bagoflays/Server-Host/releases/download/Distributions/ServerHost-win32-x64.zip")
})
document.getElementById("debdownload").addEventListener("click", ()=>{
    download("https://github.com/bagoflays/Server-Host/releases/download/extra-distro-support/server-host_1.5.0_amd64.deb")
})
document.getElementById("imgdownload").addEventListener("click", ()=>{
    download("https://github.com/bagoflays/Server-Host/releases/download/extra-distro-support/Server.Host-1.5.0.AppImage")
})