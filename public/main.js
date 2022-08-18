    async function init(){
        let rustApp=null

    try {
        rustApp= await import('../pkg')
    } catch (error) {
        console.error(error)
        return
    }
    
    const input=document.getElementById('upload')
    const fileReader=new FileReader()
    fileReader.onloadend=() =>{
        let base64=fileReader.result.replace(
            /^data:image\/(png|jpeg|jpg);base64,/, ''
        )

        const imageDataUrl=rustApp.grayscale(base64);
        console.log('image processed')
        document.getElementById('new-img').setAttribute(
            'src', imageDataUrl
        )
    }
    input.addEventListener('change', ()=>{
        fileReader.readAsDataURL(input.files[0]);
    })

    }

    init()
    