import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { OtpModule } from './otp/otp.module';
import { CarTypesModule } from './car-types/car-types.module';
import { CitiesModule } from './cities/cities.module';
import { RequirementController } from './requirement/requirement.controller';
import { RequirementService } from './requirement/requirement.service';
import { RequirementModule } from './requirement/requirement.module';
import { DocumentsModule } from './documents/documents.module';
import { SubscriptionModule } from './subscription/subscription.module';
import { BusinessCitiesModule } from './business-cities/business-cities.module';
import { PostsModule } from './posts/posts.module';
import { SettingsModule } from './settings/settings.module';
import { WhatsAppModule } from './common/whatsapp.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
      serveRoot: '/files',
    }),
    PrismaModule,
    CitiesModule,
    OtpModule,
    AuthModule,
    CarTypesModule,
    RequirementModule,
    DocumentsModule,
    SubscriptionModule,
    BusinessCitiesModule,
    PostsModule,
    SettingsModule,
    WhatsAppModule,
  ],
  controllers: [AppController, RequirementController],
  providers: [AppService, RequirementService],
})
export class AppModule { }
