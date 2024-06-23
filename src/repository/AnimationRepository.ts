import db from "../entity";
import { AnimationInterface, AnimationUpdateInterface } from "../types/animationTypes";

const { Animation } = db;

export const getAllAnimations = async () => {
  try {
    const animations = await Animation.findAll();
    return animations;
  } catch (error) {
    throw new Error('Failed to fetch animations');
  }
};

export const getAnimationById = async (id: BigInt) => {
  try {
    const animation = await Animation.findOne({
      where: { id },
    });
    return animation;
  } catch (error) {
    throw new Error('Failed to fetch animation');
  }
};

export const createAnimation = async (payload: AnimationInterface) => {
  try {
    const animation = await Animation.create(payload);
    return animation;
  } catch (error) {
    throw new Error('Failed to create animation');
  }
};

export const updateAnimation = async (id: BigInt, payload: AnimationUpdateInterface) => {
  try {
    const animation = await Animation.findOne({
      where: { id },
    });

    if (animation) {
      await Animation.update({
        ...payload,
        updatedAt: new Date(), 
      }, {
        where: { id },
      });
    }

    const updatedAnimation = await Animation.findOne({
      where: { id },
    });

    return updatedAnimation;
  } catch (error) {
    throw new Error('Failed to update animation');
  }
};
