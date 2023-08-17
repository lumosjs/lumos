import { trim } from "#validation/trim";
import { describe, it } from "mocha";
import { expect } from "chai";


describe("Validation Functions",()=>{
	describe("string space",()=>{
		it("should return null for valid string dont contain space",()=>{
			const data = {
				name:"Vicente"
			}

			const field = "name";
			const result = trim(data,field);

			expect(result).to.be.null
		});

		it("should return invalid string contain left space",()=>{
			const data = {
				name:" vicente"
			};

			const field = "name";
			const customMensagem = "String contain left space...";
			const result = trim(data,field,customMensagem);

			expect(result).to.equal("String contain left space...")
		})

		it("should return invalid string contain right space",()=>{
			const data = {
				name:"vicente "
			};

			const field = "name";
			const customMensagem = "String contain right space...";
			const result = trim(data,field,customMensagem);

			expect(result).to.equal("String contain right space...")
		})


		it("should return invalid string contain space",()=>{
			const data = {
				name:" vicente "
			};

			const field = "name";
			const customMensagem = "String contain  space...";
			const result = trim(data,field,customMensagem);

			expect(result).to.equal("String contain  space...")
		})
	})
})