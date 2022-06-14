const users = [
	{
		id: 1,
		name: 'ryan',
		email: 'ryan@codeup.com',
		languages: ['clojure', 'javascript'],
		yearsOfExperience: 5
	},
	{
		id: 2,
		name: 'luis',
		email: 'luis@codeup.com',
		languages: ['java', 'scala', 'php'],
		yearsOfExperience: 6
	},
	{
		id: 3,
		name: 'zach',
		email: 'zach@codeup.com',
		languages: ['javascript', 'bash'],
		yearsOfExperience: 7
	},
	{
		id: 4,
		name: 'fernando',
		email: 'fernando@codeup.com',
		languages: ['java', 'php', 'sql'],
		yearsOfExperience: 8
	},
	{
		id: 5,
		name: 'justin',
		email: 'justin@codeup.com',
		languages: ['html', 'css', 'javascript', 'php'],
		yearsOfExperience: 9
	}
];

const languages = users.filter(function(languageNumber){
	return languageNumber.languages.length >= 3;
})

const emails = users.map(function(emailAddress){
	return emailAddress.email;
})

const averageAge = users.reduce(function(total, xp) {
	return xp.yearsOfExperience + total
},0) / users.length

const longestEmail = users.reduce(function(a, b){
	if (a.email.length > b.email.length) {
		return a.email;
	} return b;
})

const oneName = users.reduce(function(placeHolder,names){
	return names.name + " " + placeHolder;
},"")

const bonus = users.map(function(language) {
	return language.languages;
}).reduce(function(array1,array2){
	return array1.concat(array2);
}).reduce(function(unique,item){
	if (unique.includes(item)) {
		return unique;
	} return [...unique, item];
},[])


console.log(languages);
console.log(emails);
console.log(averageAge);
console.log(longestEmail);
console.log(oneName);
console.log(bonus);