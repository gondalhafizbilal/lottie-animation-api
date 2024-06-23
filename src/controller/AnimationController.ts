import { getAllAnimations, getAnimationById, createAnimation, updateAnimation } from "../repository/AnimationRepository";
import { AnimationInterface, AnimationUpdateInterface } from "../types/animationTypes";

export const getAnimations = async () => {
  try {
    const animations = await getAllAnimations();
    return animations;
  } catch (error) {
    throw new Error(`Failed to fetch animations`);
  }
};

export const getAnimation = async ({ id }: { id: BigInt }) => {
  try {
    const animation = await getAnimationById(id);
    if (animation) {
      return animation;
    }
    throw new Error(`Animation with ID ${id} not found`);
  } catch (error) {
    throw new Error('Failed to fetch animation');
  }
};

export const addAnimation = async (args: AnimationInterface) => {
  try {
    const animation = await createAnimation(args);
    return animation;
  } catch (error) {
    throw new Error('Failed to add animation');
  }
};

export const updateAnimationById = async (payload: AnimationUpdateInterface) => {
  try {
    const { id } = payload;
    const animation = await updateAnimation(id, payload);
    if (animation) {
      return animation;
    }
    throw new Error(`Animation with ID ${id} not found`);
  } catch (error) {
    throw new Error('Failed to update animation'
    );
  }
};
