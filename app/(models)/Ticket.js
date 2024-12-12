import mongoose , {Schema} from "mongoose";
import { title } from "process";
mongoose.connect(process.env.MONGODB_URI);

mongoose.Promise = global.Promise;

const ticketSchema = new Schema(
    {
        title : String ,
        description : String,
        category : String,
        priority : Number,
        progress : Number,
        status : String,
        active : Boolean

    },
    {timestamps : true} //createdAt and updatedAt will be added in the schema
)

const Ticket = mongoose.models.Ticket || mongoose.model("Ticket" , ticketSchema)
export default Ticket
