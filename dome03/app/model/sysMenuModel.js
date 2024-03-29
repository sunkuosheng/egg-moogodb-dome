'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const SysMenuSchema = new Schema({
    _id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true
    },
    age: {
      type: Number,
    },
    gender: {
      type: String,
      enum: ['1', '2', '3'], //1、男  2、女  3、无
      default: '3'
    },
    phone: {
      type: String,
    },
    email: {
      type: String,
    },
    create_time: {
      type: Date,
      default: Date.now(),
    },
  });
  return mongoose.model('user', SysMenuSchema, 'user');
};
