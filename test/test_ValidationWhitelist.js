import { whitelist } from "#validation/whitelist";
import { describe, it } from "mocha";
import { expect } from "chai";

describe("Validation Functions",()=>{
	describe("whitelist",()=>{
		it("should return null if the string is valid for list",()=>{
			const data = {
				name:"Alice"
			}

			const allowValues = ["Alice","Miguel","Domingos"];
			const field = "name";
			const result = whitelist(data,field,allowValues);
			expect(result).to.be.null;
		})

		it("should return error message if the string is invalid for list",()=>{
			const data = {
				name:"Alice"
			}

			const allowValues = ["Miguel","Domingos"];
			const field = "name";
			const customMensagem = "The names valid are Miguel and Domingos"
			const result = whitelist(data,field,allowValues,customMensagem);
			expect(result).to.equal(customMensagem);
		})
	})
})