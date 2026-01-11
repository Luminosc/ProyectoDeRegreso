export class producto
{
  [x: string]: any;
  constructor(
    public id: number | null = null,
    public Description: string,
    public Precio: number
  ){}
}
