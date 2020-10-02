import {TypeOrmModuleOptions} from '@nestjs/typeorm'

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'mongodb',
    url: 'mongodb+srv://localhost:123123123@market.knr4m.gcp.mongodb.net/market?retryWrites=true&w=majority',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true,
    useUnifiedTopology: true
}