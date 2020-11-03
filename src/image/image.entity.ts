import { Column, Entity, BaseEntity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity()
export class Image extends BaseEntity{
    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    name: String;

    @Column()
    image_file:{data: Buffer ; contentType :String;};

}