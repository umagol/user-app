import mongoose from 'mongoose';

const userSchema = new mongoose.Schema( {
      fullName: { type: String, required: true },
      username: { type: String, required: true },
      password: { type: String, required: true },
      about: { type: String, required: true },
      status: { type: Number, required: true, default: 1 },
      createdAt: { type: Date, default: Date.now },
      updatedAt: { type: Date, default: Date.now },
} );
const UserModel =  mongoose.models.users || mongoose.model( 'users', userSchema );

export default UserModel;
