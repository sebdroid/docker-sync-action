# Sync Docker image to registry

Pull an image from one registry and push to another
# Author

[onichandame](https://onichandame.com)

# Usage

```yaml
name: Sync Registry
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - name: Sync From Docker Hub to Aliyun
      uses: onichandame/docker-registry-sync-action@master
      with:
        source_repository: docker.io/nginx:latest
        source_username: ${{ secrets.DOCKER_USERNAME }}
        source_password: ${{ secrets.DOCKER_PASSWORD }}
        target_repository: registry.cn-shanghai.aliyuncs.com/user/nginx:latest
        target_username: ${{ secrets.ALIYUN_USERNAME }}
        target_password: ${{ secrets.ALIYUN_PASSWORD }}
```
