import bcrypt from 'bcrypt';
import { BeforeInsert, BaseEntity, Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('Users')
export class User extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar', { length: 50})
    firstName: string;

    @Column('varchar', { length: 50})
    lastName: string;

    @Column('varchar', { length: 100, unique: true })
    email: string;

    @Column('varchar', { length: 128})
    password: string;

    @BeforeInsert()
    async hashPassword() {
        this.password = await bcrypt.hash(this.password, 10);
    }
}
