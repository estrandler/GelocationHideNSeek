import { Module } from '@nestjs/common';
import { SeekerGateway } from './gateway/seeker.gateway';

@Module({
  imports: [],
  controllers: [],
  components: [SeekerGateway],
})
export class ApplicationModule {}
