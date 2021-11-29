#	@ctrip/ares-util/gitlab

Ctrip GitLab accessor.

##	Get Started

Depenency `gitlab-rest` is required and SHOULD be installed by hand.

A token file is required at `<APP_HOME>/token/git.ctripcorp.com.token`. Here, `<APP_HOME>` is the directory where the application's start-up js file located.

Then, the sub module will work:
```javascript
const gitlab = require('@ctrip/ares-util/gitlab');

// An instance of `Promise` will be returned.
gitlab.download({
	target: '<DIRECTORY_TO_PUT_DOWNLOADED_FILES>',
	url: '<REPO_URL>',
	ref: '<BRANCH_OR_COMMIT_ID>',
});
```