import { GraphQLObjectType, GraphQLString, GraphQLID } from "graphql";
import { GraphQLDate, GraphQLNonEmptyString, GraphQLNonNegativeInt } from "graphql-scalars";

export const AnimationType = new GraphQLObjectType({
  name: "Animation",
  description: "Represents an animation entity",
  fields: () => ({
    id: { type: GraphQLID, description: "Unique identifier for the animation" },
    title: { type: GraphQLString, description: "Title of the animation" },
    description: { type: GraphQLString, description: "Description of the animation" },
    fileJSON: { type: GraphQLString, description: "JSON content of the animation" },
    createdAt: { type: GraphQLDate, description: "Date when the animation was created" },
    updatedAt: { type: GraphQLDate, description: "Date when the animation was last updated" },
  }),
});

export const AnimationCreateType = new GraphQLObjectType({
  name: "CreateAnimation",
  description: "Input type for creating a new animation",
  fields: () => ({
    title: { type: GraphQLString, description: "Title of the animation (required)" },
    description: { type: GraphQLString, description: "Description of the animation" },
    fileJSON: { type: GraphQLString, description: "JSON content of the animation" },
  }),
});

export const AnimationUpdateType = new GraphQLObjectType({
  name: "UpdateAnimation",
  description: "Input type for updating an existing animation",
  fields: () => ({
    id: { type: GraphQLID, description: "ID of the animation to update (required)" },
    title: { type: GraphQLString, description: "New title for the animation" },
    description: { type: GraphQLString, description: "New description for the animation" },
    fileJSON: { type: GraphQLString, description: "New JSON content for the animation" },
  }),
});
