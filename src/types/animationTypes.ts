export interface AnimationInterface {
  id?: BigInt;
  title: string;
  description?: string;
  fileJSON?:Text;
  createdAt: Date;
  updatedAt: Date;
}

export interface AnimationUpdateInterface {
  id: BigInt;
  title?: string;
  description?: string;
  fileJSON?: string;
}