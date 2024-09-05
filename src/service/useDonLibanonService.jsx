import { useHttp } from "../hooks/http.hooks";


const useDonLibanonServer = () =>  {

    const {loading, error, request, clearError} = useHttp()

    const _botToken = import.meta.env.VITE_BOT_TOKEN;
    const _chatId = import.meta.env.VITE_CHAT_ID; 
    const _apiBase = `https://api.telegram.org/bot${_botToken}/sendMessage`;

    const sendMessage = async ({status, comment, number}) => {

        const data = {
            chat_id: _chatId,
            text: `
                Status: ${status}\nComment: ${comment}\nPhone: ${number}
            `
        };

        const res = await request(_apiBase, "POST", JSON.stringify(data))
        return res.ok;
    }


    return {sendMessage, loading, error, clearError}
}


export default useDonLibanonServer;