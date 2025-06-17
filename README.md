# Docker Sync

Pull an image from one registry and push to another

# Author

[sebdroid](https://github.com/sebdroid)

# Usage

```yaml
name: Sync Registry
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - name: Sync From Docker Hub to ECR
      uses: sebdroid/docker-sync-action@master
      with:
        source_repository: docker.io/nginx:latest
        source_username: ${{ secrets.DOCKER_USERNAME }}
        source_password: ${{ secrets.DOCKER_PASSWORD }}
        target_repository: 123456789012.dkr.ecr.eu-west-2.amazonaws.com/nginx:latest
        target_username: ${{ secrets.ECR_USERNAME }}
        target_password: ${{ secrets.ECR_PASSWORD }}
```
