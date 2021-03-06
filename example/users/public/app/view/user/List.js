Ext.define
	(
	'H.view.user.List',
		{
		extend: 'Ext.grid.Panel',
		alias : 'widget.userlist',
		title : 'All Users',
		store: 'H.store.Users',
		columns: 
			[
			{header: 'Name',  dataIndex: 'full_name',  flex: 1},
			{header: 'Email', dataIndex: 'email', flex: 1}
			],
		dockedItems: 
			[
				{
				xtype: 'toolbar',
				dock: 'top',
				items:  
					[
						{
						text:	'add User',
						action: 'addUser' 
						},
						{
						text:	'delete User',
						itemId: 'delUser',
						disabled: true, 
						action: 'delUser'
						}
					]
				}
			]
		}
	);
