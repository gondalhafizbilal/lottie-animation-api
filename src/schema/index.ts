import { GraphQLList, GraphQLObjectType, GraphQLSchema, GraphQLNonNull, GraphQLID, GraphQLInt, GraphQLString } from "graphql";
import { AnimationCreateType, AnimationType, AnimationUpdateType } from "../schema-types/animation";
import { addAnimation, getAnimation, getAnimations, updateAnimationById } from "../controller/AnimationController";

const RootQuery = new GraphQLObjectType({
  name: "Query",
  fields: {
    animations: {
      type: new GraphQLList(AnimationType),
      description: "Fetch all animations",
      resolve: () => {
        return getAnimations();
      },
    },
    animation: {
      type: AnimationType,
      description: "Fetch a single animation by ID",
      args: {
        id: { type: new GraphQLNonNull(GraphQLID), description: "ID of the animation" },
      },
      resolve: (parent, { id }) => {
        return getAnimation({ id });
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    animation: {
      type: AnimationCreateType,
      description: "Create a new animation",
      args: {
        title: { type: new GraphQLNonNull(GraphQLString), description: "Title of the animation" },
        description: { type: GraphQLString, description: "Description of the animation" },
        fileJSON: { type: new GraphQLNonNull(GraphQLString), description: "JSON file content for the animation" },
      },
      resolve: (_, { id, title, description, fileJSON }) => {
        return addAnimation({ id, title, description, fileJSON });
      },
    },
    updateAnimation: {
      type: AnimationUpdateType,
      description: "Update an existing animation by ID",
      args: {
        id: { type: new GraphQLNonNull(GraphQLID), description: "ID of the animation to update" },
        title: { type: GraphQLString, description: "New title for the animation" },
        description: { type: GraphQLString, description: "New description for the animation" },
        fileJSON: { type: GraphQLString, description: "New JSON file content for the animation" },
      },
      resolve: (_, { id, title, description, fileJSON }) => {
        return updateAnimationById({ id, title, description, fileJSON });
      },
    },
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
