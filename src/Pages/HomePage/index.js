import HeroMovie from "../../Components/HeroMovie";
import PrimaryLayout from "../../Components/Layouts/PrimaryLayout";
import MovieList from "../../Components/MovieList";

const heroData = {
    poster: "https://static.namava.ir/Content/Upload/Images/e2374a17-2a98-4447-8960-bef6f4f7d6aa.jpg?anchor=middlecenter&crop=auto&scale=both&w=1920&h=900",
    title: "Ted lasso",
    age: "14",
    genres: ["drama", "comody", "sport"],
    playLink: "https://www.namava.ir/series/67697-%D8%AA%D8%AF_%D9%84%D8%A7%D8%B3%D9%88",
    infoLink: "",
    description: "American football coach De Lasso travels to England to help a London football team improve its standing in the league and..."
}
export default function HomePage () {
    return (
        <PrimaryLayout>
            <HeroMovie data={heroData}></HeroMovie>
            <MovieList title="Spotlight" url="movies"></MovieList>
            <MovieList title="New on Crackle" url="movies?page=3"></MovieList>
            <MovieList title="Popular TV" url="movies?page=4"></MovieList>
        </PrimaryLayout>
    )
}