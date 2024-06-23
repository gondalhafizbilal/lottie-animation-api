"use strict";
import { Model } from "sequelize";
import { AnimationInterface } from "../types/animationTypes";

module.exports = (sequelize: any, DataTypes: any) => {
  class Animation extends Model<AnimationInterface> implements AnimationInterface {
    title!: string;
    description!: string;
    fileJSON!:Text;
    createdAt!: Date;
    updatedAt!: Date;
  }
  
  Animation.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      fileJSON:DataTypes.TEXT,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    },
    {
      sequelize,
      tableName: "animations",
      modelName: "Animation",
    }
  );
  return Animation;
};
