const projects = [
	{
		"thumb": "imgs/projects/movie.png",
		"title": "Top Movies",
		"uri": "https://github.com/abdalla/py-movies"
	},
	{
		"thumb": "imgs/projects/movie.png",
		"title": "Top Movies",
		"uri": "https://github.com/abdalla/py-movies"
	},
	{
		"thumb": "imgs/projects/movie.png",
		"title": "Top Movies",
		"uri": "https://github.com/abdalla/py-movies"
	},
		{
		"thumb": "imgs/projects/movie.png",
		"title": "Top Movies",
		"uri": "https://github.com/abdalla/py-movies"
	},
	{
		"thumb": "imgs/projects/movie.png",
		"title": "Top Movies",
		"uri": "https://github.com/abdalla/py-movies"
	},
	{
		"thumb": "imgs/projects/movie.png",
		"title": "Top Movies",
		"uri": "https://github.com/abdalla/py-movies"
	},
	{
		"thumb": "imgs/projects/movie.png",
		"title": "Top Movies",
		"uri": "https://github.com/abdalla/py-movies"
	},
	{
		"thumb": "imgs/projects/movie.png",
		"title": "Top Movies",
		"uri": "https://github.com/abdalla/py-movies"
	},
	{
		"thumb": "imgs/projects/movie.png",
		"title": "Top Movies",
		"uri": "https://github.com/abdalla/py-movies"
	},
		{
		"thumb": "imgs/projects/movie.png",
		"title": "Top Movies",
		"uri": "https://github.com/abdalla/py-movies"
	},
	{
		"thumb": "imgs/projects/movie.png",
		"title": "Top Movies",
		"uri": "https://github.com/abdalla/py-movies"
	},
	{
		"thumb": "imgs/projects/movie.png",
		"title": "Top Movies",
		"uri": "https://github.com/abdalla/py-movies"
	}
];


(() => {
	const getHtml = () => {
		const count = projects.length - 1;
		const html = projects.map((p, index) => {
			return `<div id=${index} class="features-content">
								<div class="project-img">
									<img class="project-thumb" src="${p.thumb}">
								</div>
								<div class="project-title">
									<h3>${p.title}</h3>
								</div>
								<div class="project-url">
									<a href="${p.uri}">${p.uri}</a>
								</div>

								${ index < count ? '<hr />' : ''}
							</div>`;
		}).join('');

		return html;
	};

 	const loadProjects = () => {
 		const contentDiv = document.getElementById('features-container');

 		contentDiv.innerHTML = getHtml();
 	};

	loadProjects();

 })();





