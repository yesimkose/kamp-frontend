import { title } from "node:process";

export interface Todo{
    userId:number;
    id:number;
    title:string;
    completed:boolean;
}