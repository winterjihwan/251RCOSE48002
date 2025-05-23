import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { GenBotService } from './gen-bot.service';
import { GenBotRequestDto } from './dto/gen-bot.dto';
import { FirebaseRequest } from '../../common/interfaces/firebase-request.interface';
import { FirebaseAuthGuard } from '../../common/guards/firebase-auth.guard';

@UseGuards(FirebaseAuthGuard)
@Controller('gen-bot')
export class GenBotController {
    constructor(private readonly genBotService: GenBotService) {
    }

    @Post()
    async createDocument(
        @Req() req: FirebaseRequest,
        @Body() query: GenBotRequestDto,
    ) {
        console.log(query);

        return this.genBotService.createDocByBot(req.user.id, query)
    }
}
