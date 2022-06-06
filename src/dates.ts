export default (input: string, type: "date" | "iso" | "fancy") => {
	const date = new Date(input);
	switch (type) {
		case "date":
			return date;
		case "iso":
			return date.toISOString()  // date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
		case "fancy":
			return new Intl.DateTimeFormat('en-US', { day: "numeric", month: "long", weekday: "long", year: "numeric" }).format(date)
	}
}

export const isBefore = (date1: Date, date2: Date) => {
	return date1.getTime() < date2.getTime();
}

export const isAfter = (date1: Date, date2: Date) => {
	return date1.getTime() > date2.getTime();
}
