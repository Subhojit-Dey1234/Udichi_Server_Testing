const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TestSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	type_of_test: {
		type: String,
		required: true,
	},
	question_groups: [
		{
			type: Schema.Types.ObjectId,
			ref: "question_group_schema",
		},
	],
	starting_date: {
		type: Date,
		default : Date.now()
	},
	total_number: {
		type: Number,
		required: true,
	},
	available_window: {
		type: Number,
		required: true,
	},
});

module.exports = mongoose.model("test_schema", TestSchema);
