export default (req, res) => {
	res.render('admin/Main/dashboard', {
		error        : req.flash('error').toString(),
		left_menu    : req.store.getState('left_menu'),
		mata         : {title: 'Админ панель'},
		parent_module: 'dashboard',
		table        : '',
		this_module  : 'dashboard',
		user         : req.user,
	});
};
