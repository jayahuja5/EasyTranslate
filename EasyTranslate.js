(function ($)
{
	$.fn.EasyTranslate = function (options)
	{
		var settings = $.extend(
		{}, options);
		dflt = settings.language;
        if (!localStorage.getItem("Language"))
        {
            localStorage.setItem("Language", dflt);
        }
		function changeLanguage(lng)
		{
			var resources = getLangResources()[lng];
			var dflt;
            $("[et-text]").each(function (i, elt)
			{
				$(elt).text(resources[$(elt).attr("et-text")]);
			});
            $("[et-placeholder]").each(function (i, elt)
            {
                $(this).attr("placeholder",resources[$(elt).attr("et-placeholder")]);
            });
            $("[et-submit]").each(function (i, elt)
            {
                $(this).attr("value",resources[$(elt).attr("et-submit")]);
            });
            $("[et-title]").each(function (i, elt)
            {
                $(this).attr("title",resources[$(elt).attr("et-title")]);
            });
            $("[et-value]").each(function (i, elt)
            {
                $(this).attr("value",resources[$(elt).attr("et-value")]);
            });
		}
		$(function ()
		{
			if (localStorage.getItem("Language") !== null)
			{
				changeLanguage(localStorage.getItem("Language"));
				$('#et_lang').val(localStorage.getItem("Language"));
			}
			$("#et_lang").change(function ()
			{
				var sl = $(this).children("option:selected").val();
				if (typeof (Storage) !== "undefined")
				{
					localStorage.setItem("Language", sl);
                    changeLanguage(sl);
				}
                else{
                    localStorage.setItem("Language", dflt);
                    changeLanguage(dflt);
                }
			});
		});
	};
}(jQuery));