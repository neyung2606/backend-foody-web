import {TypeOrmModuleOptions} from '@nestjs/typeorm'

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'mongodb',
    url: 'mongodb+srv://localhost:123123123@market.knr4m.gcp.mongodb.net/market',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true,
    useUnifiedTopology: true
}