

// Função para converter pixels para vw
function px2vw(sizeInPixels = 0) {
    const screenWidth = window.innerWidth;
    const sizeInVw = (sizeInPixels / screenWidth) * 100;
    return `${sizeInVw}vw`;
  }
  
  export default px2vw;
  