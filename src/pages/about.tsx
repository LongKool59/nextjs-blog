import DrawerAppBar from "@/components/DrawerAppBar";
import Footer from "@/components/Footer";

export default function About() {
	return (
		<>
			<DrawerAppBar />
			<header
				className="masthead"
				style={{ backgroundImage: `url("/img/about-bg.jpg")` }}
			>
				<div className="container position-relative px-4 px-lg-5">
					<div className="row gx-4 gx-lg-5 justify-content-center">
						<div className="col-md-10 col-lg-8 col-xl-7">
							<div className="page-heading">
								<h1>About Me</h1>
								<span className="subheading">
									Practice makes perfect
								</span>
							</div>
						</div>
					</div>
				</div>
			</header>
			<main className="mb-4">
				<div className="container px-4 px-lg-5">
					<div className="row gx-4 gx-lg-5 justify-content-center">
						<div className="col-md-10 col-lg-8 col-xl-7">
							<p>
								Whats up... My name is Long and this is my
								company project to learn how to use NextJS.
							</p>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
