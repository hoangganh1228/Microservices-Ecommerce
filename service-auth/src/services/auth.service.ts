import { AppDataSource } from "../config/data-source";
import { User } from "../models/User";
import bcrypt from 'bcrypt';

export class AuthService {
    private userRepo = AppDataSource.getRepository(User);
    
    async register(email: string, password: string) {
        const existing = await this.userRepo.findOne({ where: {email} });
        if (existing) throw new Error('Email already registered');
        const hashed = await bcrypt.hash(password, 10);
        const user = this.userRepo.create({ email, password: hashed });
        return this.userRepo.save(user);
    }

    async login(email: string, password: string) {
        const user = await this.userRepo.findOne({ where: { email }});
        if (!user) throw new Error('Invalid credentials');
        const valid = await bcrypt.compare(password, user.password);
        if (!valid) throw new Error('Invalid credentials');
        return user;
    }
} 
