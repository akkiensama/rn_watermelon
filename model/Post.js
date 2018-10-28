import { Model } from '@nozbe/watermelondb'
import { field, children } from '@nozbe/watermelondb/decorators'


export default class Post extends Model {
    static table = 'posts'
    static associations = {
        comments: {
            type: 'has_many',
            foreignKey: 'post_id'
        },
    }

    @field('title') title
    
    @field('body') body

    @children('comments') comments
}