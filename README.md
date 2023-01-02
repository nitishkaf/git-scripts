# git-scripts

A collection of custom git commands and scripts to improve developer productivity and streamline common Git tasks.

## Features

- A variety of tools and utilities to help you work with Git more efficiently
- Suitable for users of all skill levels
- Open source and freely available for use and modification

## Installation

To use the scripts in this repository, clone the repository and add the `git-scripts` directory to your PATH environment variable.

```bash
git clone git@github.com:developernit/git-scripts.git
echo 'export PATH=$PATH:/path/to/git-scripts' >> ~/.bashrc

```

Alternatively, you can add individual scripts to your `~/.gitconfig` file as aliases.
For example:

```bash
[alias]
  summary = !/path/to/git-scripts/git-summary
```

## Usage

To see a list of available scripts, use the `ls` command in the `git-scripts` directory.

```bash
ls /path/to/git-scripts
```

To see the usage instructions for a specific script, use the `--help` flag.

```bash
git summary --help

```

## Contributing

We welcome contributions to `git-scripts`! If you have an idea for a new script or feature, or if you find a bug, please open an issue or submit a pull request.

## License

git-scripts is licensed under the
[MIT License.](https://choosealicense.com/licenses/mit/)

## Disclaimer

Use the scripts in this repository at your own risk. We cannot be held responsible for any damage or loss of data that may result from their use.
