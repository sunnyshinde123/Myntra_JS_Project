# Install Kind (Linux)
- [ $(uname -m) = x86_64 ] && curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.25.0/kind-linux-amd64
- chmod +x ./kind
- sudo mv ./kind /usr/local/bin/kind

# Install Kubectl (Linux)
- curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
- curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl.sha256"
- echo "$(cat kubectl.sha256)  kubectl" | sha256sum --check
- sudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl
