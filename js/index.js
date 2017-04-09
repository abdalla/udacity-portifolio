const projects = [
	{
		"thumb": "imgs/projects/saintpaul.png",
		"title": "Saint Paul",
		"uri": "http://www.saintpaul.com.br/default.aspx"
	},
	{
		"thumb": "imgs/projects/fnac.png",
		"title": "FNAC",
		"uri": "http://www.fnac.com.br/"
	},
	{
		"thumb": "imgs/projects/pamais.png",
		"title": "PA Mais",
		"uri": "https://www.paodeacucarmais.com.br"
	},
	{
		"thumb": "imgs/projects/hni.png",
		"title": "Hni Corp",
		"uri": "http://www.hnicorp.com/"
	},
	{
		"thumb": "imgs/projects/asi.png",
		"title": "Allsteel Office",
		"uri": "http://allsteeloffice.com/"
	},
	{
		"thumb": "imgs/projects/hon.png",
		"title": "HON",
		"uri": "https://www.hon.com/"
	},
	{
		"thumb": "imgs/projects/fiat.png",
		"title": "Fiat - BR",
		"uri": "http://www.fiat.com.br/"
	},
	{
		"thumb": "imgs/projects/infoglobo.png",
		"title": "Infoglobo",
		"uri": "http://infoglobo.com.br/Anuncie/Home.aspx"
	},
	{
		"thumb": "imgs/projects/datamidia.png",
		"title": "Datamidia FCBi",
		"uri": "https://www.fcb.com/"
	}
];


(() => {
	const getHtml = () => {
		const count = projects.length - 1;
		const html = projects.map((p, index) => {
			return `<article id=${index} class="features-content">
								<div class="project-img">
									<img class="project-thumb" src="${p.thumb}" alt="${p.title}">
								</div>
								<div class="project-title">
									<h3>${p.title}</h3>
								</div>
								<div class="project-url">
									<a href="${p.uri}">${p.uri}</a>
								</div>

								${ index < count ? '<hr />' : ''}
							</article>`;
		}).join('');

		return html;
	};

 	const loadProjects = () => {
 		const contentDiv = document.getElementsByClassName('features-container')[0];

 		contentDiv.innerHTML = getHtml();
 	};

	loadProjects();

 })();





