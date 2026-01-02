const superHeroes: string[] = [];
const heroPower: Array<number> = [];

superHeroes.push("spiderman", "ironman", "thor");
console.log(superHeroes);

type User = {
    name: string,
    isActive: boolean
};

const allUsers: User[] = [];
allUsers.push({name: "hitesh", isActive: false}, {name: "soch", isActive: true});