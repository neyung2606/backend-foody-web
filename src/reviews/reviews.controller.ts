import { Controller, 
    Get,
    Post,
    Body,
    Param,
    Delete,
    Query,
} from '@nestjs/common';
import { Auth } from 'src/auth/auth.decorator';
import {CreateReviewDto} from './dto/create-review.dto';
import {Reviews} from './review.entity';
import {ReviewsService} from './reviews.service';
@Controller('reviews')
export class ReviewsController {
    constructor(readonly reviewService : ReviewsService){}

    @Get()
    @Auth('')
    getAllReview(@Query() req: any):Promise<Reviews[]>{
        return this.reviewService.getReview(req);
    }

    @Post('/create')
    @Auth('')
    createReview(
    @Body() createReviewDto: CreateReviewDto,
  ): Promise<Reviews> {
    return this.reviewService.createReview(createReviewDto);
  }

    @Delete('/:id')
    @Auth('')
    deleteOrder(@Param('id') id: number) :Promise<void>{
      return this.reviewService.deleteReview(id);
    }
}

