import {TypeOrmModuleOptions} from '@nestjs/typeorm'

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'bn2sxwomnew6is5mhajf-postgresql.services.clever-cloud.com',
    port: 5432,
    username: 'ucvcbzjkmwk1xiiibzoi',
    password: 'ionwyUV1PPKeE1NonOF7',
    database: 'bn2sxwomnew6is5mhajf',
    url: 'postgresql://ucvcbzjkmwk1xiiibzoi:ionwyUV1PPKeE1NonOF7@bn2sxwomnew6is5mhajf-postgresql.services.clever-cloud.com:5432/bn2sxwomnew6is5mhajf',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true,
}