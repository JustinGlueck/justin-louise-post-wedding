    <section id="wedding-photos" class="wedding-photos__section">
        <div class="container">
	        <div class="row">
	            <div class="col-lg-12">
	                <h1 class="page-header">Wedding Photos</h1>
	            </div>
	            <div id="gallery-header-center-left-title">All Galleries</div>
	            <div id="gallery-header-center-right">
	            	<div class="center">
		            	<div class="gallery-header-center-right-links" id="filter-all">All</div>
						<div class="gallery-header-center-right-links" id="filter-getting-ready">Getting Ready</div>
						<div class="gallery-header-center-right-links" id="filter-arrival">Arrival</div>
						<div class="gallery-header-center-right-links" id="filter-ceremony">Ceremony</div>
						<div class="gallery-header-center-right-links" id="filter-reception">Reception</div>
						<div class="gallery-header-center-right-links" id="filter-portraits">Portraits</div>
						<div class="gallery-header-center-right-links" id="filter-speeches">Speeches</div>
						<div class="gallery-header-center-right-links" id="filter-sunset">Sunset</div>
						<div class="gallery-header-center-right-links" id="filter-entertainment">Entertainment</div>
					</div>
				</div>
	        </div>
	        <div class="row">
	        <div id="gallery-content">
				<div id="gallery-content-center">
					{% for image in images %}
						<a class="swipebox" href="app/modules/wedding-photos/img/{{image.dir}}/{{image.src}}" target="_blank">
					    	<img src="app/modules/wedding-photos/img/{{image.dir}}/thumbs/{{image.src}}" class="all {{image.dir}}"/>
					    </a>
					{% endfor %}
			    </div>
			</div>
	    </div>
    </section>