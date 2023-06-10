import axios from "axios";
const AxiosInstance = axios.create({
    baseURL: `${process.env.REACT_APP_URL}`,
    headers: {
        'Accept': 'application/json',
        "Content-Type": "*/*",
        "Connection":"keep-alive",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiaGFkeXNhbGFoN0BnbWFpbC5jb20iLCJqdGkiOiIwNGQzZmEzOC1lMTMzLTQ5NTUtOTdhNC0wMWMwOTU0NzIzMjAiLCJ1aWQiOiI1NmVjMGUwNS05YTY0LTQ2OGItODMyMS1iYTYyNTQ3Yzk5MDgiLCJDb21wYW55SWQiOiI1NmVjMGUwNS05YTY0LTQ2OGItODMyMS1iYTYyNTQ3Yzk5MDgiLCJDb21wYW55TmFtZSI6IlRBLVRlbGVjb20iLCJOYW1lIjoiSGFkeSIsIlR5cGVTZW5kaW5nIjoiMCIsImV4cCI6MTY4ODc0NzcwNX0.nO76cr-4IiuXsNfDEFZX7sovzwt9TK3lXTkO0zA6cfY"
    },
});

export default AxiosInstance;
