import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
export default function Footer() {
	return (
		<footer className="border-top">
			<div className="container px-4 px-lg-5">
				<div className="row gx-4 gx-lg-5 justify-content-center">
					<div className="col-md-10 col-lg-8 col-xl-7">
						<ul className="list-inline text-center">
							<li className="list-inline-item">
								<TwitterIcon />
							</li>
							<li className="list-inline-item">
								<FacebookIcon />
							</li>
							<li className="list-inline-item">
								<GitHubIcon />
							</li>
						</ul>
						<div className="small text-center text-muted fst-italic">
							Copyright &copy; Your Website 2023
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
