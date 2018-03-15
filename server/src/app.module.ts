import { Module } from '@nestjs/common';
import { SeekerGateway } from './gateway/seeker.gateway';
import { HiderGateway } from './gateway/hider.gateway';

@Module({
  imports: [],
  controllers: [],
  components: [SeekerGateway, HiderGateway],
})
export class ApplicationModule {}
