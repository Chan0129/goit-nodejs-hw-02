import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter",
    },
    token: {
      type: String,
      default: null,
    },
    avatarURL: {
      type: String,
    },
    verify: {
      type: string,
      default: null,
    },
    verificationTOKEN: {
      type: String,
      required: [true, "Verify token is required"],
    },
  },
  { versionKey: false }
);

const User = model("User", userSchema);

export { User };
