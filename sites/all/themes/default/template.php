<?php
function default_preprocess_page(&$variables) {
	if ($variables['node']->type != "") {
		$variables['template_files'][] = "page-" . $variables['node']->type;
	}

	$alias = drupal_get_path_alias($_GET['q']);
	if ($alias != $_GET['q']) {
		$template_filename = 'page';
		foreach (explode('/', $alias) as $path_part) {
			$template_filename = $template_filename . '-' . $path_part;
			$variables['template_files'][] = $template_filename;
		}
	}
}

function default_preprocess_node(&$variables)
{
	if(drupal_is_front_page()) {
		$variables['template_files'][] = 'node-front';
	}

}