// models/user.js
const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    minlength: 3,
    maxlength: 20,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, "Invalid email address"],
  },
  password: {
    type: String,
    required: [true, "Password is required,"],
    minlength: 6,
    trim: true,
    select: false,
    validate: {
      validator: function (value) {
        const regex =
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,20}$/;
        return regex.test(value);
      },
      message:
        "Password must be 6~20 characters, at least 1 uppercase letter, 1 lowercase letter, 1 number, allow special characters(@$!%*#).",
    },
  },

  // Add more fields as needed
  agreeTerms: {
    type: Boolean,
    default: false, // Set the default value to false
  },
});

const User = model("User", userSchema);

module.exports = User;
