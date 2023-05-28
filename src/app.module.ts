import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/user/user.module';
import { BabyactivityModule } from './modules/babyActivity/babyactivity.module';
import { BabyprofileModule } from './modules/babyProfile/babyprofile.module';
import { GrowthModule } from './modules/growth/growth.module';
import { HealthRecordModule } from './modules/healthRecord/healthRecord.module';
import { NoteModule } from './modules/note/note.module';
import { VaccinationModule } from './modules/vaccination/vaccination.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      ssl:
        process.env.NODE_ENV === 'production'
          ? {
              rejectUnauthorized: false,
            }
          : false,
      autoLoadEntities: true,
    }),
    UserModule,
    BabyactivityModule,
    BabyprofileModule,
    GrowthModule,
    HealthRecordModule,
    NoteModule,
    VaccinationModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
