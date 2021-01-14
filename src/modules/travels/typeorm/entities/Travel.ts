import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import Country from '@modules/countries/infra/typeorm/entities/Country';

@Entity('travels')
class Travel {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  local: string;

  @Column()
  meta: string;

  @Column()
  country_id: number;

  @ManyToOne(() => Country)
  @JoinColumn({ name: 'country_id' })
  country: Country;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Travel;
