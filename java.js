<script src="https://unpkg.com/axios@1.6.7/dist/axios.min.js"></script>
<script>
    const TOKEN = "7888372350:AAF5aTur4BROwzBEibjAPnTTddFdwCRV4-o"
    const CHAT_ID = '6074838445'
    const URI_API = 'https://api.telegram.org/bot${ TOKEN }/sendmessage'
    
    document.getElementbyID('tg').addEventlistener('submit',function(e){ e.preventDefault()
        let message =`<b>new user</b>\n`
        message += `<b>Name: </b>${this.name.value}\n`
        axios.post(URI_API,{
            chat_id: CHAT_ID,
            parse_mode: 'html',
            text: message 
        })
        
        })
</script>