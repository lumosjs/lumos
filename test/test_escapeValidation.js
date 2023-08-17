import { escape } from "#validation/escape";
import { describe,it } from "mocha";
import { expect } from "chai";

describe("Validation Functions",()=>{
	describe("Invalid characteres in string",()=>{
		it("should return null if the string is valid",()=>{
			const data = {
				nick:"vicente"
			};

			const field = "nick";
			const result = escape(data,field);

			expect(result).to.be.null
		})

		it("should return error message for invalid string",()=>{
			const data = {
				nick:"<vicente></vicente"
			};

			const field = "nick";
			const customMensagem = "string contains invalid characters"
			const result = escape(data,field,customMensagem);

			expect(result).to.equal(customMensagem);
		})
	});
});