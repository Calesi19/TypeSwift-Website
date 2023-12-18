
import { Hero } from "./Hero"
import { Instructions } from "./Instructions"
import { Footer } from "./Footer"

export function Home() {
	return (
		<div class="home">
			<Hero />
			<Instructions />
			<Footer />
		</div>
	);
}
