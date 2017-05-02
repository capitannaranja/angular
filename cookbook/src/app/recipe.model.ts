export class Recipe {
  public name: string;
  public author: string;
  public imageUrl: string;
  public instruction: string;

  constructor(name:string, author: string, imageUrl:string, instruction:string){
    this.name = name;
    this.author = author;
    this.imageUrl = imageUrl;
    this.instruction = instruction;
  }
}