const url = "http://localhost:3000";

export const signUpUser = async (data) => {
	if (!data || !data.username || !data.email || !data.password)
		return null; 
	
	try {
		const response = await fetch(`${url}/api/users`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data)
		});
		
		const json = await response.json();
		
		if (!response.ok) {
			throw new Error(json.error?.message || "Unknown Server Error"); 
		}

	} catch (er) {	
		console.error(er);
	}
};

export const authenticateUser = async (data) => {
	if (!data || !data.email || !data.password) {
		console.log("no data provided");
		return null;
	}

	try {
		const response = await fetch(`${url}/api/login`, {
			method: "POST", 
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		});

		const json = await response.json();
	
		if (!response.ok) {
			throw new Error(json.error?.message || "Unknown Server Error");
		}

	} catch (err) {
		//console.error(err);
	}
}
