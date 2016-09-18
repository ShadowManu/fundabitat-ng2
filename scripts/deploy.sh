#!/bin/bash

# Any subsequent(*) commands which fail will
# cause the shell scriptto exit immediately
set -e

BLUE='\033[0;34m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

### HELPER FUNCTIONS

function log {
  local ENDING=${2:-"..."}
  echo -e "${BLUE}[DEPLOY] ${GREEN}$1$ENDING${NC}"
}

function warn {
  local ENDING=${2:-"..."}
  echo -e "${BLUE}[DEPLOY] ${YELLOW}$1$ENDING${NC}"
}

### MAIN FUNCTIONS
function buildProject {
  if [ "$UPDATE" != 'false' ]; then
    log "Setting up dependencies"
    # This can cause a bug regarding `node_modules/.staging`.
    # See https://github.com/angular/angular-cli/issues/1190 for more information
    npm update
  else
    warn "Skipping check of dependencies"
  fi

  log "Building project"
  npm run build
}

function deployS3 {
  log "Syncing to Firebase"
  npm run upload
  log "Done syncing to Firebase"
}

function main {
  log "-------------------" " "
  log "STARTING DEPLOYMENT" " "
  log "-------------------" " "

  buildProject;
  deployS3;

  log "---------------------------" " "
  log "DEPLOY FINISHED SUCESSFULLY" " "
  log "---------------------------" " "
}

main;
