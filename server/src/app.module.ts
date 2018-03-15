import { Module } from '@nestjs/common';
import { SeekerService } from './seeker.service';

@Module({
  imports: [],
  controllers: [],
  components: [SeekerService],
})
export class ApplicationModule {}
