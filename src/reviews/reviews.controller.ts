import { Controller, 
    Get,
    Post,
    Body,
    Param,
} from '@nestjs/common';
import {CreateReviewDto} from './dto/create-review.dto';
import {Reviews} from './review.entity';
import {ReviewsService} from './reviews.service';
@Controller('reviews')
export class ReviewsController {
    constructor(readonly reviewService : ReviewsService){}

    @Get()
    getAllReview():Promise<Reviews[]>{
        return this.reviewService.getReview();
    }

    @Post()
  createReview(
    @Body() createReviewDto: CreateReviewDto,
  ): Promise<Reviews> {
    return this.reviewService.createReview(createReviewDto);
  }
}

