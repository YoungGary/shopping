import { Module } from '@nestjs/common';
import { MainController } from './main/main.controller';
import { LoginController } from './login/login.controller';
import { ManagerController } from './manager/manager.controller';
import { ToolsService } from '../../service/tools/tools.service';
@Module({
  controllers: [MainController, LoginController, ManagerController],
  providers: [ToolsService],
})
export class AdminModule {}
