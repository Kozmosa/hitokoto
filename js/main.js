function getJinrishici() {
	jinrishici.load(function (result) {
		// 自己的处理逻辑
		console.log(result);
		window.detailData = result.data.origin
		const content = result.data.content
		const viewer0 = document.querySelectorAll('#viewer')[0]
		viewer0.innerHTML = content
	});
}

function hitokotoApi() {
	fetch('https://vi.hitokot.cn')
		.then(function (res) {
			return res.json();
		})
		.then(function (data) {
			var returnObj = {
				hitokoto: "",
				from: ""
			};
			returnObj.hitokoto = data.hitokoto;
			returnObj.from = data.from;
			return returnObj;
		})
		.catch(function (err) {
			console.error(err);
		})
}

function displayDetails() {
	// Get details from global object window
	const detailData = window.detailData
	const author = detailData.author
	const title = detailData.title
	const dynasty = detailData.dynasty
	const content = detailData.content.toString()

	// Build modal dialog htmls
	const html = `<h2 style='font-family: Roboto,Noto,Helvetica,Arial,sans-serif;'>${title}</h2><p style='font-family: Roboto,Noto,Helvetica,Arial,sans-serif;'>作者：(${dynasty}) ${author}</p><p style='font-family: Roboto,Noto,Helvetica,Arial,sans-serif;'>全文内容：<br>${content}</p>`

	mdui.dialog({
		content: html
	})
}