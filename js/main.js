$(function() {
	var inline = '',
		external = '',
		precompiled = '',
		data = {
			text: 'Hello World!'
		};

	inline = Handlebars.compile($('#inline-template').html());
	$('#inline').html(inline(data));


	$.get('template/ajax.html', function(response) {

		external = Handlebars.compile(response);
		$('#ajax').html(external(data));

	});

	precompiled = Handlebars.templates['precompiled.html'];
	$('#precompiled').html(precompiled(data));
});
