# Making a release

To make a new release we use github action release_all.yml to release all modules at once.
The release action is triggered when new push is performed to `release` branch.

You can take following steps to trigger release action and make new release with the content from main branch.

```bash
# if not
# checkout release branch
git checkout release
# merge changes from main
git merge main
# push changes to release
git push
# push for the first time and define upstream
git push -u origin release
```

## Performed operations

- checkout release branch with complete history
- calculate new version based on conventional commits keywords 'feat/fix'. For breaking changes use BREAKING CHANGE: at the footer of the commit message
- build the services:
  - auth: build, tag and push docker image to ghcr.io
  - database: build, tag and push docker image to ghcr.io
  - backend: build, tag and push docker image to ghcr.io
  - frontend: build, tag and push docker image to ghcr.io
  - nginx: build, tag and push docker image to ghcr.io
  - scrapers: build, tag and push docker image to ghcr.io
- create docker-compose.yml for relase that uses images created in the previous step
- update citation file with new version number and release date
- make deployment.zip file where all files needed for deployment are included
- create github release (draft) and include information from changelog and deployment.zip

## Removing tags

If for some reason you need to remove existing release and tag from the repository, use the git commands below to remove tag.

```bash
# delete locally
git tag -d {tag}
# remove from origin
git push origin --delete {tag}
# or more specificaly
git push origin :refs/tags/{tag}
```
