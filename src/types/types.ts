export interface LinkType{
    title:string,
    path:string
}
export interface SwiperType{
    title:string,
    img: string | any,
    des:string,
}
export interface CardType extends SwiperType{
    
    price:string,
    place:string,
}