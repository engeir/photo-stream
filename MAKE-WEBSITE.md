# How to generate this thing

The only files needed from the main repo is (I think) `.env` and `docer-compose.yml`.

The photos are added to `./photos/original/` and the static site can then be generated
using:

```bash
docker compose up -d
```

This generating will perhaps take some time, but eventually it finishes, and you will
want to copy the static site from the docker instance to the local machine. First, we
check the docker id:

```bash
docer container ls
```

Then we use that id to copy using

```bash
docker cp 9585393b0d1b:/photo-stream/_site/ _site/
```

where `9585393b0d1b` is the docker id.

To get my own favicons, I further copy over the contents of `./favicon_package_v0.16/`
into `./_site/`.
