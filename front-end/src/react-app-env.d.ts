declare module '*.mp4' {
    const src: string;
    export default src;
}

interface DataProps{
    category:string;
    item_id: string;
    name: string;
    description: string;
    price: number;
}